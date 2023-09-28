import React from "react";
import "../../../styles/pages/prompt-component.scss";
import Modal from "../Modal";

const PromptComponent = ({ state, setState, text, buttonLabel }) => {
  return (
    <div>
      <div
        className={`${state ? "open-modal-wrapper" : "close-modal-wrapper"}`}
      >
        <Modal>
          <div className="draft-modal">
            <p className="modaltext">
              {text}
              {/* You are about to delete this transaction. */}
            </p>
            <div className="draft-deltet-Botton">
              <button
                className="btn-1"
                onClick={() => {
                  setState(0);
                }}
              >
                Cancel
              </button>
              <button className="btn-2">{buttonLabel}</button>
            </div>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default PromptComponent;
