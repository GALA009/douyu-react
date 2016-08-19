require('styles/HeaderNav.scss');

import React from 'react';
import { Link } from 'react-router';

export default class HeaderNav extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
        }
    }


    render() {
        return (
            <div className="header-nav">
                { this.props.menu.map(function (data, step) {
                    return (
                        <a key={step} href={`game/${step}`}>
                            <img src={`../images/live/${step + 1}.jpg`} alt=""/>
                            <p></p>
                        </a>
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
        '守望先锋'
    ]
}