const express = require('express');
const app = express();
const http = require('http').Server(app);
const server = require('socket.io');

const io = server(http, {
    cors: {origin: '*'}
});


//when the client open the website it will call '/' and send the html file.

app.get('/',(req,res) =>{

            //    --------------------------------------------------------------
    res.sendFile('--------------------------source folder-----------------------'               + '/client' + '/index.html');
            //    --------------------------------------------------------------
});


io.on('connection', (socket) =>{
    console.log("[new user connected]");
    io.emit('message','[New user connected..]');
    socket.on('message', (message) =>{
        console.log(message);
        io.emit('message',`[+] --> ${message}`);
        
    });
});


http.listen(8080, () =>{
    console.log("listen on http://localhost:8080");
});
