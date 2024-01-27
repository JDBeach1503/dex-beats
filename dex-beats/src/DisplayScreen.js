import React from 'react';
import './Boombox.css';

function DisplayScreen({ songName, artist }) {
  // We will use CSS animations instead of the <marquee> tag for better control and responsiveness
  return (
    <div className="display-screen">
      <div className="scrolling-text">{songName} - {artist}</div>
    </div>
  );
}
export default DisplayScreen;
