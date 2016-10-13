/*
* 模块名： HeaderNav
* 简介：顶部导航logo
* 传参： 无
*
*/
require('styles/HeaderTop.scss');

import React from 'react';
import { Link } from 'react-router';
import HeaderNav from '../lib/HeaderNav';
import Mask from '../lib/Mask';

export default class HeaderTop extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            isShowMenu: false
        }
    }

    handleClick() {
        let isShowMenu = this.state.isShowMenu
        document.body.style.overflow = isShowMenu ? 'auto' : 'hidden'
        this.setState({ isShowMenu: !this.state.isShowMenu });
    }

    render() {
        let activeStyle = {}
        if (this.state.isShowMenu) {
            activeStyle = {
                color: '#FA7122',
                backgroundPosition: '-.48rem -.893333333rem'
            }
        } else {
            activeStyle = {
                backgroundPosition: '-.48rem -1.733333333rem'
            }
        }
        return (
            <div className="header-top">
                <Link to={'/'} className='logo'>
                </Link>
                <div className="classes" style={activeStyle} onClick={this.handleClick.bind(this) } >
                    <Mask isShow={this.state.isShowMenu}>
                        <HeaderNav isShowMenu={this.state.isShowMenu}/>
                    </Mask>
                </div>
            </div>
        );
    }
}
