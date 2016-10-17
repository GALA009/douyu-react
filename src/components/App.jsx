'use strict'

import React from 'react';

export default class App extends React.Component {
  constructor(props, context) {
    super(props);
  }
  componentWillMount() {
    // let token = sessionStorage.getItem('token')
    // if (token === null) {
    //   this.props.history.push("/login")
    // }
  }
  render() {
    return (
      <div className="app-wrapper">
        {this.props.children}
      </div>
    )
  }
}
