import React, { useState } from "react";
import Modal from "../Modal/Modal";
import "./Card.scss";

/**
 * Generic Card component used by every section (Projects, Achievements, Talks, etc.)
 *
 * cardInfo shape:
 * {
 *   title:    string  (required)
 *   subtitle: string  (optional)
 *
 *   // Media — iframe takes priority if both are set; show nothing if both are empty
 *   frame:    { src: string, title?: string }  (optional — renders an iframe)
 *   image:    string   (optional — rendered if no frame)
 *   imageAlt: string   (optional)
 *   footer: [         (optional)
 *     // Modal tag (small pill, click to open modal)
 *     { name: string, content: { type, src, title } }
 *
 *     // Modal button (wider pill, click to open modal)
 *     { name: string, content: { type, src, title }, button: true }
 *
 *     // External link (opens in new tab)
 *     { name: string, url: string }
 *
 *     // External link rendered as button
 *     { name: string, url: string, button: true }
 *   ]
 * }
 */
export default function Card({ cardInfo }) {
    const [modalContent, setModalContent] = useState(null);

    function openModal(content) {
        setModalContent(content);
    }

    function closeModal() {
        setModalContent(null);
    }

    return (
        <>
            <div className="card">
                <h5 className="card-title">{cardInfo.title}</h5>
                {/* ── Media: iframe takes priority over image ────────────────────── */}
                {(cardInfo.frame || cardInfo.image) && (
                    <div className="card-image-div">
                        {cardInfo.frame ? (
                            <div
                                className="card-frame-wrapper"
                                style={{paddingTop: cardInfo.frame.aspectRatio ?? "56.25%"}}
                            >
                                <iframe
                                    src={cardInfo.frame.src}
                                    title={cardInfo.frame.title || cardInfo.title}
                                    className="card-frame"
                                    allowFullScreen
                                />
                            </div>
                        ) : (
                            <img
                                src={cardInfo.image}
                                alt={cardInfo.imageAlt || cardInfo.title}
                                className={`card-image${cardInfo.featureSize ? " card-image--feature" : ""}`}
                            />
                        )}
                    </div>
                )}
                {/* ── Body ──────────────────────────────────────────────────────── */}
                <div className="card-detail">

                    {cardInfo.subtitle && (
                        <p className="card-subtitle">{cardInfo.subtitle}</p>
                    )}
                </div>


                {/* ── Footer ────────────────────────────────────────────────────── */}
                {cardInfo.footer && cardInfo.footer.length > 0 && (
                    <div className="card-footer">
                        {cardInfo.footer.map((item, idx) => {
                            const className = item.button ? "card-button" : "card-tag";

                            // External link
                            if (item.url) {
                                return (
                                    <a
                                        key={idx}
                                        href={item.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        className={className}
                                    >
                                        {item.name}
                                    </a>
                                );
                            }

                            // Modal trigger (tag or button)
                            if (item.content) {
                                return (
                                    <span
                                        key={idx}
                                        className={className}
                                        onClick={() => openModal(item.content)}
                                    >
                    {item.name}
                  </span>
                                );
                            }

                            return null;
                        })}
                    </div>
                )}
            </div>

            <Modal show={!!modalContent} onClose={closeModal} content={modalContent} />
        </>
    );
}