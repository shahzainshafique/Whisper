import express from 'express';
import { Server } from 'socket.io';
import {createServer} from 'http';
import cors from "cors"
const PORT = 3000;

const app = express();
app.use(cors);
const server = createServer(app);

const io = new Server(server,{
    cors:{
        origin:"http://localhost:5173",
        methods: ["GET","POST"],
        credentials:true,
    }
});

io.on("connection", (socket)=>{
    console.log('User connected');
    console.log('id', socket.id);
    socket.on('message',(data)=>{
        console.log(data);
        socket.broadcast.emit('res',data);
    })
    socket.on('disconnect',()=>{
        console.log('user disconnected', socket.id);
    })
})
app.get('/', (req,res)=>{
    res.send('Hello');
})
server.listen(PORT, ()=>{console.log(`Server is listening on port: ${PORT}`)})