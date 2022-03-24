var app = require('express')();
var http = require('http').createServer(app);
const PORT = process.env.PORT||5000;
const path=require('path');
const express = require("express");
var io = require('socket.io')(http,{

    cors:{
        origin:'*',
    }
});


io.eio.pingInterval=1000;
const STATIC_CHANNELS = ['global_notifications', 'global_chat'];


if(process.env.NODE_ENV==="production"){
    app.use(express.static('build'))
    app.get('*',(req, res) => {
        req.sendFile(path.resolve(__dirname,'build','index.html'));
        }
    )
}

http.listen(PORT, () => {
    console.log(`listening on *:${PORT}`);
});

io.on('connection', function (socket) { /* socket object may be used to send specific messages to the new connected client */
    console.log('new client connected');



    // Funktion, die darauf reagiert, wenn sich der Benutzer anmeldet
    let addedUser = false;


    // Funktion, die darauf reagiert, wenn sich der Benutzer anmeldet
    socket.on('add user', function (username) {
        // Benutzername wird in der aktuellen Socket-Verbindung gespeichert
        socket.username = username;
        console.log(username)
        addedUser = true;

        // Dem Client wird die "login"-Nachricht geschickt, damit er weiß,
        // dass er erfolgreich angemeldet wurde.
        socket.emit('login');

        // Alle Clients informieren, dass ein neuer Benutzer da ist.
        socket.broadcast.emit('user joined', socket.username);
    });


    socket.on('new message', function (data) {
        if (!addedUser){
            return;
        }
        console.log(socket.username+": "+data)


        // Sende die Nachricht an alle Clients
        socket.broadcast.emit('new message', {
            username: socket.username,
            message: data
        });


    });
    socket.on('disconnect', function () {
        if (addedUser) {
            // Alle über den Abgang des Benutzers informieren
            socket.broadcast.emit('user left', socket.username);
        }
    });



});
