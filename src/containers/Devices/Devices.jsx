import React,{Component} from 'react';
import { connect } from 'react-redux';
import './Devices.css';
import DeviceItem from '../../components/DeviceItem/DeviceItem';

class Devices extends Component{
  constructor(props){
    super(props);
    this.state = {}
  }

  render(){
    const header = {
      id: 'device id',
      model:'model',
      battery: 'battery level',
      signal: 'signal level',
      locationLng: 'longitude',
      locationLat: 'latitude'
    }
    return (
      <div className = "Devices">
        <h2>List of devices:</h2>
        <ul>
          <li className = "table-header">
            <DeviceItem 
              id = '№'
              item = {header}  
            />
          </li>
          {this.props.deviceList.map((device, index) => {
            return <li> 
              <DeviceItem
                key = {device.id}
                id = {index+1}
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