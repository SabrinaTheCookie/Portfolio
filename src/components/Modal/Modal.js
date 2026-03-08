import React, { useEffect } from "react";
import "./Modal.scss";

export default function Modal({ show, onClose, content }) {
    useEffect(() => {
        if (!show) return;

        // Disable scrolling while modal is open
        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = originalOverflow;
        };
    }, [show]);

    if (!show || !content) return null;

    // Decide what to render based on content.type
    let renderContent = null;

    if (content.type === "image") {
        renderContent = (
            <img
                src={content.src}
                alt={content.alt || content.title || "Modal Image"}
                className="modal-image"
            />
        );
    } else if (content.type === "iframe") {
        renderContent = (
            <iframe
                src={content.src}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                width="100%"
                height="100%"
                allowFullScreen
                title={content.title || "Modal Content"}
            />
        );
    }

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                {renderContent}
                <button className="modal-close-button" onClick={onClose}>
                    ✕
                </button>
            </div>
        </div>
    );
}
