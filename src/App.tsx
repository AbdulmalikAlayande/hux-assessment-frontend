import React from "react";
import Home from "./views/home/home";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
	return (
		<Router>
			<Route exact path="/" component={Home} />
			<h1>Hello, Hux!</h1>
		</Router>
	);
}

export default App;
