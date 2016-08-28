require('styles/Detail.scss');

import React from 'react';
import Video from './lib/Video';
import Poster from './lib/Poster';
import Row from './lib/Row';
import Live from './lib/Live';
import Header from './lib/Header';

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
					<div className="info-room">
						<img src="" alt=""/>
						<div className="dy-info">
							<p className="dy-name-content">
								主播：<span className="dy-name">果冻</span>
							</p>
							<p className="online-content">
							共<span className="online">108.8万</span>人正在观看
							</p>
						</div>
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