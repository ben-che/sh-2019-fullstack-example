import React from 'react';
import './Header.css';

export default function Header(props) {
	// Because I'm receiving an array of links, I can loop through the list and
	// return each "link" inside a p tag
	const linksJSX = props.links.map((element, index) => {
		return (
			<p className="HeaderLink" key={index + element}>
				{element}
			</p>
		);
	});

	return (
		<div className="HeaderContainer">
			{/* I access, then render the title that was passed down through props */}
			<h1>{props.title}</h1>
			{/* I render the JSX from the map statement above */}
			<div className="HeaderLinkContainer">{linksJSX}</div>
		</div>
	);
}
