const express = require('express')
const mongoose = require('mongoose')
const dataRoute = require("./routes/data.route.js")
const app = express()
require('dotenv').config();

app.use("/api/data", dataRoute);
app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: ['GET'],
    allowedHeaders: ['Content-type']
  })
)

const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI)
  .then(() => {
    console.log('Connected to database')
    app.listen(3000, () => {
        console.log('Server is running on port 3000')
    });
})
  .catch(() => { console.log('Connection failed') });
  