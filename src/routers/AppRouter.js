import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import HomePage from '../containers/HomePage.jsx';
import HelpPage from '../containers/HelpPage.jsx';
import Header from '../containers/Header.jsx';

const AppRouter = () => (
	<BrowserRouter>
		<div>
			<Header />
			<Switch>
				<Route path="/" component={HomePage} exact={true} />
				<Route path="/help" component={HelpPage} />
			</Switch>
		</div>
	</BrowserRouter>
);

export default AppRouter;
