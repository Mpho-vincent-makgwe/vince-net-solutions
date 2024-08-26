import mongoConnect from "../../backend/mongodb";

export const fetchCollection =  async (dbName: string,collectionName: string) => {
    const { db, client } = await mongoConnect(dbName); // Await the connection and destructure the returned db and client
  const collection = db.collection(collectionName);
  // Perform operations on the collection here, such as finding documents
  const data = await collection.find({}).toArray(); // Example: Fetch all documents in the collection
  await client.close(); // Ensure the client is closed after the operation
  return data;
};


export const fetchDataBase =  async (dbName: string,) => {
    const { db, client } = await mongoConnect(dbName); // Await the connection and destructure the returned db and client
    // Perform operations on the database here, if necessary
    const collections = await db.listCollections().toArray(); // Example: List all collections in the database
    await client.close(); // Ensure the client is closed after the operation
    return collections;
};

// fetchCollection("NextJS", "VinceNet");
// fetchDataBase("NextJs");