import { faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef } from "react";

const Modal = ({ children, showModal, onClose, title }) => {
  const modalRef = useRef();

  const handleKeyPress = (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  };

  // const openModal = () => {
  //   modalRef.current.style.display = "flex";
  // };

  const closeModal = () => {
    modalRef.current.style.display = "none";
    onClose();
  };

  useEffect(() => {
    if (showModal) {
      modalRef.current.style.display = "flex";
      modalRef.current.focus();
    } else {
      modalRef.current.style.display = "none";
    }
  }, [showModal]);

  return (
    <div>
      <div
        ref={modalRef}
        id="popup"
        className="popup"
        style={{ display: "flex" }}
        tabIndex={0}
        onClick={(e) => {
          e.stopPropagation();
          closeModal();
        }}
        onKeyDown={handleKeyPress}
      >
        <div className="popup__contenido" onClick={(e) => e.stopPropagation()}>
          <div className="text__align--right">
            <button onClick={closeModal}>
              <FontAwesomeIcon icon={faClose} />
            </button>
          </div>
          <div className="titulo__card">{title}</div>
          <div className="form__content--row jc__c mt__20 mb__10 d__flex f__column">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
