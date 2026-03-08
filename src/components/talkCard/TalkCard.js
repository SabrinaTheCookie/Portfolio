import React, { useState } from "react";
import Modal from "../Modal/Modal"; // reusable modal
import "./TalkCard.scss";

export default function TalkCard({ talkDetails }) {
    const [modalContent, setModalContent] = useState(null);

    function openModal(content) {
        setModalContent(content);
    }

    function closeModal() {
        setModalContent(null);
    }

    return (
        <div className="container">
            <div className="rectangle">
                <div className="talk-card-title">{talkDetails.title}</div>
                <p className="talk-card-subtitle">{talkDetails.subtitle}</p>

                <div className="card-footer-button-div">
                    {talkDetails.content && (
                        <button
                            className="talk-button"
                            onClick={() => openModal(talkDetails.content)}
                        >
                            View Slides
                        </button>
                    )}
                    {talkDetails.event_url && (
                        <a
                            href={talkDetails.event_url}
                            target="_blank"
                            className="talk-button"
                        >
                            Event
                        </a>
                    )}
                </div>

                {/* Modal for slides */}
                <Modal show={!!modalContent} onClose={closeModal} content={modalContent} />
            </div>
        </div>
    );
}
