var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.send('hey');
});

app.set('port', process.env.OPENSHIFT_NODEJS_PORT || 8000);
app.set('ipaddr', process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1');

var server = require('http').createServer(app);
server.listen(app.get('port'), app.get('ipaddr'), function() {
	console.log('Server started on '+app.get('ipaddr')+':'+app.get('port'));
});