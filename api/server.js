var express = require('express');
var port = 8080;
var app = express();

app.use(express.static(__dirname + './../app/'));


app.listen(port, function(){
   console.log('Listening on http://localhost:' + port);
    console.log('Stop Server with CTRL + C');
});

