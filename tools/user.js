users = [];
connections = [];

io.sockets.on('connection',function(socket){
	connections.push(socket);
	console.log('Connected: %s Sockets Connected', connections.length);

    // Disconnect
    socket.on('disconnect', function(data){
    	
    	users.splice(users.indexOf(socket.usernme), 1);
    	updateUsernames();
    	connections.splice(connections.indexOf(socket), 1);
    	console.log('disconnected: %s sockets connected', connections.length);	

    });

    //send Messages
    socket.on('send message', function(data){
		io.sockets.emit('new message', {msg:data, user: socket.username});
    });
    
    //new user
    socket.on('new user', function(data, callback){
    	callback(true);
    	socket.username = data;
    	users.push(socket.username);
    	updateUsernames();
    });

    function updateUsernames(){
    	io.sockets.emit('get user', users);
    }

});