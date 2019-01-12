import React from 'react';
import './Project.css';

export default function Project(props) {
	return (
		<div className="ProjectContainer">
			<div
				className="ProjectImage"
				style={{ backgroundImage: `url(${props.image})` }}
			/>
			<div className="ProjectContent">
				<p>{props.title}</p>
				<p>{props.description}</p>
			</div>
		</div>
	);
}
