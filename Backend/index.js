const express = require("express");
const app = express();
const port = 4000;
const cors = require("cors");
app.use(cors());
app.get("/", (req, res) => {
  res.send("Created API");
});

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://mostakin:mostakin+820336@cluster0.ebhk8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function loadData() {
  await client.connect();
  const prodcutCollection = await client.db("Test").collection("Product");
  app.get("/product", async (req, res) => {
    const data = await prodcutCollection.find().toArray();

    // const cursor = await prodcutCollection.find(query);
    // const product = await cursor.toArray();
    res.send(data);
  });
}
loadData();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
