import { useState } from 'react';
import DrumPad from './DrumPad';
import './DrumMachine.css';

const audioClips = [
  {
    keyTrigger: "Q",
    clipId: "Heater-1",
    clipName: "Heater 1",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-1.mp3"
  },
  {
    keyTrigger: "W",
    clipId: "Heater-2",
    clipName: "Heater 2",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-2.mp3"
  },
  {
    keyTrigger: "E",
    clipId: "Heater-3",
    clipName: "Heater 3",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-3.mp3"
  },
  {
    keyTrigger: "A",
    clipId: "Heater-4",
    clipName: "Heater 4",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-4_1.mp3"
  },
  {
    keyTrigger: "S",
    clipId: "Clap",
    clipName: "Clap",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Heater-6.mp3"
  },
  {
    keyTrigger: "D",
    clipId: "Open-HH",
    clipName: "Open-HH",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Dsc_Oh.mp3"
  },
  {
    keyTrigger: "Z",
    clipId: "Kick-n'-Hat",
    clipName: "Kick-n'-Hat",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Kick_n_Hat.mp3"
  },
  {
    keyTrigger: "X",
    clipId: "Kick",
    clipName: "Kick",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/RP4_KICK_1.mp3"
  },
  {
    keyTrigger: "C",
    clipId: "Closed-HH",
    clipName: "Closed-HH",
    url: "https://cdn.freecodecamp.org/testable-projects-fcc/audio/Cev_H2.mp3"
  }
];

const DrumMachine = () => {
  const [display, setDisplay] = useState("");
  const [volume, setVolume] = useState(0.5); // Default volume set to 50%
  const [isPowerOn, setIsPowerOn] = useState(true); // Power state of the drum machine

  // Called whenever a drum pad is triggered: update the display.
  const updateDisplay = (clipName) => {
    setDisplay(clipName);
  };
  
  return (
    <div id="drum-machine">
      <div id="display">{display}</div>
      <div className="drum-pads-container">
        {audioClips.map((clip) => (
          <DrumPad
            key={clip.clipId}
            keyTrigger={clip.keyTrigger}
            clipId={clip.clipId}
            clipName={clip.clipName}
            url={clip.url}
            updateDisplay={updateDisplay}
          />
        ))}
      </div>
    </div>
  );
};

export default DrumMachine;