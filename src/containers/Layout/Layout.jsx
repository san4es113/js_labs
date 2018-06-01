import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import SettingsIcon from 'react-icons/lib/go/settings';
import HomeIcon from 'react-icons/lib/go/home';
import MapIcon from 'react-icons/lib/md/map';
import { loadDevice } from '../../store/actions/devices';

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
        <div style={{ zIndex: '2' }}>
          <ul className="headerInfo">
            <li>
              <span>Devices</span>
              <span>{this.props.deviceList.length || 0}</span>
            </li>
            <li>
              <span>Connected</span>
              <span>{this.props.deviceList.length ? this.props.deviceList.filter(d => d.status === 'connected').length : 0}</span>
            </li>
          </ul>
        </div>
        <aside>

          <ul>
            <li>
              <Link to="/devices" onClick={this.props.loadDevice}>
                <HomeIcon
                  size={30}
                  style={iconStyle}
                />
                 Home
              </Link>
            </li>
            <li>
              <Link to="/device-map" onClick={this.props.loadDevice}>
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
const mapStateToProps = state => ({
  deviceList: state.devices.deviceList,
});
const mapDispatchToProps = dispatch => ({
  loadDevice: () => dispatch(loadDevice()),
});
export default connect(mapStateToProps, mapDispatchToProps)(Layout);
