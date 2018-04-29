import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as config from '../../config';
import './Layout.css';

class Layout extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  onSettingsClickHandler = () => {
    const result = prompt('Enter new IP:');
    if (result) {
      if (/^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(result)) {
        config.setIP(result);
      } else {
        alert('wrong IP format');
        this.onSettingsClickHandler();
      }
    } else {
      alert('IP is empty');
    }
  }
  render() {
    return (
      <div className="Layout">
        <header>
          <ul>
            <li><Link to="/devices">Home</Link></li>
            <li><Link to="/device-map">Device Map</Link></li>
            <li><a href="#" onClick={this.onSettingsClickHandler}>Settings</a></li>
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
