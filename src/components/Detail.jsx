require('styles/Detail.scss');

import React from 'react';
import Video from './lib/Video';
import Poster from './lib/Poster';
import Row from './lib/Row';
import Live from './lib/Live';
import Header from './lib/Header';
import ImageGroup from './lib/ImageGroup';
import InfoRoom from './lib/InfoRoom';

export default class Detail extends React.Component {
	constructor(props, context) {
		super(props, context)
		this.state = {}
	}

	componentWillMount() {

	}
	componentDidMount() {

	}

	render() {
		return (
			<div >
				<Header />
				<div className="player">
					<Video />
					<Poster />
				</div>
				<div className="info-area">
					<InfoRoom src="https://apic.douyucdn.cn/upload/avatar/004/75/73/14_avatar_middle.jpg" dyName="White55开" onlineNum="80w"/>
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