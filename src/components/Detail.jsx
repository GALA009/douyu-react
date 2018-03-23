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
			console.log(res.data);
			that.setState({
				data: res.data
			});
			console.log(that.state)
		})
		.catch( (err) => {
			console.log(err);
		})
	}

	render() {
		console.log('11111')
		const roomAuthor = this.state.data.roomAuthor;
		const roomAuthorImg = this.state.data.roomAuthorImg;
		const onlineNum = this.state.data.onlineNum;
		const recommend = this.state.data.recommend || [];
		console.log(this.state)
		console.log(roomAuthor)


		return (
			<div >
				<Header />
				<div className="player">
					<Video />
					<Poster />
				</div>
				<div className="info-area">
					<InfoRoom src={roomAuthorImg} dyName={roomAuthor} onlineNum={onlineNum}/>
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
				{
					recommend.map((item, key) => (
					<Row title={item.title} key={key}>
						{
							item.roomData.map((item2, key2) => (
								<Live imgUrl={item2.img} title={item2.typeName} dyname={item2.title} popu={item2.popu} key={key2}/>
							))
						}
					</Row>
					))
				}
			</div>
		);
	}
}