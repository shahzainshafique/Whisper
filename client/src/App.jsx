import React, { useEffect, useMemo } from 'react'
import {io} from 'socket.io-client';
import { Button, Container, Typography, TextField, Stack } from '@mui/material';
const App = () => {

  const [allMessages, setAllMessages] = React.useState([]);
  const [message, setMessage] = React.useState('');
  const [room, setRoom] = React.useState('');
  const [joinRoom, setJoinRoom] = React.useState('');
  const [socketID, setSocketID] = React.useState('');
  console.log(allMessages);

 
  const socket = useMemo(() => io('http://localhost:3000'),[]);

  const handleJoinRoom = () => {
    if (joinRoom.trim() !== '') {
      socket.emit('join', joinRoom);
      setJoinRoom('');
    }
  }
  const handleSend = () => {
    if (message.trim() !== '') {
  
      socket.emit('message', {message, room});
      setMessage('');
    }
  };
  useEffect(()=>{
    socket.on('connect',()=>{
      setSocketID(socket.id);
      console.log('connected!!')
    });
    
    socket.on('res',(s)=>{
      console.log('res',s);
      setAllMessages((messages)=>[...messages,s]);
    });
   
    
    return ()=>{
      socket.disconnect();
    }
  },[]);
  return (
    <Container maxWidth="sm">
      <Typography variant="h5" component='div' gutterBottom>Welcome to Socket.io</Typography>
      <Typography variant="h6" component='div' gutterBottom>{`Room: ${socketID}`}</Typography>
      <TextField value={joinRoom} onChange={e => setJoinRoom(e.target.value)} label="Join Room" fullWidth />
      <Button variant="contained" onClick={handleJoinRoom}>Join</Button>
      <TextField value={message} onChange={e => setMessage(e.target.value)} label="Type your message" fullWidth />
      <TextField value={room} onChange={e => setRoom(e.target.value)} label="Room" fullWidth />
      <Button variant="contained" onClick={handleSend}>Send</Button>
      <Stack>
        {allMessages.map((m, i) => <Typography variant="body1" key={i}>{m}</Typography>)}
      </Stack>
    </Container>
  );
}

export default App