import React from 'react';
import { Link } from 'react-router-dom';
import './MenuItem.css';

const menuItem = props => (
  <Link to = {props.path}>
    <div 
      className = {"MenuItem" + (props.isActive? ' active' : '')}
      onClick = {props.clicked}
      >
      
      {props.name}
     
    </div>
    </Link>
);
export default menuItem;
