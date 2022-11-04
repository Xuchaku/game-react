import React, { FC } from "react";
import "./Slot.scss";

type SlotPropsType = {
  index: number;
};

const Slot: FC<SlotPropsType> = ({ index }) => {
  return <div className="Slot" data-index={index}></div>;
};

export default Slot;
