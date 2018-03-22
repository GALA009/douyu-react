//方法文件

import React from 'react'
import ReactDOM from 'react-dom'
import request from 'superagent'
import Alert from '../components/lib/Alert'
import AppConstants from './AppConstants'

const BASE_URL = AppConstants.BASE_URL

export default {
	//POST方法
	callPostApi(params, cb) {
		if (typeof params.url === 'undefined') {
			console.log('请指定 url 参数')
			return false;
		}
		if (typeof params.data === 'undefined') {
			params.data = {}
		}

		request
			.post(BASE_URL + params.url)
			.set('Accept', 'application/json')
			.set('Content-Type', 'application/x-www-form-urlencoded')
			.set('sToken', sessionStorage.getItem('token'))
			.send(params.data)
			.end(cb)
	},

	//GET方法
	callGetApi(params, cb) {
		if (typeof params.url === 'undefined') {
			console.log('请指定 url 参数')
			return false;
		}
		if (typeof params.data === 'undefined') {
			params.data = {};
		}
		console.log(params)
		request
			.get(BASE_URL + params.url)
			.accept('application/xml')
			.withCredentials()
			.query(params.data)
			.end(cb)
	},

	//弹窗方法
	alert(msg) {
		let wrapperDom

		if (document.getElementById('alert')) {
			wrapperDom = document.getElementById('alert');
		} else {
			wrapperDom = document.createElement('div');
			wrapperDom.id = 'alert';
			document.body.appendChild(wrapperDom);
		}
		let alert = <Alert data = {	msg	} />
		ReactDOM.render(alert, wrapperDom)
	}
}