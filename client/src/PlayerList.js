import React from "react";

const PlayerList = props => {
	console.log("PROPS", props);
	return (
		<div className="playerList">
			<p className="name">Name:{props.name} </p>
			<p className="country">Country: {props.country}</p>
			<p className="searchHx">Google Searches: {props.searches}</p>
		</div>
	);
};

export default PlayerList;
