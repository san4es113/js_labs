import React from 'react';
import './MenuItem.css';

const menuItem = props => (
  <div 
    className = {"MenuItem" + (props.isActive? ' active' : '')}
    onClick = {props.clicked}
    >
    {props.name}
  </div>
);
export default menuItem;