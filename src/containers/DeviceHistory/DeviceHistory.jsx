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
import { loadDevicehistory, loadDevice } from '../../store/actions/devices';
import * as config from '../../config';
import './DeviceHistory.css';

class DeviceHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      start: '',
      end: '',
      currentDevice: this.props.deviceList.filter(d => d.id === this.props.match.params.id)[0],
    };
    this.timer = null;
  }
  componentDidMount() {
    const that = this;
    this.props.loadDevicehistory(that.props.match.params.id);
    this.timer = setInterval(() => {
      that.props.loadDevicehistory(that.props.match.params.id);
    }, config.SYNC_TIME * 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timer);
    this.timer = null;
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
    const devices = displayByLastSync(this.props.historyDevice.history, lastTime);
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
      const devices = sortByTime(this.props.historyDevice.history, this.state.start, this.state.end);
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
    const history = this.state.currentDevice.history || this.props.historyDevice.history || [];
    return (
      <MuiThemeProvider>
        <div className="DeviceHistory">
          <ul className="generalInfo">
            <li><h4 className="generalInfo-item">{this.state.currentDevice.model}</h4></li>
            <li>
              <h4 className="generalInfo-item">
                <span>type:</span>
                <span>{this.state.currentDevice.type}</span>
              </h4>
            </li>
            <li>
              <h4 className="generalInfo-item">
                <span>status:</span>
                <span>{this.state.currentDevice.status}</span>
              </h4>
            </li>
            <li>
              <Link
                to={`/devices/${this.state.currentDevice.id}/map`}
                onClick={this.props.loadDevice}
              >
                Go to map history
              </Link>
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
              history.map((entry, index) => {
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
  historyDevice: state.devices.currentDeviceHistory,
});
const mapDispatchToProps = dispatch => ({
  loadDevicehistory: id => dispatch(loadDevicehistory(id)),
  loadDevice: () => dispatch(loadDevice()),
});
export default connect(mapStateToProps, mapDispatchToProps)(DeviceHistory);
