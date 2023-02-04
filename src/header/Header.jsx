import background from "../img/bg-1.jpg";
import logo from "../img/inter-logo.svg";
import JerseyNumber from "../jerseyNumber/JerseyNumber";
import Timer from "../Timer";
import "./Header.css";
function Header(props) {
  const setTimeIsup = () => {
    props.setistimeup();
  };
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
          <Timer istimeisup={setTimeIsup} duration={props.duration}></Timer>
        )}
      </div>
      {props.startGame == true ? (
        <JerseyNumber number={props.jerseyNum}></JerseyNumber>
      ) : null}
    </div>
  );
}
export default Header;
