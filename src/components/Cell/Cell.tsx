import React, { FC } from "react";
import { WIDTH_ITEM, HEIGHT_ITEM } from "../../constants/const";
import Item from "../../types/Item/Item";
import "./Cell.scss";

type CellPropsType = {
  options: Item;
};

const Cell: FC<CellPropsType> = ({ options }) => {
  const style = {
    left: `${options.x}px`,
    top: `${options.y}px`,
    width: `${WIDTH_ITEM}px`,
    height: `${HEIGHT_ITEM}px`,
  };

  return (
    <div style={style} className="CellWrapper">
      <div className="Cell">
        <img src={options.svgSrc} alt="" />
        <span>{options.value}</span>
      </div>
    </div>
  );
};

export default Cell;
