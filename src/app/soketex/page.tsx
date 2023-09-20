// pages/index.js or any other Next.js component
'use client'
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
// var socket = io('ws://localhost:3001');
const App = () => {
  const [randomNumber, setRandomNumber] = useState(34);
  const [soket, setSoket] = useState<any>(undefined)
  
  useEffect(() => {
    console.log("hello");
    
    const soket=io('http://localhost:3001')
    soket.on('connection',()=>{
      console.log("soket connected"); 
    })
    soket.on('message',(data)=>{
// console.log(data);
    setRandomNumber(data)
    })
    setSoket(soket)
  }, [])
  

  return (
    <div>
      {randomNumber !== null ? (
        <p>Random Number: {randomNumber}</p>
      ) : (
        <p>Waiting for a random number...{randomNumber}</p>
      )}
    </div>
  );
};

export default App;
