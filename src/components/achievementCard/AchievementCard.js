import React, { useState } from "react";
import Modal from "../Modal/Modal";
import "./AchievementCard.scss";

export default function AchievementCard({ cardInfo }) {
    const [modalContent, setModalContent] = useState(null);

    function openModal(content) {
        setModalContent(content);
    }

    function closeModal() {
        setModalContent(null);
    }

    return (
        <>
            <div className={"certificate-card"}>
                <div className="certificate-image-div">
                    <img
                        src={cardInfo.image}
                        alt={cardInfo.imageAlt || "Card Thumbnail"}
                        className="card-image"
                    />
                </div>
                <div className="certificate-detail-div">
                    <h5 className={"card-title"}>{cardInfo.title}</h5>
                    <p className={"card-subtitle"}>{cardInfo.description}</p>
                </div>
                <div className="certificate-card-footer">
                    {cardInfo.footer.map((v, i) => (
                        <span
                            key={i}
                            className={"certificate-tag"}
                            onClick={() => openModal(v.content)} // just pass the content; modal decides
                        >
              {v.name}
            </span>
                    ))}
                </div>
            </div>

            <Modal show={!!modalContent} onClose={closeModal} content={modalContent} />
        </>
    );
}
