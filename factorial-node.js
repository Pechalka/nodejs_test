var htutil = require('./htutil');
var math = require('./math');

exports.get = function(req, res){
	res.writeHead(200, {
		'Content-Type' : 'text/html'
	});
	res.end(
		htutil.page(
			"Factorial", htutil.navbar(),[
			(!isNaN(req.a) ?
				("<p class='result'>{a} factorial = {fact}</p>"
					.replace("{a}", req.a)
					.replace("{fact}", math.factorial(Math.floor(req.a))))
				: ""),
			"<p>Enter number to see it`s factorial</p>",
			"<form name='mult' action='/factorial' method='get' >",
			"A: <input type='text' name='a'/><br/>",
			"</form>"
			].join('\b'))
	);
}