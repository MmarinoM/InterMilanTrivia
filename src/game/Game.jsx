import "./Game.css";
import Button from "../button/Button";
import { useEffect, useRef } from "react";

function Game(props) {
  const playerRef = useRef("");
  //focus on the input when the page loads
  useEffect(() => {
    document.querySelector(".inputPlayer").focus();
  }, []);
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      checkAndclear();
    }
  };
  const checkAndclear = () => {
    props.checkPlayer(playerRef.current.value);
    playerRef.current.value = "";
  };

  const nextPlayerNumber = () => {
    props.nextJerseyFunction();
  };

  return (
    <div className="game">
      <input
        ref={playerRef}
        className="inputPlayer"
        type="text"
        onKeyDown={handleKeyDown}
      />
      <div className="btnList">
        <Button onclick={checkAndclear}>confirm</Button>
        <Button onclick={nextPlayerNumber}>pass</Button>
      </div>
    </div>
  );
}
export default Game;
