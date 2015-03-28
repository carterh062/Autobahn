var io = require('socket.io').listen(4000);

io.sockets.on('connection', function (socket) {
	console.log('Signaling connection started');

	socket.on('webkitStream', function (data) {
	    socket.emit('clientStream',data);
	});
});