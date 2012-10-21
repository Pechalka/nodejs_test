var htutil = require('./htutil');

exports.get = function(req, res){
	res.writeHead(200, {
		'Content-Type' : 'text/html'
	});
	res.end(
		htutil.page(
			"Squared`s", htutil.navbar(),[
			(!isNaN(req.a) ?
				("<p class='result'>{a} squared = {sq}</p>"
					.replace("{a}", req.a)
					.replace("{sq}", req.a * req.a))
				: ""),
			"<p>Enter number to see its square</p>",
			"<form name='mult' action='/square' method='get' >",
			"A: <input type='text' name='a'/><br/>",
			"</form>"
			].join('\b'))
	);
}