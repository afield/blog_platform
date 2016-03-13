var express = require('express');
var port = 8080;
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var models = require('./models/users.js');

//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.use(express.static(__dirname + './../app/'));


//Database
mongoose.connect('mongodb://localhost/data/db/');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log("Connected to db at /data/db/")
});

//Routes
var user_routes = require('./routes/user_routes.js');
app.use('/', user_routes);

//Connection
app.listen(port, function(){
   console.log('Listening on http://localhost:' + port);
    console.log('Stop Server with CTRL + C');
});

