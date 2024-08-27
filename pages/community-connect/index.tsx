import LoadingSpinner from '@/components/Community-Connect/ui/Loading/LoadingSpinner';
import React, { useEffect, useState } from 'react';

const CommunityConnect = () => {
  const [data, setData] = useState<any>(null); // State to hold the fetched data
  const [error, setError] = useState<string | null>(null); // State to hold any error messages

  const fetchData = async () => {
    try {
      const res = await fetch('/api/community-connect/cmConnect?dbName=community-connect&collectionName=users');
      if (!res.ok) {
        throw new Error(`Failed to fetch: ${res.statusText}`);
      }
      const data = await res.json();
      setData(data); // Set the fetched data in state
    } catch (error: any) {
      setError(error.message); // Set any error message in state
    }
  };

  useEffect(() => {
    fetchData(); // Fetch data when the component mounts
  }, []); // Empty dependency array means this runs only once when the component mounts

  return (
    <div>
      <h1>Community Connect</h1>
      {error && <p>Error: {error}</p>} {/* Display any error message */}
      {data ? (
        <div>
          <h2>Collection Data</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre> {/* Display the fetched data */}
        </div>
      ) : (
        <>
        <LoadingSpinner/>
        <p>Loading</p>
        </>

      )}
    </div>
  );
};

export default CommunityConnect;
