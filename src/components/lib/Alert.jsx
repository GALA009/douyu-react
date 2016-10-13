/*
* 模块名： Alert
* 简介：弹出框
* 传参：
		type : 类型,可传入info/error  info标题栏为蓝色  error标题栏为红色
		title： 标题
		content： 内容
*
*/
require('styles/App.css');
require('styles/Alert.scss');

import React from 'react';
import ReactDOM from 'react-dom';

export default class Alert extends React.Component {
	constructor(props, context) {
	  super(props, context)
	  this.state = {
	    nodeStyle: {}
	  }
	}

	componentDidMount(){
		let node = ReactDOM.findDOMNode(this).children[0];
		let windowHeight = window.innerHeight;
		let style = {
			top: (windowHeight - node.clientHeight)/2 + 'px'
		}

		this.setState({
			nodeStyle: style
		})
	}

	unmount() {
		ReactDOM.unmountComponentAtNode(document.getElementById('alert'));
	}

	render() {
		return (
			<div className="alert">
				<div className="content" style={this.state.nodeStyle}>
					<div className={'header header-'+this.props.data.type}>{this.props.data.title}</div>
					<div className="body">{this.props.data.content}</div>
					<div className="footer"><a href="#" onClick={this.unmount}>好</a></div>
				</div>
			</div>
		);
	}
}

Alert.defaultProps = {
	data :{
		type: 'info',
		title: '',
		content: ''
	}
};

Alert.propTypes = {
  data: React.PropTypes.object.isRequired
};