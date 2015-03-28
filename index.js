var http = require("http");
var server = http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end("ssjc-app");
}).listen(process.env.PORT || 4000);

var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
	console.log('Signaling connection started');

	socket.on('clientReq', function (data) {
	    socket.emit('reqWebkit',data);
	});

	socket.on('webkitStream', function (data) {
	    socket.emit('clientStream',data);
	});
});