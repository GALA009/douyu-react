require('styles/InfoRoom.scss');

import React from 'react';

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
            <div className="info-room">
                <img className="dy-photo" src={this.props.src} alt=""/>
                <div className="dy-info">
                    <p className="dy-name-content">
                        主播：<span className="dy-name">{this.props.dyName}</span>
                    </p>
                    <p className="online-content">
                    共<span className="online">{this.props.onlineNum}</span>人正在观看
                    </p>
                </div>
            </div>		
		);
	}
}