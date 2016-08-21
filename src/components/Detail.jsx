require('styles/Detail.scss');

import React from 'react';
import Video from './lib/Video';
import Poster from './lib/Poster';

export default class Detail extends React.Component {

    componentWillMount() {

    }

    handleLogin() {

    }

    render() {
        return (
            <div >
                <div className="player">
                    <Video />
                    <Poster />
                </div>
            </div>
        );
    }
}
