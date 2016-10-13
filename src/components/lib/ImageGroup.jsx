/*
* 模块名： ImageGroup
* 简介：图片组合
        左侧图片，右侧简介
* 传参：
    title: 标题
    children: 上层需要输出模块比如 分割线
*
*/
require('styles/ImageGroup.scss');

import React from 'react';

export default class ImageGroup extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
        }
    }

    render() {
        return (
            <div className="image-group">
                <img className="icon" src={this.props.src} alt=""/>
                {this.props.title}
                {this.props.children}
            </div>
        );
    }
}
