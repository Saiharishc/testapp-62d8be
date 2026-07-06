import React, { useState, useEffect } from 'react';

function App() {
  const [health, setHealth] = useState('');
  const [testData, setTestData] = useState('');

  useEffect(() => {
    fetch('/api/')
      .then(response => response.json())
      .then(data => setHealth(data.message))
      .catch(error => console.error('Error fetching health:', error));
  }, []);

  useEffect(() => {
    fetch('/api/test_data')
      .then(response => response.json())
      .then(data => setTestData(data))
      .catch(error => console.error('Error fetching test data:', error));
  }, []);

  return (
    <div>
      <h2>API Health:</h2>
      <p>{health}</p>

      <h2>Test Data:</h2>
      {testData ? (
        <div>
          <p>Data: {JSON.stringify(testData.data)}</p>
          <p>Message: {testData.message}</p>
        </div>
      ) : (
        <p>Loading test data...</p>
      )}
    </div>
  );
}

export default App;
