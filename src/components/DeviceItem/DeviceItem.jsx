import React from 'react';
import './DeviceItem.css';

const deviceItem = props => (
  <div className = "DeviceItem">
    <div className="cell cell-number">{props.id}</div>
    <div className="cell">{props.item.id || ''}</div>
    <div className="cell">{props.item.model || ''}</div>
    <div className="cell">{props.item.battery || ''}</div>
    <div className="cell">{props.item.signal || ''}</div>
    <div>
      <div className="cell position-lat">{props.item.locationLat||null}</div>
      <div className="cell position-lng">{props.item.locationLng||null}</div>
    </div>
  </div>
);
export default deviceItem;