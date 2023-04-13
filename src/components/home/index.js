import './index.less';
import React, { Component } from 'react';
import { Redirect } from 'react-router'

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="home">
        Home
        <Redirect push to="/articles"/>
      </div>
    );
  }
}

export default Index;
