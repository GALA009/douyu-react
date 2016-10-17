/*
* 模块名： Video
* 简介：视频组件
    播放视频文件
* 传参： 无
*/
require('styles/Video.scss');

import React from 'react';

export default class Video extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
        }
    }

    render() {
        return (
            <video className="video-js" id="dy-video-player" src={this.props.src}>
                <p>您的浏览器不支持 video 标签</p>
            </video>
        );
    }
}
