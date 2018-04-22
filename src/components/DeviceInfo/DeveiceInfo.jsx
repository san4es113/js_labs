import React from 'react';
import moment from 'moment';
import './DeviceInfo.css';
import { Link } from 'react-router-dom';

const deviceInfo=(props)=>(
  <div className="DeviceInfo">
    <h1>{props.device.model}</h1>
    <ul>
      <li className="DeviceInfo-item">
        <span>id:</span>
        <span>{props.device.id}</span>
      </li>

      <li className="DeviceInfo-item">
        <span>type:</span>
        <span>{props.device.type}</span>
      </li>

      <li className="DeviceInfo-item">
        <span>status:</span>
        <span>{props.device.status}</span>
      </li>

      <li className="DeviceInfo-item">
        <span>lastSync:</span>
        <span>{moment(+props.device.lastSync).fromNow()}</span>
      </li>

      <li className="DeviceInfo-item">
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
          <span>{props.device.location.lat}</span>
        </div>
        <div className="location-item">
          <span>Lng:</span>
          <span>{props.device.location.lng}</span>
        </div>
      </li>
    </ul>
    <Link to={props.device.details.path}>
      <button className="btn">
        View device history
      </button>
    </Link>
  </div>
);
export default deviceInfo;