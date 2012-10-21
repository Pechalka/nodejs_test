var http_port = 8124;

var http = require('http')
var htutil = require('./htutil')

var server = http.createServer(function(req, res) {
	htutil.loadParams(req, res, undefined);
	if (req.requrl.pathname === "/"){
		require('./home-node').get(req, res);
	} else if (req.requrl.pathname === "/mult") {
		require('./mult-node').get(req, res);
	} else if (req.requrl.pathname === "/square"){
		require('./square-node').get(req, res);
	} else if (req.requrl.pathname === "/factorial"){
		require('./factorial-node').get(req, res);		
	} if (req.requrl.pathname === "/fibonacci"){
		require('./fibo-node').get(req, res);		
	} if (req.requrl.pathname === "/fibonacciAsync"){
		require('./fibo-node2').get(req, res);		
	} else{
		res.writeHead(404, { 'Conten-Type' : 'text/plan' });
		res.end("bad URL " + req.url);
	}
});

server.listen(http_port)
console.log('listen to http://localhost:8124');
