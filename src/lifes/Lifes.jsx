import "./Lifes.css";

function Lifes({ lifes }) {
  return (
    <div className="lifes">
      {lifes.map((life, index) => {
        return <div key={index} className={life ? "life" : "life lost"}></div>;
      })}
    </div>
  );
}
export default Lifes;
