// pages/api/database.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { fetchCollection, fetchDataBase } from '@/utils/lib/mongoCRUD';
// Adjust the import path as necessary

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { dbName, collectionName } = req.query;

    try {
        console.log("Database name from API:", dbName);
        console.log("Collection name from API:", collectionName);

        if (collectionName) {
            const collection = await fetchCollection(dbName as string, collectionName as string);
            res.status(200).json({ success: true, data: collection });
        } else {
            const db = await fetchDataBase(dbName as string);
            res.status(200).json({ success: true, data: db });
        }
    } catch (error) {
        console.error("Error in API handler:", error);
        res.status(500).json({ success: false, message: error.message });
    }
}
