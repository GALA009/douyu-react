require('styles/Row.scss');

import React from 'react';
import { Link } from 'react-router';

export default class Row extends React.Component {


	render() {
		return (
			<div className="m-row">
                <div className="title">
                    <span>
                        <img src='http://shark.douyucdn.cn/app/douyu-mobile/m-douyu/res/icon_hot.png?mv=1.1' alt={this.props.title}/>
                        {this.props.title}
                    </span>
                    <Link to={'/detail'}>
                        {this.props.link}
                    </Link>
                </div>
                <div className="live-list">
                    {this.props.children}
                </div>
			</div>
		);
	}
}

Row.defaultProps = {
    title: '魔术师',
    dyname: '820倚天剑',
    popu: '84.5',
    img: 'https://rpic.douyucdn.cn/z1608/05/13/507882_160805134513.jpg'
};
