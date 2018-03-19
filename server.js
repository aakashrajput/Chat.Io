var express = require('express');
global.app = express();
var server = require('http').createServer(app);
global.io = require('socket.io').listen(server);
var Config = require('./config/config.js');
var Handler = require('./handler.js');
var User = require('./tools/user.js');

server.listen(process.env.PORT || Config.port);
console.log('Server Started....');
console.log('Working on Port:' + Config.port);



    