import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { render } from "@testing-library/react";

test("test to check that it renders without crashing", () => {
	const component = render(<App />);
	console.log(component);
});

// test("test to check if list-Cont is rendered", () => {
// 	const { getByTestId } = render(<App />);
// 	getByTestId(/list-Cont/i);
// });

test("test to check if nav-bar is rendered", () => {
	const { getByTestId } = render(<App />);
	getByTestId(/nav-bar/i);
});

test("test to check if welcome is rendered", () => {
	const { getByTestId } = render(<App />);
	getByTestId(/welcome/i);
});
