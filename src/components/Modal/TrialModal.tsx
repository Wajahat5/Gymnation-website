import React, { useEffect, useState } from 'react';
import './TrialModal.css';

interface TrialModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const TrialModal: React.FC<TrialModalProps> = ({ isOpen, onClose }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [prevIsOpen, setPrevIsOpen] = useState(isOpen);

  if (isOpen !== prevIsOpen) {
    setPrevIsOpen(isOpen);
    if (isOpen) {
      setIsLoading(true);
    }
  }

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close trial modal">
          &times;
        </button>
        <div className="modal-iframe-container">
          {isLoading && (
            <div className="skeleton-loader" aria-hidden="true">
              <div className="skeleton-header"></div>
              <div className="skeleton-field"></div>
              <div className="skeleton-field"></div>
              <div className="skeleton-field"></div>
              <div className="skeleton-field"></div>
              <div className="skeleton-button"></div>
            </div>
          )}
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLScivM4d2LU38LpsI9GwCRbhMPfRrsaqVMg77bW4mbtL4FwQKQ/viewform?usp=header"
            title="Claim Trial Google Form"
            width="100%"
            height="100%"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            onLoad={() => setIsLoading(false)}
            style={{ display: isLoading ? 'none' : 'block' }}
          >
            Loading…
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default TrialModal;
