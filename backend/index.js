const express = require('express');
const mongoose = require('mongoose');
const dataRoute = require('./routes/data.route.js');
const airportRoute = require('./routes/AirportRoute.js');
const flightRoute = require('./routes/FlightRoute.js')
const fareRoute = require('./routes/FareRoute.js')
const cardRoute = require('./routes/CardRoute.js')
const cors = require('cors');
const app = express();
const fs = require('fs')
require('dotenv').config();

app.use(express.json());
app.use(cors({
  origin: ['http://localhost:5174'], // public IP of EC2 instance at frontend port 5173
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));

app.options('*', cors()); // Handle preflight requests

app.use("/api/data", dataRoute);
app.use('/api/airports', airportRoute);
app.use('/api/market-miles', flightRoute);
app.use('/api/avg-fare', fareRoute);
app.use('/api/cards', cardRoute);

const mongoURI = process.env.MONGO_URI; // !!! ENV URI FOR LOCAL DEVELOPMENT. COMMENT BEFORE PUSHING !!!
const port = process.env.PORT || 3000;  // Default to 3000 if PORT is not defined
// const mongoURI = fs.readFileSync('/run/secrets/mongo_uri', 'utf-8').trim() // FOR EC2 INSTANCE

mongoose.connect(mongoURI)
  .then(() => {
    console.log('Connected to database');
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch(err => {
    console.error('Connection failed:', err);
  });
