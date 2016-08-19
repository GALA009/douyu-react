import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import {browserHistory, Router, Route, IndexRoute} from 'react-router';
import App from './components/Main';
import Login from './components/Login';

// Render the main component into the dom
// ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render((
	<Router history={browserHistory} >
		<Route path="/login" 	component={Login} />
		<Route path="/" 				component={App}>
			<IndexRoute component={App}/>
			<Route path="/index" 	component={App} />
		</Route>
	</Router>
), document.getElementById('app'))
