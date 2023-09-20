
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import AskCouncil from './AskCouncil';
import {Text, HStack} from '@chakra-ui/react';

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
      <nav>
        <HStack>
          <a href="/"> 
            <Text px={4} py={4}>Council of Knowledge</Text>
          </a>
          <a href="/ask-council"> 
            <Text px={4} py={4}>Ask the Experts</Text>
          </a>
        </HStack>
        
      </nav>

    </>
  );
}

