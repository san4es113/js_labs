import React from 'react';
import './Spinner.css';

const spinner = (props) => {
  if (!props.show) return null;
  return (
    <div className="spinner-wrap">
      <div className="Spinner">
        <img src="https://cdn1.iconfinder.com/data/icons/pixel-perfect-at-16px-volume-1/16/1026-512.png" alt="" />
        <div className="double-bounce1" />
        <div className="double-bounce2" />
        <p>Loading...</p>
      </div>
    </div>
  );
};
export default spinner;
