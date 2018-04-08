import React,{Component} from 'react';
import './Devices.css';
import DeviceItem from '../../components/DeviceItem/DeviceItem';

class Devices extends Component{
  constructor(props){
    super(props);
    this.state = {
      deviceList: [
        {
          id: '12',
          model:'Nokia',
          battery: '67%',
          signal: '-100dBm',
          locationLng: '12.431',
          locationLat: '23.542'
        },
        {
          id: '13',
          model:'Nokia',
          battery: '67%',
          signal: '-100dBm',
          locationLng: '12.431',
          locationLat: '23.542'
        },
        {
          id: '14',
          model:'Nokia',
          battery: '67%',
          signal: '-100dBm',
          locationLng: '12.431',
          locationLat: '23.542'
        },
        {
          id: '15',
          model:'Nokia',
          battery: '67%',
          signal: '-100dBm',
          locationLng: '12.431',
          locationLat: '23.542'
        },
        {
          id: '16asdawrgdsaaafawraeyhsgfawgedtjsdgsrhfh',
          model:'Nokia',
          battery: '67%',
          signal: '-100dBm',
          locationLng: '12.431',
          locationLat: '23.542'
        }
      ]
    }
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
          {this.state.deviceList.map((device, index) => {
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
export default Devices;