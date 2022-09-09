import React from 'react';
import './BuildColumn.css';
import GridSquare from './GridSquare';

function BuildColumn(props: any) : JSX.Element {

    const column : any[] = [];
    for(let c = 0; c < 8; c++){
      column.push(<GridSquare/>)
    }

    console.log({props})
    
  return (
      <div className={props.props}>
        {column}
      </div>
  );
}

export default BuildColumn;
