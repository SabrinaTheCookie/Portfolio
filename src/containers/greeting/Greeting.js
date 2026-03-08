import {Fade} from "react-awesome-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import "../Main.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import {greeting} from "../../portfolio";

export default function Greeting() {
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className={"greeting-text"}>
                {" "}
                {greeting.title}{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p
                className={"greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <div id="resume" className="empty-div"></div>
              <SocialMedia />
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                {greeting.resumeLink && (
                  <a
                    href={require("./resume_sabrinacooke.pdf")}
                    download="resume_sabrinacooke.pdf"
                    className="download-link-button"
                  >
                    <Button text="My resume" />
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
              <img src={require("../../assets/images/bree_Headshot.jpg")} alt="portrait"/>
          </div>
        </div>
      </div>
    </Fade>
  );
}
