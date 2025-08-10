const { default: sendMail } = require('../EmailSender/mail-sender.js');
const axios = require('axios');
const router=require('express').Router()
const dotenv = require('dotenv');
dotenv.config();



//Zoom API Credentials
const {
  CLIENT_ID,
 SECRET_KEY,
  ACCOUNT_ID
} = process.env;





async function getAccessToken() {

  const tokenUrl = `https://zoom.us/oauth/token?grant_type=account_credentials&account_id=${ACCOUNT_ID}`;
  console.log("token: ",tokenUrl)
  const authHeader = Buffer.from(`${CLIENT_ID}:${SECRET_KEY}`).toString('base64');

  try {
    const response = await axios.post(tokenUrl, null, {
      headers: {
        'Authorization': `Basic ${authHeader}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    return response.data.access_token;
  } catch (error) {
    console.error('Error getting access token:', error.response?.data || error.message);
    throw new Error('Failed to retrieve token');
  }
}

router.post('/meeting', async (req, res) => {
   console.log('Incoming schedule request:', req.body);
  try {
    const token = await getAccessToken();
    console.log("request email: ",req.body.email)
    const response = await axios.post(
      'https://api.zoom.us/v2/users/me/meetings',
      {
        topic: req.body.topic || 'Scheduled Meeting',
        type: 2,
        email:req.body.email,
        start_time: req.body.start_time || new Date().toISOString(),
        duration: req.body.duration || 30,
        timezone: req.body.timezone || 'Asia/Karachi',
        agenda: req.body.agenda || '',
        settings: {
          join_before_host: true,
          mute_upon_entry: true,
          waiting_room: false
        }
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      }
    );
    const meetingData=response.data
      
      await sendMail(req.body.email,meetingData)
    res.json(meetingData);
  } catch (error) {
    console.error('Schedule Error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to schedule meeting' });
  }
});

router.get('/meetings', async (req, res) => {
  try {
    const token = await getAccessToken();

    const response = await axios.get('https://api.zoom.us/v2/users/me/meetings', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    res.json(response.data);
  } catch (error) {
    console.error('List Meetings Error:', error.response?.data || error.message);
    res.status(500).json({ error: 'Failed to list meetings' });
  }
});


router.get('/token', async (req, res) => {
  try {
    const token = await getAccessToken();
    res.json({ token });
  } catch (err) {
    res.status(500).json({ error: 'Token error' });
  }
});


module.exports=router