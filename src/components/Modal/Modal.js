import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import "./Modal.scss";

export default function Modal({ show, onClose, content }) {

    useEffect(() => {
        if (!show) return;

        // Disable page scrolling
        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        // Allow ESC to close modal
        function handleKey(e) {
            if (e.key === "Escape") {
                onClose();
            }
        }

        window.addEventListener("keydown", handleKey);

        return () => {
            document.body.style.overflow = originalOverflow;
            window.removeEventListener("keydown", handleKey);
        };
    }, [show, onClose]);

    if (!show || !content) return null;

    // Decide what to render
    let renderContent = null;

    if (content.type === "image") {
        renderContent = (
            <img
                src={content.src}
                alt={content.alt || content.title || "Modal Image"}
                className="modal-image"
            />
        );
    }
    else if (content.type === "iframe") {
        const is16By9 = content.src?.includes("youtube") || content.src?.includes("google");
        renderContent = (
            <iframe
                className={is16By9 ? "is169" : ""}
                src={content.src}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                title={content.title || "Modal Content"}
            />
        );
    }

    return createPortal(
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-frame" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close-button" onClick={onClose}>
                    ✕
                </button>

                <div className="modal-content">
                    {renderContent}
                </div>
            </div>
        </div>,
        document.body
    );
}
