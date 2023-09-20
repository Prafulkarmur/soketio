// pages/index.js or any other Next.js component
'use client'
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
var socket = io('ws://localhost:3001');
const App = () => {
  const [randomNumber, setRandomNumber] = useState(34);

  useEffect(() => {
    // Replace with your server URL

    socket.on('connection', () => {
  
      console.log("connected");
    //   socket.on("new_msg", function(data) {
    //     alert(data.msg);
    // })
    });
    

    return () => {
      socket.disconnect(); // Clean up when the component unmounts
    };
  });
  useEffect(() => {
    socket.on("message", (data) => {
      // setMessageReceived(data.message);
      console.log(data);
      
    });
  }, [socket]);

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
