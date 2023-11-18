import './App.css';
import React, { useState, useEffect } from 'react';

function App() {
  return (
    <div className="App">
     <Pagebody/>
    </div>
  );
}

const Pagebody = () => {
  const [data, setData] = useState(''); // State variable for fetched data
  const [buttonText, setButtonText] = useState('Fetch Data'); // State variable for button text

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8080/increment?number=9', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });
      const data = await response.json();
      setData(data); // Store fetched data in state variable
      setButtonText('Data Fetched'); // Update button text
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <button onClick={fetchData}>{buttonText}</button>
      <textarea value={data} /> {/* Display fetched data in textarea */}
    </div>
  );
};


export default App;
