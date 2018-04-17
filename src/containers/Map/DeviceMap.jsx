import React, { Component } from 'react';
import { connect } from 'react-redux';
import './DeviceMap.css';
import GoogleMap from '../../service/google-map';

class DeviceMap extends Component{
  constructor(props){
    super(props);
    this.map;
  }
  showDevicesOnMap(){
    this.props.deviceList.forEach(dev => {
      this.map.setMarker({
        title: dev.model,
        lat: dev.location.lat, 
        lng: dev.location.lng,
        icon: 'http://icons.iconarchive.com/icons/graphicloads/100-flat-2/256/mobile-2-icon.png',
      }, this.onDeviceClickedHandler);
    });
  }
  onDeviceClickedHandler(){
    alert(1234);
  }
  render(){
    return (
      <div className = "DeviceMap" id="map1"/>
    );
  }
  componentDidMount(){
    this.map = new GoogleMap('map1',[]);
    const that = this;
    that.showDevicesOnMap();
    setInterval(() => {//draw objects
      that.map.clearMap();
      that.showDevicesOnMap();
    }, 30000);
    
  }
}
const mapStateToProps = (state) => {
  return{
    deviceList: state.devices.deviceList
  }
}
export default connect(mapStateToProps)(DeviceMap);