import "./Score.css";

function Score({ score, onclick }) {
  // if score is less than 10, add a 000 in front of it, if it's less than 100, add a 00, if it's less than 1000, add a 0
  if (score < 0) {
    score = score * 1;
  } else if (score < 10) {
    score = "000" + score;
  } else if (score < 100) {
    score = "00" + score;
  } else if (score < 1000) {
    score = "0" + score;
  }

  return (
    <span onClick={onclick} className="score">
      {score}
    </span>
  );
}
export default Score;
