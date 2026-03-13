import {Fade} from "react-awesome-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import "../Main.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import Modal from "../../components/Modal/Modal"; // Import the reusable modal
import {greeting} from "../../portfolio";
import React, {useState} from "react";

export default function Greeting() {
  const [modalContent, setModalContent] = useState(null);

  function openModal(content) {
    setModalContent(content);
  }

  function closeModal() {
    setModalContent(null);
  }

  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <>
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
                <p className={"greeting-text-p subTitle"}>
                  {greeting.subTitle}
                </p>
                <div id="resume" className="empty-div"></div>
                <SocialMedia />
                <div className="button-greeting-div">
                  <Button text="Contact me" href="#contact" />
                  {greeting.resume && greeting.resume.content && (
                    <a
                      href="#"
                      className="download-link-button"
                      onClick={() => openModal(greeting.resume.content)}
                    >
                      <Button text="My resume" />
                    </a>
                  )}
                </div>
              </div>
            </div>
            <div className="greeting-image-div">
              <img
                src={require("../../assets/images/bree_Headshot.jpg")}
                alt="portrait"
              />
            </div>
          </div>
        </div>
      </Fade>

      <Modal
        show={!!modalContent}
        onClose={closeModal}
        content={modalContent}
      />
    </>
  );
}
