var express = require('express');
var app = express();
var path = require('path');

/* Load static css, js and img */
app.use('/img',express.static(path.join(__dirname, '/img')));
app.use('/Javascript',express.static(path.join(__dirname, '/Javascript')));
app.use('/css',express.static(path.join(__dirname, '/css')));

//Simple single path
app.get("/", function(req, res) {
	res.sendFile(path.join(__dirname+"/index.html"))
});


// Setting up the Port number for the web server
app.listen('3000');

console.log("Running express js on port 3000");