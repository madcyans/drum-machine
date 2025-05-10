import React, { useEffect } from 'react';


const DrumPad = ({ keyTrigger, clipId, url, updateDisplay}) => {
  //function to play the sound and update the display.
  const playSound = () => {
    const audioElement = document.getElementById(keyTrigger);
    if (audioElement) {
      audioElement.currentTime = 0; // Reset the audio to the start
      audioElement.play(); // Play the sound
      updateDisplay(clipId); // Update the display with the clip id
    }
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
  });

   return (
    <div 
      className="drum-pad" 
      id={clipId} 
      onClick={playSound}
    >
      {keyTrigger}
      <audio 
        className="clip" 
        id={keyTrigger} 
        src={url} 
        preload="auto"
      ></audio>
    </div>
  );
};

export default DrumPad;