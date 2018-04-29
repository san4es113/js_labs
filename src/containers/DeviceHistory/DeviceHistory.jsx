import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import moment from 'moment';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DateTimePicker from 'material-ui-datetimepicker';
import DatePickerDialog from 'material-ui/DatePicker/DatePickerDialog';
import TimePickerDialog from 'material-ui/TimePicker/TimePickerDialog';

import TableHeader from '../../components/TableHeader/TableHeader';
import TableItem from '../../components/TableItem/Table';
import './DeviceHistory.css';

class DeviceHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDeviceId: this.props.match.params.id,
    };
  }
  render() {
    const currentDevice = this.props.deviceList.filter(d => d.id === this.state.currentDeviceId)[0];
    if (!currentDevice) return <Redirect to="/devices" />;

    const header = {
      number: '№',
      timeStamp: {
        name: 'Time',
        items: ['Last hour', 'Last 5 hours', 'Last 10 hours', 'Last 24 hours', 'Last week'],
        // click: this.onDeviceLastSyncItemClickHandler
      },
      battery: 'battery',
      signal: 'signal',
    };
    console.log(currentDevice);
    return (
      <MuiThemeProvider>
        <div className="DeviceHistory">
          <ul>
            <li><h4>{currentDevice.model}</h4></li>
            <li><h4>type:{currentDevice.type}</h4></li>
            <li><h4>status:{currentDevice.status}</h4></li>
            <li>
              <Link to={`/devices/${this.state.currentDeviceId}/map`} >Go to map history</Link>
            </li>
          </ul>
          <div className="datetime-section">
            <DateTimePicker
              floatingLabelText="Start time"
              format="MMM DD, YYYY HH:mm"
              timeFormat="24hr"
              onChange={this.setDate}
              DatePicker={DatePickerDialog}
              TimePicker={TimePickerDialog}
            />
            <DateTimePicker
              floatingLabelText="End time"
              onChange={this.setDate}
              DatePicker={DatePickerDialog}
              TimePicker={TimePickerDialog}
              format="MMM DD, YYYY HH:mm"
              timeFormat="24hr"
            />
          </div>

          <ul>
            <li className="table-header">
              <TableHeader item={header} />
            </li>

            {
          this.props.deviceList.filter(d => d.id === this.state.currentDeviceId)[0].history.map((entry, index) => {
            if (entry) {
              return (
                <li key={entry.time}>
                  <TableItem
                    id={index + 1}
                    item={{
                      timeStamp: moment(+entry.time).format('LLLL'),
                      battery: entry.battery,
                      signal: entry.signal,
                    }}
                  />
                </li>);
            }
          })
        }
          </ul>
        </div>
      </MuiThemeProvider>
    );
  }
}

const mapStateToProps = state => ({
  deviceList: state.devices.deviceList,
});
export default connect(mapStateToProps)(DeviceHistory);
