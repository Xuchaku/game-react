import { off } from "process";
import React, {
  useCallback,
  useContext,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Board from "../../components/Board/Board";
import Cell from "../../components/Cell/Cell";
import { WIDTH_ITEM, HEIGHT_ITEM } from "../../constants/const";
import { SettingsContext } from "../../context/settings";
import { ThemeContext } from "../../context/theme";
import { useRect } from "../../hooks/userRect";
import Item from "../../types/Item/Item";
import Slot from "../../types/Slot/Slot";
import { generateItem } from "../../utils";

import "./Game.scss";
const Game = () => {
  const { theme } = useContext(ThemeContext);
  const { settings } = useContext(SettingsContext);

  const [items, setItems] = useState<Item[]>([]);
  const [slots, setSlots] = useState<Slot[]>([]);

  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const answers = useMemo(() => {
    const values = items.map((item) => {
      return item.value;
    });
    if (typeof values[0] == "number") {
      let valuesNumbers = values as number[];
      return valuesNumbers.sort((a, b) => a - b);
    } else {
      let valuesChars = values as string[];
      return valuesChars.sort();
    }
  }, [items]);

  const currentItemRef = useRef<HTMLDivElement | null>(null);
  const handlerMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (currentItemRef.current) {
        currentItemRef.current.style.left = `${
          e.clientX - offset.x - WIDTH_ITEM / 2
        }px`;
        currentItemRef.current.style.top = `${
          e.clientY - offset.y - HEIGHT_ITEM / 2
        }px`;
      }
    },
    [offset]
  );

  useLayoutEffect(() => {
    const newItems: Item[] = [];
    let x = 0,
      y = 0;
    for (let i = 0; i < settings.count; i++) {
      x = i * WIDTH_ITEM + (i + 1) * 20;
      y = (i % 2 == 0 ? 0 : 1) * 40 + 20;
      newItems.push(generateItem(settings.value, x, y, theme.elements[i]));
    }
    setItems(newItems);
  }, [theme]);
  useLayoutEffect(() => {
    const rects = document.querySelectorAll(".Slot");
    const newSlots: Slot[] = [];
    rects.forEach((rect) => {
      let index = Number(rect.getAttribute("data-index")) as number;
      let { x, y } = rect.getBoundingClientRect();
      newSlots.push({
        index,
        x: Math.floor(x),
        y: Math.floor(y),
      });
    });
    setSlots(newSlots);

    const container = document.querySelector(".Game");
    if (container) {
      let { x, y } = container.getBoundingClientRect();
      setOffset({ x, y });
    }
  }, []);

  const style = {
    backgroundColor: theme.backgroundColor,
    backgroundImage: theme.backgorundImage,
  };
  return (
    <div style={style} className="GameWrapper" onMouseMove={handlerMove}>
      <div className="Game">
        {items.map((item) => {
          return (
            <Cell
              cell={item}
              slots={slots}
              answers={answers}
              currentItemRef={currentItemRef}
              options={item}
            ></Cell>
          );
        })}
        <Board svgSrc={theme.board}></Board>
      </div>
    </div>
  );
};

export default Game;
