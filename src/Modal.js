import ReactModal from "react-modal";
import "./App.js";
import "./Modal.css";
import React from "react";
import Market from "./components/Market";

export default function Modal({ show, onClose, markets }) {
  return (
    <ReactModal
      isOpen={show}
      onRequestClose={onClose}
      className={"Modal"}
      overlayClassName={"Overlay"}
    >
      <div className="close-btn-ctn">
        <button className="close-btn" onClick={onClose}>
          X
        </button>
      </div>

      <Market markets={markets} />
      {/* <div className="headcontainermodal">
          <div className="modaltitle">
            <h1 className="modaltitle" style={{ flex: "1 90%" }}>
              Title
            </h1>
          </div> */}

      {/* <div className="modalcontainer">
            <div className="modal-content">
              <div className="modalimg"></div>
              <div className="modaltext"></div>
            </div>
          </div>
        </div> */}
    </ReactModal>
  );
}
