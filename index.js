const express = require('express');
const app = express();
const port = 3000;
const getUniqueNumbers = require('./api/index');
const { MongoClient } = require('mongodb');

async function dbConnection() {
    const uri = "mongodb+srv://admin:AcHsG1Dviib8Lsmv@cluster0.dy1dp.mongodb.net/";

    const client = new MongoClient(uri, { useUnifiedTopology: true });

    try {
        // Connect to the MongoDB cluster
        await client.connect();

        // Make the appropriate DB calls
        await buidlingCrud(client);

    } catch (e) {
        console.error(e);
    } finally {
        // Close the connection to the MongoDB cluster
        await client.close();
    }
}

dbConnection().catch(console.error);

async function buidlingCrud(client) {
  const databaseObject = await client.db("caldar")
  const collectionObject = databaseObject.collection("building")

  // List all buildings
  const allBuildings = await collectionObject.find({}).toArray();
  console.log(allBuildings);

  // Find specific building
  const filteredOne = await collectionObject.findOne({phone: '178-602-9677'})
  console.log('Filtered ==>', filteredOne);

  // Create new building
  const newBuildingToInsert = {
    "id": 51,
    "address": "7 Reindahl Center",
    "boilersId": [2,33,30,8,79,9,45,15,3,67,98,19,80,5,7,5,8,20,26,38,66,76,50,24,99],
    "fullName": "VoooooooonRueden-Lesch",
    "phone": "986-926-5526"
  }
  await collectionObject.insertOne(newBuildingToInsert)

  const insertedOne = await collectionObject.findOne({id: 51})
  console.log('Inserted ==>', insertedOne);

  // Update specific building
  const newValues = { $set: {fullName: "Stanza XV", address: "Canyon 123" } };
  await collectionObject.updateOne({id: 51}, newValues)

  const updatedOne = await collectionObject.findOne({id: 51})
  console.log('Updated ==>', updatedOne);

  // Delete specific building
  await collectionObject.deleteOne({id: 51})

  const allBuildings = await collectionObject.find({}).toArray();
  console.log('New building list ==>', allBuildings);

};


// Static Files
app.use(express.static('public'));

// Dynamic render
app.get('/dynamic', function (req, res) {
  res.send(`<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <h1>${new Date()}</h1>
  </body>
  </html>`);
});

// REST API
app.get('/unique', (req, res) => {
  res.send(getUniqueNumbers());
});


app.listen(port, () => {
  console.log(`Radium app listening at http://localhost:${port}`);
});
