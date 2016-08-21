require('styles/Poster.scss');

import React from 'react';

export default class Poster extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
        }
    }

    render() {
        return (
            <div className="poster">
                <img src="../images/1.jpg" alt=""/>
                <div className="play-btn"></div>
                <div className="room-info">
                    <span className='name'>Miss大小姐排位日记</span>
                    <span className="class">英雄联盟</span>
                </div>
                <div className="room-stop-focus">
                    <p className="stop-title">直播已结束</p>
                    <p className="stop-tip">赶快关注主播不错过下次开播</p>
                    <button className="stop-more hd-foucs">关注</button>
                </div>
            </div>
        );
    }
}