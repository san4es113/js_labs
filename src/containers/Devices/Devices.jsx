import React,{ Component } from 'react';
import { connect } from 'react-redux';
import './Devices.css';
import TableItem from '../../components/TableItem/Table';
import TableHeader from '../../components/TableHeader/TableHeader';

class Devices extends Component{

  onDeviceTypeItemClickHandler = (name) => {
    alert(name);
  }
  onDeviceStatusItemClickHandler = (name) => {
    alert(name);
  }
  onDeviceLastSyncItemClickHandler = (name) => {
    alert(name);
  }
  render(){
    const header = {
      number: '№',
      id: 'Device ID',
      type: {
       name: 'Device Type',
       items: ['Android'],
       click: this.onDeviceTypeItemClickHandler
      },
      status: {
        name: 'Status',
        items: ['connected', 'disconnectd', 'all'],
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
        <h2>List of devices:</h2>
        
        <ul>
          <li className = "table-header">
          <TableHeader item = {header}/>
          </li>
          {this.props.deviceList.map((device, index) => {
            return <li key = {device.id}> 
              <TableItem
                id = {index + 1}
                item = {device}
              />
              </li>
          })}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    deviceList: state.devices.deviceList
  }
}
export default connect(mapStateToProps)(Devices);