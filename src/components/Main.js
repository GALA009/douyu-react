require('styles/App.css');
require('styles/Login.scss');

import React from 'react';
import Row from './lib/Row';
import Swiper from './lib/Swiper';
import Header from './lib/Header';
import Poster from './lib/Poster';
import {
	Link
} from 'react-router'

export default class AppComponent extends React.Component {

	componentWillMount() {

	}

	handleLogin() {

	}

	render() {
		return (
			<div >
				<Link to="/login">
					跳转
				</Link>
				<Header />
				<div className='m-slider'>
					<Swiper/>
				</div>
				<Row title='最热直播' link='全部 >'/>
				<Row title='元气领域'/>
				<Row title='时尚网游'/>
				<Row title='鲜肉女神'/>
			</div>
		);
	}
}