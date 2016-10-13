/*
* 模块名： Row
* 简介：频道组合模块
        显示频道名字，推荐房间
* 传参：
    title： 标题
*
*/
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
    title: '魔术师'
};
