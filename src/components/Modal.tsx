import { ReactNode } from "react";
import { createPortal } from "react-dom";

type Props = { children: ReactNode };

const Modal = ({ children }: Props) => {
  return createPortal(
    <div className="modal ">{children}</div>,
    document.getElementById("modal") as Element
  );
};

export default Modal;
