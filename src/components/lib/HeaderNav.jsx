/*
* 模块名： HeaderNav
* 简介：顶部导航子菜单
* 传参：
    menu: 子菜单标题，类型为数组
*
*/
require('styles/HeaderNav.scss');

import React from 'react';
import {Link} from 'react-router';

export default class HeaderNav extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
        }
    }

    render() {
		let showMenuStyle
		if(this.props.isShowMenu){
			showMenuStyle = {
				display: 'block'
			}
		}else{
			showMenuStyle = {
				display: 'none'
			};
		}
        return (
            <div className="header-nav" style={showMenuStyle}>
                { this.props.menu.map(function (data, step) {
                    return (
                        <Link key={step} to={`list${step}`} step={step}>
                            <div className="list-item">
                                <img src={`../images/live/${step + 1}.jpg`} alt=""/>
                                <p>{data}</p>
                            </div>
                        </Link>
                    )
                })
                }
            </div>
        );
    }
}

HeaderNav.defaultProps = {
    menu: [
        '英雄联盟',
        'DOTA2',
        '穿越火线',
        '炉石传说',
        '守望先锋',
        '魔兽世界',
        '风暴英雄',
        '地下城与勇士',
        'Pokemon Go',
        '使命召唤',
        '星际争霸',
        '暗黑破坏神3'
    ]
}