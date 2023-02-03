import Button from "./button/Button";
import Header from "./header/Header";
import { useState } from "react";

const interObj = [
  {
    number: 1,
    names: ["toldo", "julio cesar", "peruzzi", "frey", "pagliuca"],
  },
  {
    number: 9,
    names: ["icardi", "lukaku", "eto'o"],
  },
];
console.log(interObj);

function App() {
  const duration = 10;
  const [startGame, setStartGame] = useState(false);
  const startGamefunc = () => {
    setStartGame(true);
    console.log(startGame);
  };
  //TODO
  function getRandomNumber(max) {
    return Math.floor(Math.random() * max + 1);
  }

  const randomShirtNumber = () => {
    //get an random index
    let random = Math.floor(Math.random() * interObj.length);
    //use this index to get a random number of jersey
    let randomInArray = interObj[random].number;
    return randomInArray;
  };
  return (
    <div className="App">
      <Header
        startGame={startGame}
        title="Inter trivia game"
        bg={getRandomNumber(5)}
        duration={duration}
      />
      <div className="container">
        {startGame == false ? (
          <Button startGamefunc={startGamefunc}>Start</Button>
        ) : (
          ""
        )}
        <p onClick={randomShirtNumber}>Click me</p>
      </div>
    </div>
  );
}
export default App;
