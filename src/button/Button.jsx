import "./Button.css";

function Button(props) {
  console.log("button render");
  return <button onClick={props.startGamefunc}>{props.children}</button>;
}
export default Button;
