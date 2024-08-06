const express = require('express');
const mongoose = require('mongoose');
const dataRoute = require('./routes/data.route.js');
const airportRoute = require('./routes/AirportRoute.js');
const cors = require('cors');
const app = express();
require('dotenv').config();

app.use(express.json());
app.use(cors({
  origin: 'http://localhost:5173', 
  methods: ['GET'],
  allowedHeaders: ['Content-Type']
}));

app.use("/api/data", dataRoute);
app.use('/api/airports', airportRoute);

const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to database');
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch(err => {
    console.error('Connection failed:', err);
  });
