import Button from "./button/Button";
import Header from "./header/Header";
import { useEffect, useState } from "react";
import Rules from "./rules/Rules";
import Title from "./title/Title";
import Lifes from "./lifes/Lifes";
import Score from "./score/Score";
import Game from "./game/Game";

const interObj = [
  {
    number: 1,
    names: [
      "toldo",
      "julio cesar",
      "peruzzi",
      "frey",
      "pagliuca",
      "abate",
      "malgioglio",
      "zenga",
      "bordon",
      "recchi",
      "vieri",
      "sarti",
      "buffon",
      "bugatti",
      "matteucci",
      "ghezzi",
      "puccioni",
    ],
  },
  {
    number: 2,
    names: [
      "hakimi",
      "godin",
      "vrsaljko",
      "lopez",
      "andreolli",
      "jonathan",
      "cordoba",
      "panucci",
      "paganin",
      "baresi",
      "ferri",
      "bergomi",
      "canuti",
      "gasparini",
      "guida",
      "oriali",
      "bini",
      "guida",
      "catellani",
      "fedele",
      "bini",
      "oriali",
      "giubertoni",
      "bellugi",
      "burgnich",
      "picchi",
      "facchetti",
      "masiero",
      "caloi",
      "guarneri",
      "fongaro",
      "blason",
      "giacomazzi",
    ],
  },
  {
    number: 3,
    names: [
      "burdisso",
      "kallon",
      "macellari",
      "colonnese",
      "tarantino",
      "pistone",
      "seno",
      "centofanti",
      "festa",
      "conte",
      "fontolan",
      "orlando",
      "shalimov",
      "paganin",
      "tramezzani",
      "de agostini",
      "brehme",
      "calcaterra",
      "marangon",
      "mandorlini",
      "baresi",
      "bergomi",
      "marini",
      "fedele",
      "canuti",
      "bini",
      "giubertoni",
      "scala",
      "fedele",
      "guida",
      "catellani",
      "oriali",
      "masiero",
      "fongaro",
      "valade",
      "vincenzi",
      "giacomazzi",
      "giovannini",
      "padulazzi",
    ],
  },
  {
    number: 4,
    names: [
      "zanetti",
      "fresi",
      "seno",
      "orlando",
      "jonk",
      "manicone",
      "shalimov",
      "paganin",
      "bianchi",
      "paganin",
      "berti",
      "ferri",
      "battistini",
      "stringa",
      "berti",
      "verdelli",
      "matteoli",
      "brehme",
      "baresi",
      "bagni",
      "pasinato",
      "ferri",
      "oriali",
      "pasinato",
      "pasinato",
      "fedele",
      "marini",
      "galbiati",
      "scala",
      "catellani",
      "bertini",
      "fedele",
      "bellugi",
      "bedin",
      "tagnin",
      "bolchi",
      "zaglio",
      "balleri",
      "invernizzi",
      "masiero",
      "vincenzi",
      "fattori",
      "neri",
    ],
  },
  {
    number: 5,
    names: [
      "gagliardini",
      "felipe melo",
      "juan jesus",
      "stankovic",
      "emre",
      "padalino",
      "blanc",
      "cauet",
      "galante",
      "fresi",
      "festa",
      "dell'anno",
      "baggio",
      "paganin",
      "bergomi",
      "ferri",
      "mandorlini",
      "marini",
      "collovati",
      // "bachlechner",
      // "mozzini",
      // "canuti",
      // "guida",
      // "gasparini",
      // "facchetti",
      // "catellani",
      // "bini",
      // "bellugi",
      // "giubertoni",
      // "landini",
      // "guarneri",
      // "bicchierai",
      // "cardarelli",
    ],
  },
  {
    number: 6,
    names: [
      "de vrij",
      "joao mario",
      "dodo",
      "andreolli",
      "silvestre",
      "lucio",
      "maxwell",
      "zanetti",
      "serena",
      "sousa",
      "djorkaeff",
      "roberto carlos",
      "bia",
      "bergomi",
      "battistini",
      "montanari",
      "paganin",
      "battistini",
      "verdelli",
      "ciocci",
      "mandorlini",
      "passarella",
      "cucchi",
      "mandorlini",
      "ferri",
      "baresi",
      // "bachlechner",
      // "bini",
      // "anastasi",
      // "galbiati",
      // "giubertoni",
      // "bini",
      // "facchetti",
      // "burgnich",
      // "cella",
      // "picchi",
      // "balleri",
      // "dellagiovanna",
      // "venturi",
      // "vincenzi",
      // "nesti",
      // "invernizzi",
      // "neri",
      // "padulazzi",
      // "miglioli",
    ],
  },
  {
    number: 7,
    names: [
      "sanchez",
      "karamoh",
      "cancelo",
      "kondogbia",
      "osvaldo",
      "belfodil",
      "schelotto",
      "coutinho",
      "pazzini",
      "quaresma",
      "figo",
      "van der meyde",
      "conceicao",
      "pacheco",
      "keane",
      "moriero",
      "fresi",
      "zanetti",
      "orlandini",
      "berti",
      "paganin",
      "dell'anno",
      "orlando",
      "bianchi",
      "desideri",
      "stringara",
      "morello",
      "cucchi",
      "bianchi",
      "matteoli",
      "fanna",
      "cucchi",
      "causio",
      "sabato",
      "coeck",
      "marini",
      "bagni",
      "oriali",
      "caso",
      // "marini",
      // "anastasi",
      // "galbiati",
      // "pavone",
      // "rossi",
      // "muraro",
      // "mariani",
      // "massa",
      // "magistrelli",
      // "moro",
    ],
  },
  {
    number: 8,
    names: [
      "gosens",
      "vecino",
      "rafinha",
      "jovetic",
      "palacio",
      "thiago motta",
      "ibrahimovic",
      "pizarro",
      "davids",
      "lamouchi",
      "farinos",
      "jugovic",
      "winter",
      "ince",
      "berti",
      "seno",
      "shalimov",
      "jonk",
      "dell'anno",
      "manicone",
      "berti",
      "battistini",
      "pizzi",
      "matteoli",
      "scifo",
      "tardelli",
      "sabato",
    ],
  },
  {
    number: 9,
    names: [
      "dzeko",
      "lukaku",
      "icardi",
      "eto'o",
      "forlan",
      "cruz",
      "crespo",
      "ronaldo",
      "zamorano",
      "centofanti",
      "ganz",
      "delvecchio",
      "pancev",
      "berti",
      "shalimov",
      "dell'anno",
      "schillaci",
      "fontolan",
      "sosa",
      "ciocci",
      "klinsmann",
      "diaz",
      "fanna",
      "altobelli",
      "mazzola",
      "boninsegna",
    ],
  },
  {
    number: 10,
    names: [
      "lautaro martinez",
      "joao mario",
      "jovetic",
      "kovacic",
      "sneijder",
      "adriano",
      "dalmat",
      "morfeo",
      "seedorf",
      "baggio",
      "ronaldo",
      "carbone",
      "berti",
      "bergkamp",
      "shalimov",
      "stringara",
      "cucchi",
      "matthaus",
      "mandorlini",
      "scifo",
      "matteoli",
      "sosa",
      "ciocci",
      "klinsmann",
      "diaz",
      "fanna",
      "altobelli",
      "mazzola",
      "boninsegna",
    ],
  },
];

