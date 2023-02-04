import "./JerseyNumber.css";

function JerseyNumber(props) {
  return (
    <div className="Jerseynumber">
      <h1 className="yellow">{props.number}</h1>
    </div>
  );
}
export default JerseyNumber;
