import "./Footer.scss";
import Modal from "../Modal/Modal"; // reusable modal
import {Fade} from "react-awesome-reveal";
import emoji from "react-easy-emoji";
import {useState} from "react";

export default function Footer() {
  const [modalContent, setModalContent] = useState(null);

  function openModal(content) {
    setModalContent(content);
  }

  function closeModal() {
    setModalContent(null);
  }

  const content = {
    type: "image",
    src: require("../../assets/images/kereru.jpg"),
    title: "Kererū"
  };

  return (
    <>
      <Fade bottom duration={1000} distance="5px">
        <div className="footer-div">
          <p className={"footer-text"}>{emoji("❤️ Thanks for visiting ❤️")}</p>
          <p className={"extra-text"}>
            {" "}
            <a
              href="#"
              onClick={event => {
                event.preventDefault();
                openModal(content);
              }}
            >
              Woah! Is that a Kererū!?
            </a>
          </p>
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
