var http_port = 8124;

var http = require('http')
var htutil = require('./htutil')

var server = http.createServer(function(req, res) {
	htutil.loadParams(req, res, undefined);
	if (req.requrl.pathname === "/"){
		require('./home-node').get(req, res);
	} else if (req.requrl.pathname === "/mult") {
		require('./mult-node').get(req, res);
	} else {
		res.writeHead(404, { 'Conten-Type' : 'text/plan' });
		res.end("bad URL " + req.url);
	}
});

server.listen(http_port)
console.log('listen to http://localhost:8124');
