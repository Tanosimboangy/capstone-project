import React from 'react';
import {Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Cart from './pages/Cart';
import Photos from './pages/Photos';

function App() {
	return (
		<div>
			<div>
				<Header />
			</div>
			<Switch>
				<Route  path="/cart">
					<Cart />
				</Route>
				<Route path="/photos">
					<Photos />
				</Route>
			</Switch>
		</div>
	);
}

export default App;
