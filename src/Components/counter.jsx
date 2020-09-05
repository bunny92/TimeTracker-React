import React, { useState, useEffect } from "react";

const Counter = (props) => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (props.isActive === false) {
      setSeconds(0);
    }
  }, [props.isActive]);

  useEffect(() => {
    let interval = null;
    if (props.isActive) {
      interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    } else if (!props.isActive && seconds !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [props.isActive, seconds]);

  return (
    <div
      style={{ display: "flex", justifyContent: "center", fontSize: "40px" }}
    >
      <div className="time">{seconds} `s</div>
    </div>
  );
};

export default Counter;
