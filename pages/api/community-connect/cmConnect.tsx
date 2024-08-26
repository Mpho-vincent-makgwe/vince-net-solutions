import { fetchCollection, fetchDataBase } from '@/utils/lib/mongoCRUD';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const { dbName, collectionName } = req.query;

    try {
        if (collectionName) {
            const collection = await fetchCollection(dbName as string, collectionName as string);
            res.status(200).json({ success: true, data: collection });
        } else {
            const db = await fetchDataBase(dbName as string);
            res.status(200).json({ success: true, data: db });
        }
    } catch (error) {
        res.status(500).json({ success: false, message: (error as Error).message });
    }
}
