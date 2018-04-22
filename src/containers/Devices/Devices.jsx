import React,{ Component } from 'react';
import { connect } from 'react-redux';
import moment from 'moment';
import { Link } from 'react-router-dom';
import './Devices.css';
import TableItem from '../../components/TableItem/Table';
import TableHeader from '../../components/TableHeader/TableHeader';
import { displayByType, displayByStatus, displayByLastSync } from '../../service/devices';
import { loadDevice } from '../../store/actions/devices';

class Devices extends Component{
  constructor(props){
    super(props);
    this.state = {
      devices: this.props.deviceList,
      isAllActive: true
    }
  }

  onDeviceTypeItemClickHandler = (name) => {
    if(name === 'all') {
      this.setState({ 
        devices: this.props.deviceList,
        isAllActive: true,
      });
    } else {
      const devices = displayByType(this.props.deviceList, name.toLowerCase())
      this.setState({
        devices,
        isAllActive: false,
      });
    }
  }

  onDeviceStatusItemClickHandler = (name) => {
    if(name === 'all'){
      this.setState({ 
        devices: this.props.deviceList,
        isAllActive: true,
      });
    } else {
      const devices = displayByStatus(this.props.deviceList, name.toLowerCase())
      this.setState({
        devices,
        isAllActive: false,
      });
    }
  }

  onDeviceLastSyncItemClickHandler = (name) => {
    let lastTime;
    if(name.toLowerCase() === 'last hour' ){
      lastTime = moment().subtract('1','hour').valueOf();
    } else if( name.toLowerCase() === 'last week' ) {
      lastTime = moment().subtract('7','days').valueOf();
    } else {
      const hours = name.split(' ')[1];
      lastTime = moment().subtract(hours, 'hour').valueOf();
    }
    const devices = displayByLastSync(this.props.deviceList, lastTime)
    this.setState({
      devices,
      isAllActive: true,
    });
  }

  render(){
    const header = {
      number: '№',
      id: 'Device ID',
      type: {
       name: 'Device Type',
       items: ['Android','iOS','Windows','all'],
       click: this.onDeviceTypeItemClickHandler
      },
      status: {
        name: 'Status',
        items: ['connected', 'disconnected', 'all'],
        click: this.onDeviceStatusItemClickHandler
       },
      lastSync: {
        name: 'Last Sycn Time',
        items: ['Last hour', 'Last 5 hours', 'Last 10 hours', 'Last 24 hours', 'Last week'],
        click: this.onDeviceLastSyncItemClickHandler
      },
      details: 'View details'
    }
    return (
      <div className = "Devices">
        <Link to="/device-map">Go To Map</Link>
        <h2>List of devices:</h2>
        
        <ul>
          <li className = "table-header">
          <TableHeader item = {header}/>
          </li>
          {this.state.devices.map((device, index) => {
            if(device){
            return <li key = {device.id}> 
              <TableItem
                id = {index + 1}
                item = {{
                  id: device.id,
                  type: device.type,
                  status: device.status,
                  lastSync: device.lastSync,
                  details: device.details,
                }}
              />
              </li>
              }
          })}
        </ul>
      </div>
    );
  }

  componentDidMount(){
    const that = this;
    that.props.loadDevice();
    setTimeout(()=>{
      that.onDeviceTypeItemClickHandler('all');
    },2000);
    this.timer = setInterval(()=>{
      that.props.loadDevice();
      if(that.state.isAllActive){
        that.onDeviceTypeItemClickHandler('all');
      }
    },15000);
  }
}

const mapStateToProps = state => {
  return {
    deviceList: state.devices.deviceList
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    loadDevice: () => dispatch(loadDevice()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Devices);