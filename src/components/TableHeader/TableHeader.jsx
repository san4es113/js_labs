import React from 'react';
import './TableHeader.css';

const tableHeader=(props)=>{
  const cellCount = Object.keys(props.item).length;
  Object.keys(props.item)
  return (
    <div className="TableHeader">
      {Object.keys(props.item || {}).map(it=>{
        const header = props.item[it];
        if(typeof header !== 'object') {
          return <div className="cell">{header}</div>
        }
        return (
          <div className="btn-group" style={{width: 100 / cellCount + '%' }}>
          <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {header.name}
          </button>
          <div className="dropdown-menu">
            {
              header.items.map(it => {
                return <a className="dropdown-item" onClick = {() => header.click(it) } >{it}</a>
              })
            }
          </div>
         </div>
        );
      })}
      
    </div>
  
  );}
  export default  tableHeader;


  