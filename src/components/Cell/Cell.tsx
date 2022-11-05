import React, { FC } from "react";
import {
  WIDTH_ITEM,
  HEIGHT_ITEM,
  HEIGHT_SLOT,
  WIDTH_SLOT,
} from "../../constants/const";
import Item from "../../types/Item/Item";
import Slot from "../../types/Slot/Slot";
import "./Cell.scss";

type CellPropsType = {
  options: Item;
  currentItemRef: React.MutableRefObject<HTMLDivElement | null>;
  slots: Slot[];
  cell: Item;
  answers: (string | number)[];
};

const Cell: FC<CellPropsType> = ({
  options,
  currentItemRef,
  slots,
  cell,
  answers,
}) => {
  const style = {
    left: `${options.x}px`,
    top: `${options.y}px`,
    width: `${WIDTH_ITEM}px`,
    height: `${HEIGHT_ITEM}px`,
    backgroundImage: `url(${options.svgSrc})`,
    backgroundRepeat: "no-repeat",
  };

  function handlerDown(e: React.MouseEvent<HTMLDivElement>) {
    currentItemRef.current = e.currentTarget as HTMLDivElement;
  }

  function getIndexSlotByXY(x: number, y: number, slots: Slot[]) {
    let findIndex = slots.findIndex((slot) => {
      return (
        x >= slot.x &&
        x <= slot.x + WIDTH_SLOT &&
        y >= slot.y &&
        y <= slot.y + HEIGHT_SLOT
      );
    });
    return findIndex;
  }

  function handlerUp(item: Item, e: React.MouseEvent<HTMLDivElement>) {
    let index = getIndexSlotByXY(e.clientX, e.clientY, slots);

    if (item.value == answers[index] && index >= 0) {
      if (currentItemRef.current) {
        currentItemRef.current.style.transform = `scale(${
          WIDTH_SLOT / WIDTH_ITEM
        })`;
        // currentItemRef.current.style.left = `${slots[index].x}px`;
        // currentItemRef.current.style.top = `${slots[index].y}px`;
      }
    } else {
      if (currentItemRef.current) {
        currentItemRef.current.style.left = `${item.x}px`;
        currentItemRef.current.style.top = `${item.y}px`;
        currentItemRef.current.style.transform = `scale(1)`;
      }
    }
    currentItemRef.current = null;
  }
  return (
    <div
      style={style}
      onMouseDown={handlerDown}
      onMouseUp={(e) => handlerUp(cell, e)}
      className="Cell"
    >
      <span>{options.value}</span>
    </div>
  );
};

export default Cell;
