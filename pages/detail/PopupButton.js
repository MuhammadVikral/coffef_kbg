import { useState } from "react";
import Modal from "../../components/Modal/Modal.js";
import ReactPortal from "../../components/Modal/ReactPortal";
import { PopUpContent } from "./PopupContent";

export const PopupButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setIsOpen(true)}>Click to Open Modal</button>
      <ReactPortal wrapperId="react-portal-modal-container">
        <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
          <PopUpContent />
        </Modal>
      </ReactPortal>
    </div>
  );
};
