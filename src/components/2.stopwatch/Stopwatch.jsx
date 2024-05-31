import React, { useEffect, useState } from "react";
import "./style.css";

const Stopwatch = () => {
  const [minute, setMinute] = useState(0);
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;

    if (isRunning) {
      interval = setInterval(() => {
        setTime((prev) => prev + 1);
      }, 100);
    }
    if (time >= 60) {
      setTime(0);
      setMinute((prev) => prev + 1);
    }
    return () => clearInterval(interval);
  }, [isRunning, time]);

  console.log(time);

  function startTime() {
    setIsRunning(true);
  }
  function stopTime() {
    setIsRunning(false);
  }
  function resetTime() {
    setTime(0);
    setMinute(0);
    setIsRunning(false);
  }

  return (
    <div className="container">
      <div className="timing">
        <span>{minute}</span>
        <span>:</span>
        <span className="">{time}</span>
      </div>
      <div>
        <button onClick={startTime}>start</button>
        <button onClick={stopTime}>stop</button>
        <button onClick={resetTime}>reset</button>
      </div>
    </div>
  );
};

export default Stopwatch;
