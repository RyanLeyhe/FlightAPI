const express = require('express');
const mongoose = require('mongoose');
const dataRoute = require('./routes/data.route.js');
const airportRoute = require('./routes/AirportRoute.js');
const cors = require('cors');
const app = express();
const fs = require('fs')
require('dotenv').config();

app.use(express.json());
app.use(cors({
  origin: 'http://18.188.12.168:5173', // public IP of EC2 instance at frontend port 5173
  methods: ['GET'],
  allowedHeaders: ['Content-Type']
}));

app.use("/api/data", dataRoute);
app.use('/api/airports', airportRoute);

// const mongoURI = process.env.MONGO_URI;
const mongoURI = fs.readFileSync('/run/secrets/mongo_uri', 'utf-8').trim()

mongoose.connect(mongoURI)
  .then(() => {
    console.log('Connected to database');
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch(err => {
    console.error('Connection failed:', err);
  });