let interArray = [];
interObj.forEach((obj) => {
  obj.names.forEach(() => {
    interArray.push(obj.number);
  });
});

function App() {
  const duration = 10;
  const [startGame, setStartGame] = useState(false);
  // const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [jerseyNum, setJerseyNum] = useState(1);
  const [lifes, setLifes] = useState([true, true, true]);
  const [score, setScore] = useState(0);
  const [isTimeUp, setIsTimeUp] = useState(false);
  const startGamefunc = () => {
    setStartGame(true);
  };
  const timeisUp = () => {
    setIsTimeUp(true);
  };
  useEffect(() => {
    if (isTimeUp) {
      console.log("final score:", score);
    }
  }, [isTimeUp]);
  function nextJerseyNumber() {
    const actualNumber = jerseyNum;
    const nextNumber = randomShirtNumber();
    if (actualNumber != nextNumber) {
      setJerseyNum(nextNumber);
    } else {
      nextJerseyNumber();
    }
  }
  function passToNextNumber() {
    if (lifes.length > 0) {
      setLifes(lifes.slice(1));
      setScore(score - 50);
      nextJerseyNumber();
    } else {
      setIsTimeUp(true);
    }
  }
  function checkInPlayerWoreThisJersey(playerName) {
    if (!isTimeUp) {
      let player = playerName.toLowerCase();
      // change all accented characters to non-accented characters
      player = player.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
      let playerWoreJersey = false;
      const isNumberEgual = (element) => element.number == jerseyNum;

      const indexFound = interObj.findIndex(isNumberEgual);
      if (indexFound != -1) {
        const indexPlayer = interObj[indexFound].names.findIndex(
          (element) => element == player
        );
        if (indexPlayer != -1) {
          playerWoreJersey = true;
          interObj[indexFound].names.splice(indexPlayer, 1);
          console.log(interObj);
          setScore(score + 100);
          nextJerseyNumber();
          console.warn("player found");
        } else {
          console.error("player not found");
          setLifes(lifes.slice(0, -1));
          setScore(score - 50);
        }
      }
      return playerWoreJersey;
    } else {
      console.error("time is up");
    }
  }
  function getRandomNumber() {
    let random = interArray[Math.floor(Math.random() * interArray.length)];
    return random;
  }
  const randomShirtNumber = () => {
    //get an random index
    let random = Math.floor(Math.random() * interObj.length);
    //use this index to get a random number of jersey
    let randomInArray = interObj[random].number;
    return randomInArray;
  };
  useEffect(() => {
    setJerseyNum(randomShirtNumber());
  }, [startGame]);

  return (
    <div className="App">
      <Header
        startGame={startGame}
        jerseyNum={jerseyNum}
        title="Inter trivia game"
        bg={getRandomNumber()}
        setistimeup={timeisUp}
        duration={duration}
      />
      {startGame == false ? (
        <div className="container">
          <Rules title={"Rules"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ipsum
            deserunt obcaecati voluptatibus repellendus, dolorum sequi officia,
            aliquam iure, perspiciatis quas odit reiciendis recusandae facere
            dolorem aperiam vitae! Rem, vel!
          </Rules>
          <Button onclick={startGamefunc}>Start</Button>
          <Button>leaderboard</Button>
        </div>
      ) : (
        <>
          <div className="headerTitle">
            <Title>
              Guess a player who wore this <span className="yellow">#</span>
            </Title>
            <div className="life-score">
              <Lifes lifes={lifes}></Lifes>
              <Score score={score} onclick={() => setScore(score + 10)}></Score>
            </div>
          </div>
          <div className="gameZone container">
            <Game
              checkPlayer={checkInPlayerWoreThisJersey}
              nextJerseyFunction={passToNextNumber}
            ></Game>
          </div>
        </>
      )}
    </div>
  );
}
export default App;
