import React, { Component } from 'react';
import { connect } from 'react-redux';

import './DeviceMap.css';
import GoogleMap from '../../service/google-map';
import Dashboard from '../../components/Dashboard/Dashboard';
import DeviceInfo from '../../components/DeviceInfo/DeviceInfo';
import { loadDevice } from '../../store/actions/devices';
import { MOBILE_ICON } from '../../config';

class DeviceMap extends Component {
  constructor(props) {
    super(props);
    this.map = null;
    this.state = {
      activeDashboard: true,
      currentDevice: {},
    };
  }

  componentDidMount() {
    this.map = new GoogleMap('map1', []);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.deviceList.length) {
      setTimeout(() => {
        this.showDevicesOnMap(nextProps.deviceList);
      }, 2000);
    }
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
  showDevicesOnMap(devices) {
    devices.forEach((dev) => {
      const that = this;
      if (dev.location) {
        that.map.setMarker({
          title: dev.model,
          lat: dev.location.lat,
          lng: dev.location.lng,
          icon: MOBILE_ICON,
        }, () => that.onDeviceClickedHandler(dev));
      }
    });
  }
  render() {
    const asideWindow = this.state.currentDevice.id ? <DeviceInfo device={this.state.currentDevice} ViewHistroryLink={this.props.loadDevice} /> : null;
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

const mapDispatchToProps = dispatch => ({
  loadDevice: () => dispatch(loadDevice()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DeviceMap);
