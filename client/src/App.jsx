import React, { useEffect, useMemo } from 'react'
import {io} from 'socket.io-client';
import { Button, Container, Typography, TextField } from '@mui/material';
const App = () => {

  const [message, setMessage] = React.useState('');
  

 
  const socket = useMemo(() => io('http://localhost:3000'),[]);
  const handleSend = () => {
    if (message.trim() !== '') {
      socket.emit('message', message);
      setMessage('');
    }
  };
  useEffect(()=>{
    socket.on('connect',()=>{
      console.log('connected!!')
    });
    socket.on('welcome',(s)=>{
      console.log(s);
    });
    socket.on('res',(s)=>{
      console.log(s);
    })

    return ()=>{
      socket.disconnect();
    }
  },[]);
  return (
    <Container maxWidth="sm">
      <Typography variant="h1" component='div' gutterBottom>Welcome to Socket.io</Typography>
      <TextField value={message} onChange={e => setMessage(e.target.value)} label="Type your message" fullWidth />
      <Button variant="contained" onClick={handleSend}>Send</Button>
    </Container>
  );
}

export default App