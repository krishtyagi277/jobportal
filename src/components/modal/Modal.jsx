import React from "react";
import "./modal.css"

function Modal({ handleClose, show, children }){
  const showHideClassName = show ? "modal d-block" : "modal d-none";

  return (
    <div className={showHideClassName}>
      <div className="modal-container">
        {children}
        {/* <button className="modal-close" onClick={handleClose}>
          close
        </button> */}
      </div>
    </div>
  );
};

export default Modal;
