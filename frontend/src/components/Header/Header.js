import React from 'react';
import './Header.css';

export default function Header(props) {
	// Because I'm receiving an array of links, I can loop through the list and
	// return each name inside a p tag

	const linksJSX = props.links.map((element) => {
		return <p>{element}</p>;
	});
	return (
		<div className="HeaderContainer">
			<h1>{props.title}</h1>
			<div className="HeaderLinks">{linksJSX}</div>
		</div>
	);
}
