// require express so that we can build an express app
var express = require('express');
// require path so that we can use path stuff like path.join
var path = require('path');
// instantiate the app
var app = express();
//  Read server responses
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, './client')))
app.use('/bower_components', express.static(__dirname + "/bower_components"))

// var database = require('./config/mongoose.js');

// var routes = require('./config/routes.js')(app);
// set up a static file server that points to the "client" directory
var server = app.listen(8000, function() {
  console.log('cool stuff on: 8000');
});

var io = require('socket.io').listen(server);

io.sockets.on('connection', function (socket) {
  console.log("SERVER::WE ARE USING SOCKETS!");
  console.log(socket.id);
});