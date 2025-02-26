// import React, { Suspense, lazy } from "react";
import Home from "./views/home/home";
import Signup from "./views/auth/signup";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
	// const LazyHomePage = lazy(() => import("./views/home/home"));
	// <Suspense fallback={<div>Loading...</div>}>
	//   <Route path="/" element={<LazyHomePage />} />
	// </Suspense><h1>Hello, Hux!</h1>
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/signup" element={<Signup />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
