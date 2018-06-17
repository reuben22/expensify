import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import ExpenseDashboardPage from '../components/Dashboard.js';
import AddExpensePage from '../components/AddExpense.js';
import EditExpensePage from '../components/EditExpense.js';
import HelpPage from '../components/Help.js';
import NotFoundPage from '../components/404.js';
import Header from '../components/Header.js';

const AppRouter = () => (
	<BrowserRouter>
		<div>
			<Header />
			<Switch>
				<Route path="/" component={ExpenseDashboardPage} exact={true}/>
				<Route path="/create" component={AddExpensePage}/>
				<Route path="/edit/:id" component={EditExpensePage}/>
				<Route path="/help" component={HelpPage}/>
				<Route component={NotFoundPage}/>
			</Switch>
		</div>

	</BrowserRouter>
)

export default AppRouter;