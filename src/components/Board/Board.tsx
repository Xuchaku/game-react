import React, { FC, useContext, useMemo } from "react";
import { SettingsContext } from "../../context/settings";
import Arrow from "../Arrow/Arrow";
import Slot from "../Slot/Slot";
import "./Board.scss";

type BoardTypeProps = {
  svgSrc: string;
};

const Board: FC<BoardTypeProps> = ({ svgSrc }) => {
  const style = {
    backgroundImage: `url(${svgSrc})`,
  };
  const { settings } = useContext(SettingsContext);
  const containerSlots = useMemo(() => {
    const containers = [];
    for (let i = 0; i < settings.count; i++) {
      containers.push(i);
    }
    return containers;
  }, []);

  return (
    <div className="Board" style={style}>
      <Arrow></Arrow>
      {/* <div className={`Arrow ${settings.order ? "Left" : "Right"}`}>
        <Arrow></Arrow>
        <p>{textArrow}</p>
      </div> */}
      {containerSlots.map((container) => {
        return <Slot index={container}></Slot>;
      })}
    </div>
  );
};

export default Board;
