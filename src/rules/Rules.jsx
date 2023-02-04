import "./Rules.css";

function Rules(props) {
  console.log("button render");
  return (
    <div className="rules">
      <h2>{props.title}</h2>
      <p>{props.children}</p>
    </div>
  );
}
export default Rules;
