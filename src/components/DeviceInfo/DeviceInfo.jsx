import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import './DeviceInfo.css';

const deviceInfo = props => (
  <div className="DeviceInfo">
  asd
    <h1>{props.device.model}</h1>
    <ul>
      <li className="DeviceInfo-item DeviceInfo-id">
        <span>id:</span>
        <span>{props.device.id}</span>
      </li>

      <li className="DeviceInfo-item DeviceInfo-type">
        <span>type:</span>
        <span>{props.device.type}</span>
      </li>

      <li className="DeviceInfo-item DeviceInfo-status">
        <span>status:</span>
        <span>{props.device.status}</span>
      </li>

      <li className="DeviceInfo-item DeviceInfo-lastSync">
        <span>lastSync:</span>
        <span>{moment(+props.device.lastSync).fromNow()}</span>
      </li>

      <li className="DeviceInfo-item DeviceInfo-signal">
        <span>Signal:</span>
        <span>{props.device.signal}</span>
      </li>

      <li className="DeviceInfo-item">
        <span>Battery:</span>
        <span>{props.device.battery}</span>
      </li>

      <li className="DeviceInfo-item location">
        <div>Location:</div>
        <div className="location-item">
          <span>Lat:</span>
          <span>{props.device.location && props.device.location.lat ? props.device.location.lat : ''}</span>
        </div>
        <div className="location-item">
          <span>Lng:</span>
          <span>{props.device.location && props.device.location.lng ? props.device.location.lng : ''}</span>
        </div>
      </li>
    </ul>
    <Link to={props.device.details.path}>
      <button className="btn-link" onClick={props.ViewHistroryLink ? props.ViewHistroryLink : () => {}}>
        View device history
      </button>
    </Link>
  </div>
);
export default deviceInfo;
