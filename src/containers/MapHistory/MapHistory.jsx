import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import moment from 'moment';
import './MapHistory.css';
import GoogleMap from '../../service/google-map';
import Dashboard from '../../components/Dashboard/Dashboard';
import DeviceInfo from '../../components/DeviceInfo/DeviceInfo';
import * as config from '../../config';

class MapHistory extends Component {
  constructor(props) {
    super(props);
    this.map = null;
    this.state = {
      activeDashboard: true,
      currentDevice: {},
      currentDevIndex: '',
    };
    this.timer = null;
  }
  componentWillMount() {
  }

  componentDidMount() {
    this.map = new GoogleMap('map2', []);
    const that = this;

    this.showDevicesOnMap();
    this.timer = setInterval(() => { // draw objects
      that.map.clearMap();
      that.showDevicesOnMap();
    }, config.SYNC_TIME * 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = null;
  }


  onDeviceClickedHandler = (index) => {
    if (index === this.state.currentDevIndex) {
      this.setState(prevState => ({
        activeDashboard: !prevState.activeDashboard,
      }));
      return;
    }
    this.setState({ currentDevIndex: index });
  }
  showDevicesOnMap() {
    this.props.historyDevice.forEach((dev, index) => {
      this.map.setMarker({
        title: moment(dev.time).format('LLLL'),
        lat: dev.location.lat,
        lng: dev.location.lng,
        icon: config.MOBILE_ICON,
      }, () => this.onDeviceClickedHandler(index));
    });
  }

  render() {
    const currentDevice = this.props.deviceList.length ? this.props.deviceList.filter((d => d.id === this.props.match.params.id))[0] : {};
    const asideWindow = currentDevice.id
      ? (<DeviceInfo
        device={{
        ...currentDevice,
        ...this.props.historyDevice[this.state.currentDevIndex],
      }
    }
        ViewHistroryLink={() => {}}
      />)
      : null;
    return (
      <Dashboard
        toggled={this.state.activeDashboard ? 'active' : 'hidden'}
        asideWindow={asideWindow}
      >
        <div className="DeviceMap" id="map2" />
      </Dashboard>
    );
  }
}
const mapStateToProps = state => ({
  deviceList: state.devices.deviceList,
  historyDevice: state.devices.currentDeviceHistory.history,
});
export default connect(mapStateToProps)(MapHistory);
