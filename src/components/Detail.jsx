/*
* 文件名： Detail
* 所属：频道详情页
*/
require('styles/Detail.scss');

import React from 'react';
import axios from 'axios'
import Video from './lib/Video';
import Poster from './lib/Poster';
import Row from './lib/Row';
import Live from './lib/Live';
import Header from './lib/Header';
import ImageGroup from './lib/ImageGroup';
import InfoRoom from './lib/InfoRoom';
import AppConstants from '../actions/AppConstants'

const BASE_URL = AppConstants.BASE_URL

export default class Detail extends React.Component {
	constructor(props, context) {
		super(props, context)
		this.state = {
			data: [], //信息
		}
	}

	componentWillMount() {

	}
	componentDidMount() {
		let that = this;
		axios.get(BASE_URL + '/detail', {
		})
		.then( (res) => {
			console.log(res);
			that.setState({
				data: res.data.data
			})
		})
		.catch( (err) => {
			console.log(err);
		})
	}

	render() {
		const roomAuthor = this.state.roomAuthor;
		const onlineNum = this.state.onlineNum;


		return (
			<div >
				<Header />
				<div className="player">
					<Video />
					<Poster />
				</div>
				<div className="info-area">
					<InfoRoom src="https://apic.douyucdn.cn/upload/avatar/004/75/73/14_avatar_middle.jpg" dyName={roomAuthor} onlineNum={onlineNum}/>
					<div className="info-handle">
						<ImageGroup src="../images/hd-send.png" title="发弹幕">
							<b className="split-line"></b>
						</ImageGroup>
						<ImageGroup src="../images/hd-focus.png" title="关注">
							<b className="split-line"></b>
						</ImageGroup>
						<ImageGroup src="../images/hd-share.png" title="分享"/>
					</div>
				</div>
				<Row title='同类直播'>
					<Live imgUrl='' title='魔兽世界' dyname='甜甜的果冻顶级术士开荒' popu='108.8'/>
					<Live imgUrl='' title='魔兽世界' dyname='甜甜的果冻顶级术士开荒' popu='108.8'/>
					<Live imgUrl='' title='魔兽世界' dyname='甜甜的果冻顶级术士开荒' popu='108.8'/>
					<Live imgUrl='' title='魔兽世界' dyname='甜甜的果冻顶级术士开荒' popu='108.8'/>
				</Row>
				<Row title='最热直播'>
					<Live imgUrl='' title='魔兽世界' dyname='甜甜的果冻顶级术士开荒' popu='108.8'/>
					<Live imgUrl='' title='魔兽世界' dyname='甜甜的果冻顶级术士开荒' popu='108.8'/>
					<Live imgUrl='' title='魔兽世界' dyname='甜甜的果冻顶级术士开荒' popu='108.8'/>
					<Live imgUrl='' title='魔兽世界' dyname='甜甜的果冻顶级术士开荒' popu='108.8'/>
				</Row>

			</div>
		);
	}
}