import React, { Component } from 'react';
import './App.css';

const axios = require('axios');

class App extends Component {
	state = {};
	// Using a react lifecycle method, we make a request to our server
	// to grab all of the data we may need, and store it within state
	componentDidMount() {
		axios
			.get('http://localhost:8080/')
			.then((res) => {
				console.log(res);
			})
			.catch((e) => console.log(e));
	}

	render() {
		return (
			<div className="App">
				<div className="BodyContainer">
					<div className="HeaderContainer">{/* placeholder */}</div>
					<div className="ContentContainer">{/* placeholder */}</div>
				</div>
			</div>
		);
	}
}

export default App;
