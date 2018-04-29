import React, { Component } from 'react';
import './Layout.css';
import { Link } from 'react-router-dom';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="Layout">
        <header>
          <ul>
            <li><Link to="/devices">Home</Link></li>
            <li><Link to="/device-map">Device Map</Link></li>
            <li><Link to="/devices">Settings</Link></li>
          </ul>
        </header>
        <div className="header-bottom">
          <div className="content">{this.props.children}</div>
        </div>
      </div>
    );
  }
}


export default Layout;
