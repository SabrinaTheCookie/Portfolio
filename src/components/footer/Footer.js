import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("Thanks for visiting ❤️")}
        </p>
        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          Here's a{" "}
          <a
            href="https://drive.google.com/file/d/1y1eTpmEbB96B2wt9IqMhdGwhPmucsq3G/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
          Kererū
          </a>
        </p>
      </div>
    </Fade>
  );
}
