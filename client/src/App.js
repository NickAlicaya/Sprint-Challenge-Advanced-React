import React from "react";
import axios from "axios";
import "./App.css";
import NavBar from "./NavBar";
import PlayerList from "./PlayerList";

class App extends React.Component {
	state = {
		players: [{}]
	};

	componentDidMount() {
		axios
			.get(`http://localhost:5000/api/players`)
			.then(res => {
				console.log("THIS IS THE RES", res.data);
				this.setState({ players: res.data });
			})
			.catch(err => console.log("ERROR", err));
	}

	render() {
		const { players } = this.state;
		console.log("PLAYERS", players);
		return (
			<div className="App">
				<NavBar />
				<div className="listCont" data-testid="list-Cont">
					{this.state.players.map(player => (
						<PlayerList
							key={player.id}
							name={player.name}
							country={player.country}
							searches={player.searches}
						/>
					))}
				</div>
			</div>
		);
	}
}

export default App;
