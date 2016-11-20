/*
* 模块名： BottomTip
* 简介：底部广告
* 传参： 无
* 
*/
require('styles/Bottom-tip.scss');

import React from 'react';

export default class BottomTip extends React.Component {
	constructor(props, context) {
		super(props, context)
		this.state = {
			isShow: true,
			userTag: undefined
		}
	}
	componentWillMount() {
		let u = navigator.userAgent;
		if (u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) { //安卓手机
			this.setState({
				userTag: 1
			});
		} else if (u.indexOf('iPhone') > -1 || u.indexOf('iPad') > -1) { //苹果手机
			this.setState({
				userTag: 2
			});
		} else if (u.indexOf('Windows Phone') > -1) { //winphone手机
			this.setState({
				userTag: 3
			});
		}
	}

	handleClickClose() {
		this.setState({
			isShow: !this.state.isShow
		});
	}
	handleClickGoDown() {
		if (this.state.userTag == 1) {
			console.log('安卓平台');
		}
		else if (this.state.userTag == 2) {
			console.log('苹果平台');
		}
		else if (this.state.userTag == 3) {
			console.log('微软平台');
		}
	}

	render() {
		let tipStyle = {}
		if (this.state.isShow) {
			tipStyle = {
				display: 'block'
			}
		} else {
			tipStyle = {
				display: 'none'
			}
		}

		return (
			<div id='bottomTip' className="bottom-tip" style={tipStyle}>
				<button className="close" onClick={this.handleClickClose.bind(this) } ></button>
				<img src="http://shark.douyucdn.cn/app/douyu-mobile/m-douyu/res/foot-download.png?mv=1.1" alt="点击下载"/>
				<button className="godown" onClick={this.handleClickGoDown.bind(this) }></button>
			</div>
		);
	}
}