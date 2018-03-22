/*
* 模块名： Live
* 简介：房间小模块
        显示房间图片，标题，观看人数等信息
* 传参：
    img: 图片地址
    title: 上主播名
    dyName: 主播名
	popu：观看人数
*
*/
require('styles/Live.scss')

import React from 'react';
import { Link } from 'react-router'

export default class Live extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
        }
    }

    componentWillMount() {

    }
    componentDidMount() {

    }

    render() {
        return (
            <Link className="live" to="/detail">
                <img src={this.props.img} alt="" className="live-feature"/>
                <div className="live-title">{this.props.title}</div>
                <div className="live-info">
                    <span className="dyname">{this.props.dyname}</span>
                    <span className="popularity">{`${this.props.popu} 万`}</span>
                </div>
            </Link>
        )
    }
}
