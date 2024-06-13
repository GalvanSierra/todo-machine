import { createPortal } from "react-dom";

const Modal = ({ children }) => {
  return createPortal(
    <div className="modal ">{children}</div>,
    document.getElementById("modal")
  );
};

export default Modal;
