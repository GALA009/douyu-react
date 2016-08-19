import React from 'react'
import ReactDOM from 'react-dom'
import Alert from '../components/lib/Alert'

export default {
	alert(msg) {
		let wrapperDom

		if (document.getElementById('alert')) {
			wrapperDom = document.getElementById('alert');
		} else {
			wrapperDom = document.createElement('div');
			wrapperDom.id = 'alert';
			document.body.appendChild(wrapperDom);
		}
		let alert = <Alert data={msg}/>
		ReactDOM.render(alert, wrapperDom)
	}
}