require('styles/ImageGroup.scss');

import React from 'react';

export default class ImageGroup extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
        }
    }

    render() {
        return (
            <div className="image-group">
                <img className="icon" src={this.props.src} alt=""/>
                {this.props.title}
                {this.props.children}
            </div>
        );
    }
}
