var htutil = require('./htutil');
var math = require('./math');

exports.get = function(req, res){
	res.writeHead(200, {
		'Content-Type' : 'text/html'
	});
	res.end(
		htutil.page(
			"Fibonacci", htutil.navbar(),[
			(!isNaN(req.a) ?
				("<p class='result'>{a} fibonacci = {fibo}</p>"
					.replace("{a}", req.a)
					.replace("{fibo}", math.fibonacci(Math.floor(req.a))))
				: ""),
			"<p>Enter number to see it`s fibonacci</p>",
			"<form name='mult' action='/fibonacci' method='get' >",
			"A: <input type='text' name='a'/><br/>",
			"</form>"
			].join('\b'))
	);
}