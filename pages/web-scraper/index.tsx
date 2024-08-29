import { useState } from 'react';

const HomePage = () => {
  const [url, setUrl] = useState('');
  const [data, setData] = useState<{ urls: string[] } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/pyCalls', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });

      if (!res.ok) {
        throw new Error('Failed to fetch data');
      }

      const data = await res.json();
      setData(data);
      setError(null);
    } catch (err: any) {
      setError(err.message);
      setData(null);
    }
  };

  return (
    <div>
      <h1>VinceNet Solutions</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter URL"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <button type="submit">Scrape</button>
      </form>
      {error && <p>Error: {error}</p>}
      {data ? (
        <div>
          <h2>Scraped URLs:</h2>
          <ul>
            {data.urls.map((url, index) => (
              <li key={index}>{url}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default HomePage;
