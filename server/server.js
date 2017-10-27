var WebSocketServer = require('websocket').server;
var http = require('http');

var webSocketsServerPort = 1337;

var server = http.createServer(function(request, response) {
	// dummy http-server
});
server.listen(webSocketsServerPort, function() {
	console.log((new Date()) + " Server is listening on port "  + webSocketsServerPort);
});

// create the server
wsServer = new WebSocketServer({
	httpServer: server
});

// WebSocket server
wsServer.on('request', function(request) {
	var connection = request.accept(null, request.origin);
	console.log((new Date()) + ' Connection from origin ' + request.origin + '.');
	
	connection.on('message', function(message) {
		// console.log('incoming message:', message);
		try {
	    	var json = JSON.parse(message.utf8Data);
	    	console.log(json);
	    } catch (e) {
	    	console.log('Invalid JSON: ', message.utf8Data);
	    	return;
	    }
	    connection.send(message.utf8Data);
	});

	connection.on('close', function(connection) {
		// close user connection
		console.log('closed connection');
	});
});