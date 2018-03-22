/*
* 文件名： List
* 所属：频道列表页
*/
require('styles/List.scss');

import React from 'react';
import axios from 'axios';
import Row from './lib/Row';
import Live from './lib/Live';
import More from './lib/More';
import Header from './lib/Header';
import CM from '../actions/AppConstants';

export default class List extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            data: [] // 房间数据
        }
    }
    componentWillMount() {

    }
    componentDidMount() {
        let that = this;

        axios.get(CM.BASE_URL + '/room-list')
            .then((response) => {
                console.log(response)
                that.setState({
                    data: response.data.data
                })
            })
            .catch((error) => {
                console.log(error);
            })
        // fetch(CM.BASE_URL + '/room-list')
        //     .then(res => {
        //         console.log(res);
        //     }),
        //     (error) => {
        //         console.log(error)
        //     }
    }

    render() {
        console.log(this.data);
        const liveList = this.data.map((item) => {
            <Live imgUrl='{item.image}' title={item.title} dyname={item.userName} popu='108.8'/>
        })
        return (
            <div>
                <Header />
                <Row title={this.props.menu[this.props.params.type]} link='全部 >'>
                    {liveList}
                </Row>
                <More />
            </div>
        );
    }
}

