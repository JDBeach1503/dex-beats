import React from 'react';
import Speaker from './Speaker';
import DisplayScreen from './DisplayScreen';
import Dial from './Dial';
import ControlButton from './ControlButton';
import Indicator from './Indicator';
import './Boombox.css';

function BoomboxContainer() {
  // State and audio control logic to be added here

  return (
    <div className="boombox-container">
      <div className="speakers-container">
        <Speaker />
        <Speaker />
      </div>
      <DisplayScreen songName="Song Name" artist="Artist Name" />
      {/* Additional buttons and interactivity will be added here */}
    </div>
  );
}
export default BoomboxContainer;
