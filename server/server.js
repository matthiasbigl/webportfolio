var app = require('express')();
var http = require('http').createServer(app);
const PORT = 3001;
var io = require('socket.io')(http);
const STATIC_CHANNELS = ['global_notifications', 'global_chat'];

http.listen(PORT, () => {
    console.log(`listening on *:${PORT}`);
});

io.on('connection', function (socket) { /* socket object may be used to send specific messages to the new connected client */
    console.log('new client connected');
    socket.emit('connection', null);
    let addedUser = false;


    // Funktion, die darauf reagiert, wenn sich der Benutzer anmeldet
    socket.on('add user', function (username) {
        // Benutzername wird in der aktuellen Socket-Verbindung gespeichert
        socket.username = username;
        addedUser = true;

        // Dem Client wird die "login"-Nachricht geschickt, damit er weiß,
        // dass er erfolgreich angemeldet wurde.
        socket.emit('login');


        // Alle Clients informieren, dass ein neuer Benutzer da ist.
        socket.broadcast.emit('user joined', socket.username);
    });



});