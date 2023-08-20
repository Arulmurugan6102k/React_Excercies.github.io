import React, { useState, useEffect } from 'react';

const LoadingExample = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulate API call after 2 seconds
    setTimeout(() => {
      const mockData = { message: 'Data fetched from API' };
      setData(mockData);
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div>
      <h1>Loading Example</h1>
      {isLoading ? (
        <div className="loading-spinner">Loading...</div>
      ) : (
        <div className="data-content">{data.message}</div>
      )}
    </div>
  );
};

export default LoadingExample;
