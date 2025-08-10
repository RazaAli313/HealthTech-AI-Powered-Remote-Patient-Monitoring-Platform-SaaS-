import nodemailer from 'nodemailer'
import {google} from 'googleapis'





const sendMail=async (receiverEmail,meetingDetails)=>{


const OAUTH2_CLIENT_ID=process.env.OAUTH2_CLIENT_ID
const OAUTH2_CLIENT_SECRET=process.env.OAUTH2_CLIENT_SECRET
const OAUTH2_EMAIL=process.env.OAUTH2_EMAIL
const OAUTH2_REFRESH_TOKEN=process.env.OAUTH2_REFRESH_TOKEN
const REDIRECT_URL="https://developers.google.com/oauthplayground"

const OAuth2Client=new google.auth.OAuth2(OAUTH2_CLIENT_ID,OAUTH2_CLIENT_SECRET,REDIRECT_URL)
OAuth2Client.setCredentials({refresh_token:OAUTH2_REFRESH_TOKEN})
    try{
       
    const access_token=(await OAuth2Client.getAccessToken()).token
    console.log("Hello") 
    const transporter=nodemailer.createTransport({

        service:"gmail",
        auth:{
            type:"OAuth2",
            user:OAUTH2_EMAIL,
            clientId:OAUTH2_CLIENT_ID,
            clientSecret:OAUTH2_CLIENT_SECRET,
            refreshToken:OAUTH2_REFRESH_TOKEN,
            accessToken:access_token

        }
    }

    )

    const mailOptions={
        from:OAUTH2_EMAIL,
        to:receiverEmail,
        subject:"🩺 Health AI - Your Doctor Appointment Confirmation",
        text:"Nodemailer Testing Email using OAuth2", 
        html:`<div style="font-family: Arial, sans-serif; color: #333; padding: 20px;">
        <h2 style="color: #0A84FF;">Health AI - Appointment Scheduled</h2>
        <p>Dear Patient,</p>
        <p>Your appointment has been scheduled with the doctor. Here are the meeting details:</p>
        <ul>        
          <li><strong>Topic:</strong> ${meetingDetails.topic}</li>
          <li><strong>Time:</strong> ${new Date(meetingDetails.start_time).toLocaleString()}</li>
          <li><strong>Duration:</strong> ${meetingDetails.duration} minutes</li>
          <li><strong>Zoom Link:</strong> <a href="${meetingDetails.join_url}">Join Meeting</a></li>
        </ul>
        <p>Please join on time. Let us know if you have any questions.</p>
        <p style="margin-top: 30px;">Best regards,<br>Health AI Team</p>
      </div>`
    }
                      
    const res=await transporter.sendMail(mailOptions)
    if(res)   console.log("Email sent successfully....."+res.response)
    }
        catch(error){
            console.log("Error sending email"+error.message)
        }
}

export default sendMail


