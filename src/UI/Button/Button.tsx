import React, { FC } from "react";
import GameSettings from "../../types/GameSettings/GameSettings";
import "./Button.scss";

type ButtonPropsType = {
  children: string | React.ReactNode;
  type: "major" | "minor";
  active?: boolean;
  setVariant?: React.Dispatch<React.SetStateAction<GameSettings>>;
};

const Button: FC<ButtonPropsType> = ({
  children,
  type,
  active = true,
  setVariant,
}) => {
  function handler() {
    if (setVariant && !active) {
      setVariant((prev) => ({ ...prev, order: !prev.order }));
    }
  }
  return (
    <button
      onClick={handler}
      className={`Button ${type} ${active ? "active" : "inactive"}`}
    >
      {children}
    </button>
  );
};

export default Button;
