import Link from 'next/link';
import { useState } from 'react';

export default function HomePage() {
  const [url, setUrl] = useState('');
  const [urls, setUrls] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleScrape = async () => {
    setLoading(true);
    setError(null);
    setUrls([]);

    try {
      const response = await fetch('/api/scrape', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ url }),
      });

      const data = await response.json();

      if (response.ok) {
        setUrls(data.urls);
      } else {
        setError(data.error);
      }
    } catch (err) {
      setError('Failed to scrape the website');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Web Scraper</h1>
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        placeholder="Enter URL to scrape"
      />
      <button onClick={handleScrape} disabled={loading}>
        {loading ? 'Scraping...' : 'Scrape'}
      </button>

      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {urls.length > 0 && (
        <div>
          <h2>Scraped URLs:</h2>
          <ul>
            {urls.map((url, index) => (
              <li key={index}>
                <Link href={url} target="_blank"  className="px-4 py-2 hover:text-accent transition" rel="noopener noreferrer">
                  {url}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
