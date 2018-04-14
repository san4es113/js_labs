import React from 'react';
import { Link } from 'react-router-dom';

import './Table.css';

const table = props => {
  const countCells = Object.keys(props.item).length;
  return (
  <div className = "TableItem">
    <div className="cell cell-number">{props.id}</div>
    {Object.keys(props.item).map(c => {
      const cell = props.item[c];
      if(typeof cell !== 'object') {
        return <div className="cell" style={{width: 100/countCells + '%' }}>{cell || ''}</div>
      } else if (cell) {
        if(cell.type === 'link') {
          return <div className = "cell-container" style={{width: 100/countCells + '%' }}>
            <Link to = {cell.path}>{cell.name}</Link>
          </div>
        }
      }
      
    })}
  </div>
);}
export default table;