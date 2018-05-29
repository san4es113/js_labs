import React, { Component } from 'react';
import { connect } from 'react-redux';

import './DeviceMap.css';
import GoogleMap from '../../service/google-map';
import Dashboard from '../../components/Dashboard/Dashboard';
import DeviceInfo from '../../components/DeviceInfo/DeviceInfo';
import { MOBILE_ICON, SYNC_TIME } from '../../config';

class DeviceMap extends Component {
  constructor(props) {
    super(props);
    this.map = null;
    this.state = {
      activeDashboard: true,
      currentDevice: {},
    };
    this.timer = null;
  }

  componentDidMount() {
    this.map = new GoogleMap('map1', []);
    const that = this;
    this.showDevicesOnMap();
    this.timer = setInterval(() => { // draw objects
      that.map.clearMap();
      that.showDevicesOnMap();
    }, SYNC_TIME * 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = null;
  }


  onDeviceClickedHandler = (dev) => {
    if (dev === this.state.currentDevice) {
      this.setState(prevState => ({
        activeDashboard: !prevState.activeDashboard,
      }));
      return;
    }
    this.setState({ currentDevice: dev });
  }
  showDevicesOnMap() {
    this.props.deviceList.forEach((dev) => {
      this.map.setMarker({
        title: dev.model,
        lat: dev.location.lat,
        lng: dev.location.lng,
        icon: MOBILE_ICON,
      }, () => this.onDeviceClickedHandler(dev));
    });
  }
  render() {
    const asideWindow = this.state.currentDevice.id ? <DeviceInfo device={this.state.currentDevice} /> : null;
    return (
      <Dashboard
        toggled={this.state.activeDashboard ? 'active' : 'hidden'}
        asideWindow={asideWindow}
      >
        <div className="DeviceMap" id="map1" />
      </Dashboard>
    );
  }
}
const mapStateToProps = state => ({
  deviceList: state.devices.deviceList,
});

export default connect(mapStateToProps)(DeviceMap);
