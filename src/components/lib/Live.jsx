require('styles/Live.scss')

import React from 'react';
import { Link } from 'react-router'

export default class Live extends React.Component {
    render() {
        return (
            <a className="live" href="/detail">
                <img src={this.props.img} alt="" className="live-feature"/>
                <div className="live-title">{this.props.title}</div>
                <div className="live-info">
                    <span className="dyname">{this.props.dyname}</span>
                    <span className="popularity">{`${this.props.popu} 万`}</span>
                </div>
            </a>
        )
    }
}

Live.defaultProps = {
    title: '魔术师',
    dyname: '820倚天剑',
    popu: '84.5',
    img: 'https://rpic.douyucdn.cn/z1608/05/13/507882_160805134513.jpg'
};
