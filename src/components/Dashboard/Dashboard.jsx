import React from 'react';
import './Dashboard.css';

/**
 * Use: <Dashboard asideWindow={reactComponent}>content</Dashboard>
 * @param {*} props 
 */
const dashboard=(props)=>(
  <div className="Dashboard">
    <div className={props.toggled === 'active'? "Dashboard-content active" : "Dashboard-content" }>
      {props.children}
    </div>
    <aside className={props.toggled === 'active'? "active" : "" }>
      {props.asideWindow}
    </aside>
    
  </div>
  
);
export default dashboard;