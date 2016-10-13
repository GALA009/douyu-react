/*
* 模块名： Header
* 简介：顶部导航
* 传参： 无
*
*/
require('styles/Header.scss');

import React from 'react';
import HeaderTop from '../lib/HeaderTop';

export default class Header extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
        }
    }

	render() {
		return (
			<div className="header">
                <HeaderTop />
			</div>
		);
	}
}
