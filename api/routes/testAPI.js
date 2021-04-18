var express = require('express');
var router = express.Router();
var mysql = require('mysql');


var con = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'keK03n@na',
	database: 'bookfind'
});

con.connect(function(err){
	if (err) throw (err);
	console.log('Connected Successfully!!!!');
	con.query('SELECT * FROM books', function(err, result, fields){
		if (err) throw err;
		router.get("/", function(req, res, next){
			res.send(result);
		});

		// result.map((book) => {
		// 	console.log(book.author);
		// });
		// console.log(result);
	});
});

module.exports = router;