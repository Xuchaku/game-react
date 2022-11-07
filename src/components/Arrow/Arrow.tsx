import React, { useContext } from "react";
import { SettingsContext } from "../../context/settings";
import { ReactComponent as LeftArrow } from "./../../assets/imgs/left.svg";
import { ReactComponent as RightArrow } from "./../../assets/imgs/right.svg";
import "./Arrow.scss";

const Arrow = () => {
  const { settings } = useContext(SettingsContext);
  const ArrowSvg = settings.order ? LeftArrow : RightArrow;
  const textArrow = settings.order ? "По возрастанию" : "По убыванию";
  return (
    <div className={`Arrow ${settings.order ? "Left" : "Right"}`}>
      <ArrowSvg></ArrowSvg>
      <p>{textArrow}</p>
    </div>
  );
};

export default Arrow;
