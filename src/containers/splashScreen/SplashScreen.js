import "./SplashScreen.scss";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import {greeting, splashScreen} from "../../portfolio";

export default function SplashScreen() {
  return (
    <div className={"splash-container"}>
      <div className="splash-animation-container">
        <DisplayLottie animationData={splashScreen.animation} />
      </div>
      <div className="splash-title-container">
        <span className="splash-accents"> &lt;</span>
        <span className="splash-title">{greeting.username}</span>
        <span className="splash-accents">/&gt;</span>
      </div>
    </div>
  );
}
