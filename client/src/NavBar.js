import React, { useState } from "react";
import useDarkMode from "./hooks/useDarkMode";

const NavBar = () => {
	const [darkMode, setDarkMode] = useDarkMode();
	const toggleMode = e => {
		e.preventDefault();
		setDarkMode(!darkMode);
	};
	return (
		<nav className="navbar" data-testid="nav-bar">
			<h1 className="welcome" data-testid="welcome">
				Women's World Cup Ranking June-July 2019
			</h1>
			<div className="dark-mode__toggle">
				<div
					onClick={toggleMode}
					className={darkMode ? "toggle toggled" : "toggle"}
				/>
			</div>
		</nav>
	);
};

export default NavBar;
