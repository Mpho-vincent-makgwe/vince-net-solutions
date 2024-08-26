const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = process.env.DATABASE_URL;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const mongoConnect = async (dbName: string, colName?: string) =>{
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    console.log("Connected to MongoDB!");

    // Get the database
    const db = client.db(dbName);

    if (colName) {
      // If collection name is provided, return the collection
      const collection = db.collection(colName);
      console.log("Collection selected:", colName);
      return collection;
    } else {
      // If no collection name is provided, return the database
      console.log("Database selected:", dbName);
      return db;
    }
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
// run().catch(console.dir);
export default mongoConnect;