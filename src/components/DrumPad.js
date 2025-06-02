import React, { useEffect, useState, useRef } from 'react';


const DrumPad = ({ keyTrigger, clipId, clipName, url, updateDisplay, volume}) => {
  const [isActive, setIsActive] = useState(false);
   const audioRef = useRef(null);

   // Update the audio volume whenever volume prop changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  // Function to play the sound and update the display.
  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0; // Restart the sound
      audioRef.current.play();          // Play the sound
    }
    updateDisplay(clipName);             // Update display with clip name
    setIsActive(true);                   // Apply active class for visual feedback
    setTimeout(() => setIsActive(false), 150);
  };

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
      className={`drum-pad ${isActive ? "active" : ""}`} 
      id={clipId} 
      onClick={playSound}
    >
      <div className="pad-key">{keyTrigger}</div>
      <div className="clip-name">{clipName}</div>
      <audio
        ref={audioRef}
        className="clip"
        src={url}
        id={keyTrigger}
      />
    </div>
  );
};

export default DrumPad;