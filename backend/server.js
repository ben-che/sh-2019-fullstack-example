const express = require('express');
const cors = require('cors');
const app = express();

// cors is cross origin resource sharing - pretty much, we run into this
//  issue because a request isn't being made from the same origin that
//  express is serving data from (ie. port 3000 vs port 8080)
app.use(cors());

// We'll store our data in the form of a variable for now - in real life,
//  you'd want to use some sort of database to make it persistent
const data = {
	header: { title: 'Starterhacks', nav: ['Portfolio', 'About', 'Blog'] },
	content: [
		{
			title: 'Google',
			description: 'I had to Google a lot',
			image:
				'https://cdn4.iconfinder.com/data/icons/new-google-logo-2015/400/new-google-favicon-512.png'
		},
		{
			title: 'Reddit',
			description: 'I went on Reddit at work',
			image:
				'https://cdn0.iconfinder.com/data/icons/most-usable-logos/120/Reddit-512.png'
		},
		{
			title: 'Yahoo!',
			description: 'I called it Yatzhee and they fired me',
			image:
				'https://cdn0.iconfinder.com/data/icons/social-network-9/50/31-512.png'
		}
	]
};

// This is our main route - we return the data object above as
// a JSON object to the front end so it can be rendered
app.get('/home', function(req, res) {
	res.json(data);
});

// A check to ensure that our server is running
app.listen(8080, () => {
	console.log('servers running on 8080, cors is up');
});
