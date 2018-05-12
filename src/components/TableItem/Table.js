import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import './Table.css';

const table = (props) => {
  const countCells = Object.keys(props.item).length;
  return (
    <div className="TableItem">
      <div className="cell cell-number">{props.id}</div>
      {Object.keys(props.item).map((c) => {
      let cell = props.item[c];
      if (c === 'lastSync') {
        cell = moment(+cell).format('MMMM Do YYYY, HH:mm:ss');
      }
      if (typeof cell !== 'object') {
        return <div key={cell} className="cell" style={{ width: `${100 / countCells}%` }}>{cell || ''}</div>;
      } else if (cell) {
        if (cell.type === 'link') {
          return (
            <div
              key={cell.path}
              className="cell-container"
              style={{ width: `${100 / countCells}%` }}
            >
              <Link to={cell.path}>{cell.name}</Link>
            </div>);
        }
      }
    })}
    </div>
  );
};
export default table;
