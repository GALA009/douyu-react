/*
* 文件名： Main
* 所属：主页
*/
require('styles/App.css');
require('styles/Login.scss');

import React from 'react';
import axios from 'axios';

import DY from '../actions/AppMethods';
import Row from './lib/Row';
import Swiper from './lib/Swiper';
import Header from './lib/Header';
import Live from './lib/Live';
import More from './lib/More';
import BottomTip from './lib/BottomTip';
import AppConstants from '../actions/AppConstants'

const BASE_URL = AppConstants.BASE_URL

export default class Main extends React.Component {
	constructor(props, context) {
		super(props, context)
		this.state = {
			roomData: [], // 房间数据
		}
	}

	componentWillMount() {
	}
	componentDidMount() {
		let that = this;
		axios.get(BASE_URL + '/index', {
		})
		.then( (res) => {
			that.setState({
				roomData: res.data.data
			})
		})
		.catch( (err) => {
			console.log(err);
		})
	}
	render() {
		return (
			<div >
				<div id="js-app-container">
					<Header />
					<div className='m-slider'>
						<Swiper />
					</div>
					{
						this.state.roomData.map((item, key) => (
						<Row title={item.title} link={ key === 0 ? '全部 >' :''} key={key}>
							{
								item.roomData.map((item2, key2) => (
									<Live imgUrl={item2.img} title={item2.typeName} dyname={item2.title} popu={item2.popu}  key={key2}/>
								))
							}
						</Row>
						))
					}
					<More />
					<BottomTip />
				</div>
			</div>
		);
	}
}