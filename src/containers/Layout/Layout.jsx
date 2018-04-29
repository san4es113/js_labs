import React, { Component } from 'react';
import './Layout.css';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="Layout">
        <div className="header-bottom">
          <div className="content">{this.props.children}</div>
        </div>
      </div>
    );
  }
}


export default Layout;
