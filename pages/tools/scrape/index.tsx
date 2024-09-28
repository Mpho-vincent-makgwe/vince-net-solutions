import Link from 'next/link';
import { useState } from 'react';

export default function HomePage() {
  const [url, setUrl] = useState('');
  const [contentItems, setContentItems] = useState([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Function to extract file extension from URL
  const getFileExtension = (url: string) => {
    return url.split('.').pop()?.toLowerCase();
  };

  // Function to determine the content type based on file extension
  const getContentType = (url: string) => {
    const extension = getFileExtension(url);
    if (extension) {
      if (['mp4', 'webm', 'avi', 'mov'].includes(extension)) {
        return 'video';
      } else if (extension === 'pdf') {
        return 'pdf';
      } else if (['jpg', 'jpeg', 'png', 'gif', 'bmp', 'webp'].includes(extension)) {
        return 'image';
      } else {
        return 'link';
      }
    }
    return 'link';
  };

  const handleScrape = async () => {
    setLoading(true);
    setError(null);
    setContentItems([]);

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
        const categorizedContent = data.urls.map((url: string) => ({
          url,
          type: getContentType(url),
        }));
        setContentItems(categorizedContent);
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
      {contentItems.length > 0 && (
        <div>
          <h2>Scraped Content:</h2>
          <ul>
            {contentItems.map((item: any, index: any) => (
              <li key={index}>
                {item.type === 'video' && (
                  <video controls width="500">
                    <source src={item.url} type={`video/${getFileExtension(item.url)}`} />
                    Your browser does not support the video tag.
                  </video>
                )}
                {item.type === 'pdf' && (
                  <embed src={item.url} type="application/pdf" width="500" height="600" />
                )}
                {item.type === 'image' && (
                  <img src={item.url} alt="Scraped Image" width="500" />
                )}
                {item.type === 'link' && (
                  <Link href={item.url} target="_blank" className="px-4 py-2 hover:text-accent transition" rel="noopener noreferrer">
                    {item.url}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
