import React,{Component} from 'react';
import { connect } from 'react-redux';
import './Devices.css';
import TableItem from '../../components/TableItem/Table';

class Devices extends Component{

  render(){
    const header = {
      id: 'Device ID',
      type: 'Device Type',
      status: 'Status',
      lastSync: 'Last Sycn Time',
      details: 'View details'
    }
    return (
      <div className = "Devices">
        <h2>List of devices:</h2>
        <ul>
          <li className = "table-header">
            <TableItem 
              id = '№'
              item = {header}  
            />
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