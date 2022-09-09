import React from 'react';
import './BuildBoard.css';
import BuildColumn from './BuildColumn';

function BuildBoard() {

    const board : JSX.Element[] = [];
    for(let r = 0; r < 8; r++){
        if(r%2 === 0 ){
            board.push(<BuildColumn props={"ColumnShift"} key={r}/>)
        }
        else{
            board.push(<BuildColumn props={"Column"} key={r}/>)
        }
    }
    

  return (
      <div className="BoardParent">
        {board}
      </div>
  );
}

export default BuildBoard;
