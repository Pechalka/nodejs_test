var htutil = require('./htutil');
var math = require('./math');


function sendResult(req, res, a, fiboval){
	res.writeHead(200, {
		'Content-Type' : 'text/html'
	});
	res.end(
		htutil.page(
			"Fibonacci", htutil.navbar(),[
			(!isNaN(req.a) 
				? ("<p class='result'>{a} fibonacci = {fibo}</p>"
					.replace("{a}", req.a)
					.replace("{fibo}", fiboval))
				: ""),
			"<p>Enter number to see it`s fibonacci</p>",
			"<form name='mult' action='/fibonacciAsync' method='get' >",
			"A: <input type='text' name='a'/><br/>",
			"</form>"
			].join('\b'))
	);
};

exports.get = function(req, res){
	if (!isNaN(req.a)){
		math.fibonacciAsync(Math.floor(req.a), function(val){
			sendResult(req, res, Math.floor(req.a), val);
		});
	} else{
		sendResult(req, res, NaN, NaN);
	}

}