require('styles/HeaderNav.scss');

import React from 'react';

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
                        <a key={step} href='/list'>
                            <div className="list-item">
                                <img src={`../images/live/${step + 1}.jpg`} alt=""/>
                                <p>{data}</p>
                            </div>
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