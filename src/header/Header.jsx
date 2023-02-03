import background from "../img/bg-1.jpg";
import logo from "../img/inter-logo.svg";
import Timer from "../Timer";
import "./Header.css";
function Header(props) {
  console.log("render header");
  return (
    //get children.bg and set background image to value of children.bg
    <div
      className="header"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="blocTitle">
        <img src={logo} className="interLogo" alt="inter logo" />
        {props.startGame == false ? (
          <h1 className="yellow">{props.title}</h1>
        ) : (
          <Timer duration={props.duration}></Timer>
        )}
      </div>
    </div>
  );
}
export default Header;
