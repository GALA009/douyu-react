/*
* 文件名： List
* 所属：频道列表页
*/
require('styles/List.scss');

import React from 'react';
import Row from './lib/Row';
import Live from './lib/Live';
import More from './lib/More';
import Header from './lib/Header';

export default class List extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
        }
    }
    componentWillMount() {

    }
    componentDidMount() {
        console.log(this.props.menu);
        console.log(this.props.params.type);
        console.log(this.props.menu[this.props.params.type])
    }

    render() {
        return (
            <div>
                <Header />
                <Row title={this.props.menu[this.props.params.type]} link='全部 >'>
                    <Live imgUrl='' title='魔兽世界' dyname='甜甜的果冻顶级术士开荒' popu='108.8'/>
                    <Live imgUrl='' title='魔兽世界' dyname='甜甜的果冻顶级术士开荒' popu='108.8'/>
                    <Live imgUrl='' title='魔兽世界' dyname='甜甜的果冻顶级术士开荒' popu='108.8'/>
                    <Live imgUrl='' title='魔兽世界' dyname='甜甜的果冻顶级术士开荒' popu='108.8'/>
                    <Live imgUrl='' title='魔兽世界' dyname='甜甜的果冻顶级术士开荒' popu='108.8'/>
                    <Live imgUrl='' title='魔兽世界' dyname='甜甜的果冻顶级术士开荒' popu='108.8'/>
                    <Live imgUrl='' title='魔兽世界' dyname='甜甜的果冻顶级术士开荒' popu='108.8'/>
                    <Live imgUrl='' title='魔兽世界' dyname='甜甜的果冻顶级术士开荒' popu='108.8'/>
                    <Live imgUrl='' title='魔兽世界' dyname='甜甜的果冻顶级术士开荒' popu='108.8'/>
                    <Live imgUrl='' title='魔兽世界' dyname='甜甜的果冻顶级术士开荒' popu='108.8'/>
                    <Live imgUrl='' title='魔兽世界' dyname='甜甜的果冻顶级术士开荒' popu='108.8'/>
                    <Live imgUrl='' title='魔兽世界' dyname='甜甜的果冻顶级术士开荒' popu='108.8'/>
                    <Live imgUrl='' title='魔兽世界' dyname='甜甜的果冻顶级术士开荒' popu='108.8'/>
                    <Live imgUrl='' title='魔兽世界' dyname='甜甜的果冻顶级术士开荒' popu='108.8'/>
                    <Live imgUrl='' title='魔兽世界' dyname='甜甜的果冻顶级术士开荒' popu='108.8'/>
                    <Live imgUrl='' title='魔兽世界' dyname='甜甜的果冻顶级术士开荒' popu='108.8'/>
                </Row>
                <More />
            </div>
        );
    }
}

List.defaultProps = {
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
