const { MongoClient, ObjectId } = require("mongodb");
const express = require('express')
const mongoose = require('mongoose');
const app = express()

const uri = "mongodb+srv://ryanLeyhe:ryansAPI090203@cluster0.rg16dly.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri);

async function run() {
  try {
    const database = client.db('FlightDB');
    const DB1B = database.collection('DB1B');

    // testing database query 
    const query = { _id: new ObjectId("6684437f95aaf94523281364") }
    const obj = await DB1B.findOne(query);

    console.log(obj);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);

mongoose.connect("mongodb+srv://ryanLeyhe:ryansAPI090203@cluster0.rg16dly.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
  .then(() => console.log('Connected!'));
