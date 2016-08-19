require('styles/HeaderTop.scss');

import React from 'react';
import { Link } from 'react-router';
import HeaderNav from '../lib/HeaderNav';

export default class HeaderTop extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            isShowMenu: false
        }
    }

    handleClick() {
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
                <Link to={'/login'} className='logo'>
                </Link>
                <div className="classes" style={activeStyle} onClick={this.handleClick.bind(this) } isShowMenu={this.state.isShowMenu}></div>
            </div>
        );
    }
}
