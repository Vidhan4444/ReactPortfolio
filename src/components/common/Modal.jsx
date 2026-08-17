import { useEffect } from "react";
import "./Modal.css";

const Modal = ({ isOpen, onClose, title, children, maxWidth = "640px" }) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="custom-modal-backdrop" onClick={onClose}>
      <div
        className="custom-modal-box glass-card"
        style={{ maxWidth }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="custom-modal-header">
          {title ? <h2 className="custom-modal-title">{title}</h2> : <div />}
          <button
            className="custom-modal-close"
            onClick={onClose}
            aria-label="Close modal"
          >
            ✕
          </button>
        </div>

        <div className="custom-modal-body">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
