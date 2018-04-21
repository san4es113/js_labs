import React, { Component } from 'react';
import { connect } from 'react-redux';
import './DeviceMap.css';
import GoogleMap from '../../service/google-map';
import Dashboard from '../../components/Dashboard/Dashboard';
import DeviceInfo from '../../components/DeviceInfo/DeveiceInfo';

class DeviceMap extends Component{
  constructor(props){
    super(props);
    this.map;
    this.state = {
      activeDashboard: false,
      currentDevice: {
        id:'123qwesffhfl;lsglsgksnd;gidfjkdfgnkdjgsnldgkndlgksgngjk',
        status: 'connected',
        model: 'nokia',
        type: 'android',
        battery: '12%',
        signal: '-100dBm',
        lastSync: '1524352896629',
        location: {
          lat:'12.3123',
          lng:'34.124'
        },
        details: {
          name: 'View details',
          path: '/devices/Android14',
          type: 'link'
        } 
      },
    };
  }
  showDevicesOnMap(){
    this.props.deviceList.forEach(dev => {
      this.map.setMarker({
        title: dev.model,
        lat: dev.location.lat, 
        lng: dev.location.lng,
        icon: 'http://icons.iconarchive.com/icons/graphicloads/100-flat-2/256/mobile-2-icon.png',
      }, () => this.onDeviceClickedHandler(dev));
    });
  }
  onDeviceClickedHandler = (dev) =>{
    this.setState((prevState)=>{
      return {
        activeDashboard: !prevState.activeDashboard
      }
    })
  }
  render(){
    const asideWindow = <DeviceInfo device={this.state.currentDevice}/>
    return (
      <Dashboard 
        toggled={this.state.activeDashboard?"active":"hidden"}
        asideWindow={asideWindow}>
        <button onClick={this.onDeviceClickedHandler}>aaa</button>
        <div className = "DeviceMap" id="map1"/>
      </Dashboard>  
    );
  }
  componentDidMount(){
    // this.map = new GoogleMap('map1',[]);
    // const that = this;
    // that.showDevicesOnMap();
    // setInterval(() => {//draw objects
    //   that.map.clearMap();
    //   that.showDevicesOnMap();
    // }, 30000);
    
  }
}
const mapStateToProps = (state) => {
  return{
    deviceList: state.devices.deviceList
  }
}
export default connect(mapStateToProps)(DeviceMap);
