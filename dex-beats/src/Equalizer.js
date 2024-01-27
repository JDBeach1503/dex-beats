import React, { useEffect, useRef } from 'react';
import './Boombox.css';

function Equalizer({ audioRef }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Equalizer logic here
  }, [audioRef]);

  return <canvas ref={canvasRef} className="equalizer" />;
}

export default Equalizer;