
import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';


export default function App() {
  const backend_key = process.env.FLASK_CONNECTION_KEY;
  const [data, setData] = useState({});

  useEffect(() => {
    axios.get(`${backend_key}/api/data`)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <>
      
    </>
  );
}

