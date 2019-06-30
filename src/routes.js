import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Navigation from './presentational/navigation.component';
import Home from './presentational/home.component';
import Contact from './presentational/contact.component';
import NotFound from './presentational/not-found.component';
import Continents from './presentational/continents.component';

export default (
	<Route path='/' component={Navigation}>
		<IndexRoute component={Home} />
		<Route path='contact' component={Contact} />
		<Route path='continents' component={Continents} />
		<Route path='*' component={NotFound} />
		<Route path='*' component={NotFound} />
	</Route>
);