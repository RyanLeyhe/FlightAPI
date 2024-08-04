const express = require('express')
const mongoose = require('mongoose')
const dataRoute = require("./routes/data.route.js")
const app = express()
require('dotenv').config();

app.use("/api/data", dataRoute);

const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI)
  .then(() => {
    console.log('Connected to database')
    app.listen(3000, () => {
        console.log('Server is running on port 3000')
    });
})
  .catch(() => { console.log('Connection failed') });