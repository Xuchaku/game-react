import React, { FC, ReactNode } from "react";
import Portal from "../../hoc/Portal";
import "./Popup.scss";

type PopupTypeProps = {
  children: ReactNode;
  onClose?: () => void;
  isOpened: boolean;
};

const Popup: FC<PopupTypeProps> = ({ children, onClose, isOpened }) => {
  if (!isOpened) return null;
  return (
    <Portal>
      <div className="Popup">
        <div className="Overlay" onClick={onClose}></div>
        <div className="Content">{children}</div>
      </div>
    </Portal>
  );
};

export default Popup;
