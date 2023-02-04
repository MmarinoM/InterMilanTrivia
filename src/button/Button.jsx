import "./Button.css";

function Button(props) {
  return <button onClick={props.onclick}>{props.children}</button>;
}
export default Button;
