// Here, we import the packages that we need inside this App file
import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Project from './components/Project';

// Axios is a NPM package that we use to make network requests. There's also the Fetch API, but
// I avoid using that because it isn't compatible with all browsers
const axios = require('axios');

class App extends Component {
	// Think of state this as a way to hold data - the information here
	//  affects the way that your elements render
	state = {};
	// Using a react lifecycle method, we make a request to our server
	// to grab all of the data we may need, and store it within state as soon
	// as this component mounts on the DOM
	componentDidMount() {
		// I use the axois package to hit the backend servers - specifically the "data" endpoint -
		//  from there, the code within server.js inside the back end folder will run, and return a
		// 	bunch of data

		// Axios makes use of Javascript Promises - a way of us to resolve async issues in a more
		// "synchronous" way
		axios
			// I make a GET request to localhost:8080
			.get('http://localhost:8080/home')
			// Here, I'm saying that when I get the data back, I'm going to save it within this instance's state object
			.then((response) => {
				console.log('this is the response from the server');
				console.log(response);
				this.setState({ data: response.data }, () =>
					console.log(this.state)
				);
			})
			// Here, I console log any errors that may occur
			.catch((e) => console.log(e));
	}

	// Here, I write a function to loop through all the project array I grabbed from the server, and render a Project Component
	//  for each element inside the array

	renderProjects() {
		return this.state.data.content.map((project) => {
			return (
				<Project
					title={project.title}
					description={project.description}
					image={project.image}
				/>
			);
		});
	}

	render() {
		// I only want to render the website when I have finished receiving data from the back end, and I've
		//  saved it in state:
		if (this.state.data) {
			return (
				<div className="App">
					<div className="BodyContainer">
						<div className="HeaderContainer">
							<Header
								title={this.state.data.header.title}
								links={this.state.data.header.nav}
							/>
						</div>

						<div className="ContentContainer">
							{this.renderProjects()}
						</div>
					</div>
				</div>
			);
		}
		// I want to return an error message on the DOM if I don't get the data back - this is
		// probably because your server is off
		return <p>Loading...or perhaps your server isn't on?</p>;
	}
}

export default App;
