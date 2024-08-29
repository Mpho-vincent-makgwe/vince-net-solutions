// pages/api/pyCalls/run-python.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import { exec } from 'child_process';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { url } = req.body;
  console.log("Sent URL from the user to the api: ", url);
  if (!url) {
    res.status(400).json({ error: 'URL is required' });
    return;
  }

  // Construct the command to run the Python script with the URL as an argument
  const command = `python  D:\Vince601\Documents\GitHub\NextJS\vince-net-solutions\py\web-scraping\wsApplication.py "${url}"`;
 
  exec(command, (error, stdout, stderr) => {
    if (error) {
      res.status(500).json({ error: error.message });
      return;
    }

    if (stderr) {
      res.status(500).json({ error: stderr });
      return;
    }

    try {
      // Parse the JSON output from the Python script
      const result = JSON.parse(stdout);
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json({ error: 'Failed to parse JSON from Python script' });
    }
  });
}
