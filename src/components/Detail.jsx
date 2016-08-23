require('styles/Detail.scss');

import React from 'react';
import Video from './lib/Video';
import Poster from './lib/Poster';

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
				<div className="player">
					<Video />
					<Poster />
					详情页详情页详情页详情页详情页详情页详情页
				</div>
			</div>
		);
	}
}