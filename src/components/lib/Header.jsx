require('styles/Header.scss');

import React from 'react';
import HeaderTop from '../lib/HeaderTop';

export default class Header extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {

        }
    }

    handleClick() {

    }

	render() {
		return (
			<div className="header">
                <HeaderTop />
			</div>
		);
	}
}
