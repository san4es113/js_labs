import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import moment from 'moment';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import DateTimePicker from 'material-ui-datetimepicker';
import DatePickerDialog from 'material-ui/DatePicker/DatePickerDialog';
import TimePickerDialog from 'material-ui/TimePicker/TimePickerDialog';
import { displayByLastSync, sortByTime } from '../../service/devices';
import TableHeader from '../../components/TableHeader/TableHeader';
import TableItem from '../../components/TableItem/Table';
import './DeviceHistory.css';

class DeviceHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDeviceId: this.props.match.params.id,
      currentDevice: this.props.deviceList.filter(d => d.id === this.props.match.params.id)[0],
      start: '',
      end: '',
    };
  }

  onDeviceLastSyncItemClickHandler = (name) => {
    let lastTime;
    if (name.toLowerCase() === 'last hour') {
      lastTime = moment().subtract('1', 'hour').valueOf();
    } else if (name.toLowerCase() === 'last week') {
      lastTime = moment().subtract('7', 'days').valueOf();
    } else {
      const hours = name.split(' ')[1];
      lastTime = moment().subtract(hours, 'hour').valueOf();
    }
    const curDevice = this.props.deviceList.filter(d => d.id === this.props.match.params.id)[0];
    const devices = displayByLastSync(curDevice.history, lastTime);
    this.setState({ currentDevice: { ...curDevice, history: devices } });
  }

  onTimeChangeHandler = async (id, datetime) => {
    const time = moment(datetime).valueOf();

    await this.setState(() => {
      if (id === 'datetime-start') {
        return {
          start: time,
        };
      }
      return {
        end: time,
      };
    });

    if (this.state.start && this.state.end) {
      const curDevice = this.props.deviceList.filter(d => d.id === this.props.match.params.id)[0];
      const devices = sortByTime(curDevice.history, this.state.start, this.state.end);
      this.setState({ currentDevice: { ...curDevice, history: devices } });
    }

  }

  render() {
    if (!this.state.currentDevice) return <Redirect to="/devices" />;

    const header = {
      number: '№',
      timeStamp: {
        name: 'Time',
        items: ['Last hour', 'Last 5 hours', 'Last 10 hours', 'Last 24 hours', 'Last week'],
        click: this.onDeviceLastSyncItemClickHandler,
      },
      battery: 'battery',
      signal: 'signal',
    };
    return (
      <MuiThemeProvider>
        <div className="DeviceHistory">
          <ul>
            <li><h4>{this.state.currentDevice.model}</h4></li>
            <li><h4>type:{this.state.currentDevice.type}</h4></li>
            <li><h4>status:{this.state.currentDevice.status}</h4></li>
            <li>
              <Link to={`/devices/${this.state.currentDeviceId}/map`} >Go to map history</Link>
            </li>
          </ul>
          <div className="datetime-section">
            <DateTimePicker
              returnMomentDate
              id="datetime-start"
              floatingLabelText="Start time"
              format="MMM DD, YYYY HH:mm"
              timeFormat="24hr"
              onChange={dateTime => this.onTimeChangeHandler('datetime-start', dateTime)}
              DatePicker={DatePickerDialog}
              TimePicker={TimePickerDialog}
            />
            <DateTimePicker
              returnMomentDate
              id="datetime-end"
              floatingLabelText="End time"
              onChange={dateTime => this.onTimeChangeHandler('datetime-end', dateTime)}
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
          this.state.currentDevice.history.map((entry, index) => {
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
