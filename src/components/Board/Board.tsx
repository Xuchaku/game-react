import React, { FC } from "react";
import "./Board.scss";
import s from "./../../assets/imgs/flowers/board.svg";

type BoardTypeProps = {
  svgSrc: string;
};

const Board: FC<BoardTypeProps> = ({ svgSrc }) => {
  const style = {
    backgroundImage: `url(${s})`,
  };
  return (
    <div className="Board" style={style}>
      {/* <img src={svgSrc} alt="" /> */}
    </div>
  );
};

export default Board;
