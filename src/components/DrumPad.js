import React, { useEffect } from 'react';


const DrumPad = ({ keyTrigger, clipId, url, updateDisplay, volume}) => {
  //function to play the sound and update the display.
  const playSound = () => {
    const audio = new Audio(url); // Create a new Audio object
    audio.volume = volume;        // Apply volume control
    audio.currentTime = 0;        // Start from the beginning
    audio.play();                 // Play sound immediately
    updateDisplay(clipId);        // Update the UI
  }

  // Listen for keyboard events to trigger the correct pad
  const handleKeyDown = (event) => {
    if (event.repeat) return; // Ignore repeated key presses
    if (event.key.toUpperCase() === keyTrigger) {
      playSound();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    // Cleanup after unmount
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

   return (
    <div 
      className="drum-pad" 
      id={clipId} 
      onClick={playSound}
    >
      {keyTrigger}
    </div>
  );
};

export default DrumPad;