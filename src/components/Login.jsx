/*
* 文件名： Login
* 所属：登陆页
*/
require('styles/App.css');
require('styles/Login.scss');

import React from 'react';
import CM from '../actions/AppMethods';

export default class Login extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
        }
    }

	handleLogin() {
		let msg = {
			type: 'error',
			title: '错误',
			content: '尚未完善该功能'
		}
		CM.alert(msg);
	}

	render() {
		return (
			<div className="logo">
				<div className="topbar"></div>
				<div className="login-from">
					<h1>登录</h1>
					<div className="input-group">
						<label htmlFor="mobile">手机</label>
						<input id="mobile" name="mobile" type="text" ref="mobile" required/>
					</div>
					<div className="input-group">
						<label htmlFor="password">密码</label>
						<input id="password" name="password" type="text" ref="password" required/>
					</div>
					<div className="submit-field">
						<button type="submit" className="btn-large" onClick={this.handleLogin}>登录</button>
					</div>
					<div className="tips">
						<p>无法登陆？<a href="#">找回密码</a></p>
					</div>
				</div>
			</div>
		);
	}
}