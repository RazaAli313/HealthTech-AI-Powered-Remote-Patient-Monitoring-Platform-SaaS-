const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const zoomSchedule=require('./api/Zoom/zoom.js');


const app = express();

app.use(express.json());

 
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST'], 
  allowedHeaders: ['Content-Type']
}));

app.use('/schedule',zoomSchedule)

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Health AI Server running on http://localhost:${PORT}`);
});

