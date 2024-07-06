import React, { useEffect, useState } from "react";
import classes from "./ProgressBar.module.css";

const ProgressBar = () => {
  const [width, setWidth] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  function handleStart() {
    setIsRunning(true);
  }
  function handleReset() {
    setWidth(0);
    setIsRunning(false);
  }

  useEffect(() => {
    let interval;
    if (isRunning && width < 100) {
      interval = setInterval(() => {
        setWidth((prev) => prev + 10);
      }, 2000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [width, isRunning]);

  return (
    <>
      <div className={classes.main}>
        <div className={classes.parent}>
          <div style={{ width: `${width}%` }} className={classes.child}></div>
        </div>
        <div>
          <h1>{width}</h1>
          <button onClick={handleStart}>start</button>
          <button onClick={handleReset}>reset</button>
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
