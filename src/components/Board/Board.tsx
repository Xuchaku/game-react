import React, { FC, useContext, useMemo } from "react";
import { SettingsContext } from "../../context/settings";
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
      {containerSlots.map((container) => {
        return <Slot index={container}></Slot>;
      })}
    </div>
  );
};

export default Board;
