/*
* 模块名： Mask
* 简介：全图蒙版
        灰色全屏底图
* 传参：
    children： 上层需要显示内容
*
*/
require('styles/Mask.scss');

import React from 'react';

export default class Mask extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
        }
    }

    render() {
        let showStyle
        if (this.props.isShow) {
            showStyle = {
                display: 'block',
                zIndex: 10
            }
        } else {
            showStyle = {
                display: 'none',
                zIndex: 0
            }
        }

        return (
            <div className="mask" style={showStyle}>
                {this.props.children}
            </div>
        );
    }
}
