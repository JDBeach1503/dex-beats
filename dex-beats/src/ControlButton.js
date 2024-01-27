import React from 'react';
import './Boombox.css';

function ControlButton({ icon, onClick }) {
  return (
    <button className={`btn btn-control ${icon}`} onClick={onClick}>
      {/* Icon will be a Bootstrap icon class */}
      <i className={`bi-${icon}`}></i>
    </button>
  );
}
export default ControlButton;
