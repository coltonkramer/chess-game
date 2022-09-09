import React, { useState } from 'react';
import './GridSquare.css';




function GridSquare() {
    const [isActive, setIsActive] = useState(false);

    let squareIsActive = () => {
        setIsActive(true)
    }

  return (
      <div className="Square" onClick={squareIsActive} style={{borderColor: isActive ? 'yellow' : ''}}></div>
  );
}

export default GridSquare;
