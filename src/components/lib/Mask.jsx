require('styles/Mask.scss');

import React from 'react';

export default class HeaderNav extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
        }
    }

    render() {
        let showStyle
		if(this.props.isShow){
			showStyle = {
				display: 'block',
                zIndex: 10
			}
		}else{
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
