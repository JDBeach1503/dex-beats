import React from 'react';
import { Button } from 'react-bootstrap'; // Import Button from React-Bootstrap
import './Boombox.css';

function ControlButton({ icon, onClick }) {
  return (
    <Button variant="secondary" className="btn-control" onClick={onClick}>
      <i className={`bi-${icon}`}></i> {/* Bootstrap icons class */}
    </Button>
  );
}

export default ControlButton;

