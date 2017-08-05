var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use('/', express.static(path.join(__dirname, '../public/')));

app.get('*', (req, res) => {res.sendFile(path.join(__dirname, '../public/index.html'))});


app.listen(3000, function() {
	console.log('server on ' + 3000);
});