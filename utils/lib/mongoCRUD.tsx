import mongoConnect from "../../backend/mongodb";

export const fetchCollection =  async (dbName: string,collectionName: string) => {
    mongoConnect(dbName, collectionName)
};
export const fetchDataBase =  async (dbName: string,) => {
    mongoConnect(dbName)
};

// fetchCollection("NextJS", "VinceNet");
// fetchDataBase("NextJs");