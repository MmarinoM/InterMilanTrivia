import { useState, useEffect } from "react";

function Timer({ duration }) {
  console.log("render timer");
  const [durationTime, setDurationTime] = useState(duration + 1);
  useEffect(() => {
    setDurationTime(durationTime - 1);
  }, []);

  useEffect(() => {
    console.log(durationTime);
    if (!durationTime || durationTime <= 0) return;
    const intervalId = setInterval(() => {
      setDurationTime(durationTime - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [durationTime]);

  return (
    <div className="timer">
      <h1 className="yellow">Timer</h1>
      <h2 className="timeLeft">{durationTime}</h2>
    </div>
  );
}
export default Timer;
