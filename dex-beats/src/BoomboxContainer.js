import React, { useState } from 'react';
import Speaker from './Speaker';
import DisplayScreen from './DisplayScreen';
import Dial from './Dial';
import ControlButton from './ControlButton';
import Indicator from './Indicator';
import './Boombox.css';

function BoomboxContainer() {
  // Initialize state for volume and track information
  const [volume, setVolume] = useState(50); // Volume level 0-100
  const [track, setTrack] = useState({
    songName: "Initial Song Name",
    artist: "Initial Artist Name"
  });

  // Event handlers for audio control
  const handlePlay = () => {/* ... */};
  const handlePause = () => {/* ... */};
  const handleNext = () => {/* ... */};
  const handlePrevious = () => {/* ... */};
  const handleStop = () => {/* ... */};
  const handleQueue = () => {/* ... */};

  // Function to handle volume change from Dial component
  const handleVolumeChange = (newVolume) => {
    setVolume(newVolume);
    // We would also set the volume on the actual audio element
  };

  return (
    <div className="boombox-container">
      <div className="speakers-container">
        <Speaker />
        <Speaker />
      </div>
      <DisplayScreen songName={track.songName} artist={track.artist} />
      <Dial volume={volume} onVolumeChange={handleVolumeChange} />
      <div className="controls-container">
        <ControlButton icon="play-fill" onClick={handlePlay} />
        <ControlButton icon="pause-fill" onClick={handlePause} />
        <ControlButton icon="skip-backward-fill" onClick={handlePrevious} />
        <ControlButton icon="stop-fill" onClick={handleStop} />
        <ControlButton icon="skip-forward-fill" onClick={handleNext} />
        <ControlButton icon="music-note-list" onClick={handleQueue} />
      </div>
      <div className="indicators-container">
        <Indicator />
        <Indicator />
      </div>
    </div>
  );
}

export default BoomboxContainer;
