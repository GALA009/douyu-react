/*
* 模块名： Swiper
* 简介：轮播广告
    左右滑动切换广告，目前只有滑动后可切换，没有自动切换
* 传参： 
    data: 轮播内容，用来判断输出轮播个数
* 
*/
require('styles/Swiper.scss');

import React from 'react';
import { Link } from 'react-router';
import CM from '../../actions/AppCommon';

// let ReactCSSTransitionGroup = require('react-addons-css-transition-group');

export default class Swiper extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
            isClick: 0, //当前轮播图片编号
            oldActive: 0,//上一次焦点图编号
            touchStartX: undefined, //触摸起点X
            touchStartY: undefined, //触摸起点Y
            touchMoveX: undefined,  //触摸移动X距离
            touchMoveY: undefined,  //触摸移动Y距离
            touchEndX: undefined,   //触摸终点X
            touchEndY: undefined,   //触摸终点Y
            wrapperWidth: undefined    //元素宽度
        }
    }

    componentWillMount() {
    }

    componentDidMount() {
        let _this = this;
        let isClick = this.state.isClick;
        let itemLength = this.refs.wrapper.childNodes.length;   //元素个数
        let wrapperWidth = this.refs.wrapper.clientWidth;   //元素宽度
        console.log('isClick->'+isClick)

        CM.addClass(this.refs.pagination.childNodes.item(0), ' active');
        this.refs.wrapper.style.transform = 'translate3d(0,0,0)';

        this.setState({ wrapperWidth: this.refs.wrapper.clientWidth })

        // setInterval(function () {

        //     if (isClick == -1) {
        //         // CM.removeClass(_this.refs.pagination.childNodes.item(0), 'active')
        //         CM.removeClass(_this.refs.pagination.childNodes.item(itemLength - 1), 'active');
        //     }
        //     else {
        //         CM.removeClass(_this.refs.pagination.childNodes.item(isClick), 'active')
        //     }

        //     isClick++;

        //     _this.refs.wrapper.style.transform = 'translate3d(-' + (isClick * wrapperWidth) + 'px,0,0)';
        //     _this.refs.wrapper.style.transitionDuration = '300ms'

        //     if (isClick == (itemLength - 1)) {
        //         CM.addClass(_this.refs.pagination.childNodes.item(isClick), ' active')
        //         isClick = -1;
        //         _this.setState({ isClick: isClick });
        //     } else {
        //         _this.setState({ isClick: isClick });
        //         CM.addClass(_this.refs.pagination.childNodes.item(isClick), ' active')
        //     }

        // }, 3000)
    }

    touchStart(e) {
        this.setState({ touchStartX: e.touches[0].pageX });
    }

    touchMove(e) {
        let direction
        let touchStartX = this.state.touchStartX;
        let touchMoveX = this.state.touchMoveX;
        let clickNum = this.state.isClick;
        let wrapperWidth = this.refs.wrapper.clientWidth;

        touchMoveX = e.touches[0].pageX
        direction = touchStartX - touchMoveX

        //this.refs.wrapper.style.transform = 'translate3d(-' + ((clickNum * wrapperWidth) + parseInt(direction)) + 'px,0,0)';
        e.preventDefault();
        this.setState({ touchMoveX: direction });

    }

    touchEnd(e) {

        let direction = this.state.touchMoveX;  //起终点坐标差异 > 0 向右滑动,  <0 向左滑动
        let itemLength = this.refs.wrapper.childNodes.length;   //元素个数
        let clickNum = this.state.isClick;  //当前点击图片编号
        let oldActive = clickNum;  //上次焦点
        let touchStartX = this.state.touchStartX;   //触摸起点
        let touchEndX = this.state.touchEndX;   //触摸终点
        let wrapperWidth = this.refs.wrapper.clientWidth;

        console.log('clickNum->'+clickNum)
        CM.removeClass(this.refs.pagination.childNodes.item(clickNum), 'active')
        //判断手指移动方向和移动距离
        //向左滑动
        if (direction < 0 && Math.abs(direction) > 100) {
            if (clickNum == 0) {
                clickNum = itemLength - 1;
            } else {
                clickNum--;
            }
        }
        //向右滑动
        else if (direction > 0 && Math.abs(direction) > 100) {
            if (clickNum == itemLength - 1) {
                clickNum = 0;
            } else {
                clickNum++;
            }
        }
        CM.addClass(this.refs.pagination.childNodes.item(clickNum), ' active')

        if (clickNum == 0) {
            this.refs.wrapper.style.transform = 'translate3d(0,0,0)';
        }
        else {
            this.refs.wrapper.style.transform = 'translate3d(-' + (clickNum * wrapperWidth) + 'px,0,0)';
        }
        this.refs.wrapper.style.transitionDuration = '300ms'

        this.setState({
            isClick: clickNum,
            oldActive: oldActive,
            touchEndX: undefined
        });
    }

    handleClick(e) {
        let active = e.target.getAttribute('data-item-num');    //点击导航序号
        let wrapperWidth = this.refs.wrapper.clientWidth;
        let oldActive = this.state.isClick;

        if (active === null || active === this.state.isClick) return false;

        CM.removeClass(this.refs.pagination.childNodes.item(this.state.isClick), 'active')

        this.refs.wrapper.style.transform = 'translate3d(-' + (active * wrapperWidth) + 'px,0,0)';
        this.refs.wrapper.style.transitionDuration = '300ms';

        CM.addClass(this.refs.pagination.childNodes.item(active), ' active');
        this.setState({
            isClick: active,
            oldActive: oldActive
        });
    }

    render() {
        let wrapperStyle = {
            width: this.state.wrapperWidth
        }
        //轮播内容
        let slideItem = this.props.data.map(function (data, step) {
            return (
                <div className="swiper-slide" key={step}>
                    <Link to="/">
                        <img src={`./images/${(step + 1)}.jpg`} alt=""/>
                    </Link>
                </div>
            )
        });

        //导航圆点
        let paginationBullet = this.props.data.map(function (data, step) {
            return (
                <div className="swiper-pagination-bullet" key={step} data-item-num={step}></div>
            )
        });

        return (
            <div className="swiper-container">
                <div className="swiper-wrapper" style={wrapperStyle} ref="wrapper" onTouchStart={this.touchStart.bind(this) } onTouchMove={this.touchMove.bind(this) } onTouchEnd={this.touchEnd.bind(this) }>
                    {slideItem}
                </div>
                <div className="swiper-pagination" ref="pagination" onClick={this.handleClick.bind(this) }>
                    {paginationBullet}
                </div>
            </div>
        );
    }
}

Swiper.defaultProps = {
    data: [
        '1--游戏',
        '2--手机游戏',
        '3--鱼乐星天地',
        '4--奥运天地'
    ]
}