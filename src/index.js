import 'core-js/fn/object/assign';

import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory, browserHistory, Router, Route,	IndexRoute } from 'react-router';

import App from './components/App';
import Index from './components/Main';
import Login from './components/Login';
import Detail from './components/Detail';
import List from './components/List';
import NotFound from './components/NotFound';

// Render the main component into the dom
// ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render((
	<Router history={hashHistory}>
		<Route path="/login" component={Login} />
		<Route path="/" component={App}>
      		<IndexRoute component={Index}/>
			<Route path="/index" component={Index} />
			<Route path="/detail" component={Detail} />
			<Route path="/list:type" component={List} />
		</Route>
		<Route path="*" component={NotFound} />
	</Router>
), document.getElementById('app'))