import React,{Component} from 'react';
import moment from 'moment';
import './DeviceHistory.css';
import TableHeader from '../../components/TableHeader/TableHeader';
import TableItem from '../../components/TableItem/Table';
import { connect } from 'react-redux';

class DeviceHistory extends Component {
  constructor(props){
    super(props);
    this.state = {
      deviceEntryList:[]
    };
  }

  render(){
    const header = {
      number: '№',
      timeStamp: {
        name: 'Time',
        items: ['Last hour', 'Last 5 hours', 'Last 10 hours', 'Last 24 hours', 'Last week'],
       // click: this.onDeviceLastSyncItemClickHandler
      },
      battery: "battery",
      signal: "signal"
    }
    return (
      <div className="DeviceHistory">
        <div>
          <input type="date"/><input type="time"/>
        </div>
        <ul>
        <li className = "table-header">
          <TableHeader item = {header}/>
        </li>
        
        {
          this.props.deviceList[0].history.map((entry, index) => {
            if(entry){
              return <li key = {entry.time}> 
              <TableItem
                id = {index + 1}
                item = {{
                timeStamp: moment(+entry.time).format('LLLL'),
                battery: entry.battery,
                signal: entry.signal,
            }}
            />
            </li>
          }})
        }
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state =>{
  return {
    deviceList: state.devices.deviceList
  }
}
export default connect(mapStateToProps)(DeviceHistory);