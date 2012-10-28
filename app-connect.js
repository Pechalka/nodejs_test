var connectRoute = require('connect-route'),
	connect = require('connect'),
	htutil = require('./htutil');


connect.createServer()
	.use(connect.favicon())
	.use(connect.logger())
	.use('/filez', connect.static(__dirname + '/filez'))
	.use(htutil.loadParams)
	.use(connectRoute(function(app) {
		app.get('/', require('./home-node').get);		
		app.get('/mult', require('./mult-node').get);
		app.get('/mult', require('./mult-node').get);
		app.get('/square', require('./square-node').get);
		app.get('/factorial', require('./factorial-node').get);
		app.get('/fibonacci', require('./fibo-node').get);
		app.get('/fibonacciAsync', require('./fibo-node2').get);
	})).listen(8124);

console.log('listening to http://localhost:8124');	