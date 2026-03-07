import "./Footer.scss";
import {Fade} from "react-awesome-reveal";
import emoji from "react-easy-emoji";

export default function Footer() {
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={"footer-text"}>
          {emoji("❤️ Thanks for visiting ❤️")}
        </p>
        <p className={"extra-text"}>
          {" "}
          <a
            href="https://drive.google.com/file/d/1y1eTpmEbB96B2wt9IqMhdGwhPmucsq3G/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            Woah! Is that a Kererū!?
          </a>
        </p>
      </div>
    </Fade>
  );
}
