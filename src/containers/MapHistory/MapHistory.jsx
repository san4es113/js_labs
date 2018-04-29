import React, { Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import './MapHistory.css';
import GoogleMap from '../../service/google-map';
import Dashboard from '../../components/Dashboard/Dashboard';
import DeviceInfo from '../../components/DeviceInfo/DeviceInfo';
import { MOBILE_ICON } from '../../config';

class MapHistory extends Component {
  constructor(props) {
    super(props);
    this.map = null;
    this.state = {
      activeDashboard: true,
      currentDevice: this.props.deviceList.filter((d => d.id === this.props.match.params.id))[0],
      currentDevIndex: '',
    };
  }

  componentDidMount() {
    this.map = new GoogleMap('map2', []);
    const that = this;
    this.showDevicesOnMap();
    setInterval(() => { // draw objects
      that.map.clearMap();
      that.showDevicesOnMap();
    }, 30000);
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
    this.state.currentDevice.history.forEach((dev, index) => {
      this.map.setMarker({
        title: moment(dev.time).format('LLLL'),
        lat: dev.location.lat,
        lng: dev.location.lng,
        icon: MOBILE_ICON,
      }, () => this.onDeviceClickedHandler(index));
    });
  }

  render() {
    const asideWindow = this.state.currentDevice.id
      ? (<DeviceInfo device={{
        ...this.state.currentDevice,
        ...this.state.currentDevice.history[this.state.currentDevIndex],
}}
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
});
export default connect(mapStateToProps)(MapHistory);
