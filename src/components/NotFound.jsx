/*
* 文件名： NotFound
* 所属：404
*/
'use strict'

import React from 'react'
import {Link} from 'react-router'


export default class NotFound extends React.Component {
  render() {
    return (
      <div className="not-found">
        <div className="content">
          <h1>敬请期待</h1>
          <Link to='/'>
            点击返回首页
          </Link>
        </div>
      </div>
    )
  }
}
