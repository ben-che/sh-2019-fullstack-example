import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';

const axios = require('axios');

class App extends Component {
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
					<Header />
				</div>
			</div>
		);
	}
}

export default App;
