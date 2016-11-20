/*
* 文件名： Main
* 所属：主页
*/
require('styles/App.css');
require('styles/Login.scss');

import React from 'react';
import DY from '../actions/AppMethods';
import Row from './lib/Row';
import Swiper from './lib/Swiper';
import Header from './lib/Header';
import Live from './lib/Live';
import More from './lib/More';
import BottomTip from './lib/BottomTip';

export default class Main extends React.Component {
	constructor(props, context) {
		super(props, context)
		this.state = {}
	}

	componentWillMount() {

	}
	componentDidMount(data) {
		DY.callGetApi({url:'v1/live/lol', data: data}, function(error, res){
			if(error) {
				console.log(error)
			}
			else{
				console.log(res.body)
				console.log('999999999999999999999999');
			}
		})
	}
	render() {
		return (
			<div >
				<Header />
				<div className='m-slider'>
					<Swiper/>
				</div>
				<Row title='最热直播' link='全部 >'>
					<Live />
					<Live />
					<Live />
					<Live />
				</Row>
				<Row title='元气领域'>
					<Live imgUrl='' title='魔兽世界' dyname='甜甜的果冻顶级术士开荒' popu='108.8'/>
					<Live />
					<Live />
					<Live />
				</Row>

				<Row title='时尚网游'>
					<Live />
					<Live />
					<Live />
					<Live />
				</Row>

				<Row title='鲜肉女神'>
					<Live />
					<Live />
					<Live />
					<Live />
				</Row>
                <More />
				<BottomTip />
			</div>
		);
	}
}