import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import SettingsIcon from 'react-icons/lib/go/settings';
import HomeIcon from 'react-icons/lib/go/home';
import MapIcon from 'react-icons/lib/md/map';

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
      config.setIP(result);
    } else {
      alert('IP is empty');
    }
  }
  render() {
    const iconStyle = {
      display: 'flex',
      margin: '5px auto',
    };
    return (
      <div className="Layout">
        <div style={{ 'z-index': '2' }}>
          <ul className="headerInfo">
            <li>
              <span>Devices</span>
              <span>20</span>
            </li>
            <li>
              <span>Connected</span>
              <span>20</span>
            </li>
          </ul>
        </div>
        <aside>

          <ul>
            <li>
              <Link to="/devices">
                <HomeIcon
                  size={30}
                  style={iconStyle}
                />
                 Home
              </Link>
            </li>
            <li>
              <Link to="/device-map">
                <MapIcon size={30} style={iconStyle} />
                Device Map
              </Link>
            </li>
            <li>
              <a href="#" onClick={this.onSettingsClickHandler}>
                <SettingsIcon size={30} style={iconStyle} />
                 Settings
              </a>
            </li>
          </ul>
        </aside>
        <div className="header-bottom">
          <div className="content">{this.props.children}</div>
        </div>
      </div>
    );
  }
}


export default Layout;
