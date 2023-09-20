
import { useState, useEffect } from 'react';
import axios from 'axios';
import NavigationBar from './navigationbar';
import './App.css';

export default function App() {
  const backend_key = process.env.FLASK_CONNECTION_KEY;
  const [data, setData] = useState({});

  function receive_data(){
    axios.get(`${backend_key}/api/data`)
      .then(response => {
        setData(response.data);
    });
    console.log(data.message);
    return data.status;
  }
    
  

  return (
    <>
      <NavigationBar />

    </>
  );
}

