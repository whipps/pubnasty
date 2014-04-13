var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.send('HOME!');
})

app.get('/bullshit', function(req, res) {
	res.send('bullshit');	
});

var server = app.listen(3007, function() {
	console.log('Listening on port %d', server.address().port);
});