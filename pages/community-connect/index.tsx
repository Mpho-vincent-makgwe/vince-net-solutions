import React from 'react'

const CommunityConnect = () => {
    const fetchData = async () => {
        const res = await fetch('/api/community-connect/cmConnect?dbName=community-connect&collectionName=users');
        const data = await res.json();
        console.log(data.collection);
        console.log(data.db);
      };
      
      // Call fetchData to get data from the API
      fetchData();
  return (
    <div>index</div>
  )
}
export default CommunityConnect;