import { useState, useEffect } from "react";
import "./Timer.css";

function Timer(props) {
  document.documentElement.style.setProperty(
    "--props.duration",
    props.duration + "s"
  );
  const [durationTime, setDurationTime] = useState(props.duration + 1);
  useEffect(() => {
    setDurationTime(durationTime - 1);
  }, []);

  useEffect(() => {
    if (!durationTime || durationTime <= 0) {
      props.istimeisup();
      return;
    }
    const intervalId = setInterval(() => {
      setDurationTime(durationTime - 1);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [durationTime]);

  return (
    <div className="timer">
      <div className="clock">
        <div className="clock-face"></div>
        <div className="clock-static"></div>
      </div>
      <h2 className="timeLeft">{durationTime}</h2>
    </div>
  );
}
export default Timer;
