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
          return <div key={it} className="cell">{header}</div>
        }
        return (
          <div key={it} className="btn-group" style={{width: 100 / cellCount + '%' }}>
          <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            {header.name}
          </button>
          <div className="dropdown-menu">
            {
              header.items.map(e => {
                return <a key={e} className="dropdown-item" onClick = {() => header.click(e) } >{e}</a>
              })
            }
          </div>
         </div>
        );
      })}
      
    </div>
  
  );}
  export default  tableHeader;


  