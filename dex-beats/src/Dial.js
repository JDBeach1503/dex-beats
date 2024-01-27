import React, { useState, useEffect } from 'react';
import './Boombox.css';

function Dial({ volume, onVolumeChange }) {
  // We'll use local state to track the dial's rotation angle
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    // Convert volume (0-100) to angle (0-270 degrees)
    const angle = (volume / 100) * 270;
    setRotation(angle);
  }, [volume]);

  const handleMouseDown = (e) => {
    // Logic to handle mouse drag to rotate the dial will be added here
  };

  return (
    <div className="dial-container">
      <div className="dial" style={{ transform: `rotate(${rotation}deg)` }}
           onMouseDown={handleMouseDown}></div>
    </div>
  );
}

export default Dial;

