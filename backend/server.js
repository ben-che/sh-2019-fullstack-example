var express = require('express');
var cors = require('cors');
var app = express();

// cors is cross origin resource sharing - pretty much, we run into this
//  issue because a request isn't being made from the same origin that
//  express is serving data from (ie. port 3000 vs port 8080)
app.use(cors());

const data = [];

// This is our main route - we return the data object above as
// a JSON object to the front end so it can be rendered
app.get('/', function(req, res) {
	res.send('hello world');
});

app.listen(8080, () => {
	console.log('servers running on 8080, cors is up');
});
