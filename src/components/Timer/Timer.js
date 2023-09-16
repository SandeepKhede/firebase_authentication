import React, { useState, useEffect } from "react";
import "./Timer.css";

function Timer() {
  const [seconds, setSeconds] = useState(1500); // 25 minutes in seconds
  const [isActive, setIsActive] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  useEffect(() => {
    let interval;

    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    } else if (seconds === 0 && !isBreak) {
      setIsBreak(true);
      setSeconds(300); // 5 minutes break in seconds
    } else if (seconds === 0 && isBreak) {
      setIsBreak(false);
      setSeconds(1500);
    }

    return () => clearInterval(interval);
  }, [isActive, seconds, isBreak]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handlePause = () => {
    setIsActive(false);
  };

  const handleReset = () => {
    setIsActive(false);
    setIsBreak(false);
    setSeconds(1500);
  };

  return (
    <div className={`timer ${isBreak ? "break" : "work"}`}>
      <h1>{isBreak ? "Break" : "Work"}</h1>
      <div className="clock">{`${Math.floor(seconds / 60)}:${(seconds % 60)
        .toString()
        .padStart(2, "0")}`}</div>
      <div className="controls">
        <button onClick={handleStart}>Start</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
  );
}

export default Timer;
