import { fetchCollection, fetchDataBase } from '@/utils/lib/mongoCRUD';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { dbName, collectionName } = req.query;

    if (req.method !== "GET") {
        return res.status(405).json({ success: false, message: "Only GET requests are allowed." });
    }

    console.log("Database name:", dbName);
    console.log("Collection name:", collectionName);

    try {
        if (collectionName) {
            const collection = await fetchCollection(dbName as string, collectionName as string);
            res.status(200).json({ success: true, data: collection });
        } else {
            const db = await fetchDataBase(dbName as string);
            res.status(200).json({ success: true, data: db });
        }
    } catch (error) {
        console.error("Error in API handler:", error);
        res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}
