var app = require('express')();
var http = require('http').createServer(app);
const PORT = 9001;
var io = require('socket.io')(http,{
    cors:{
        origin:'*',
    }
});
const STATIC_CHANNELS = ['global_notifications', 'global_chat'];

http.listen(PORT, () => {
    console.log(`listening on *:${PORT}`);
});

io.on('connection', function (socket) { /* socket object may be used to send specific messages to the new connected client */
    console.log('new client connected');
    socket.emit('connection', null);


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
        console.log(socket.username+": "+data)
        const message=socket.username+": "+data;



        // Sende die Nachricht an alle Clients
        socket.broadcast.emit('new message', {
            message


        });


    });



});