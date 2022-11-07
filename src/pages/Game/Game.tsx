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
import { Decoration } from "../../components/Decoration/Decoration";
import EndGame from "../../components/EndGame/EndGame";
import { WIDTH_ITEM, HEIGHT_ITEM } from "../../constants/const";
import { SettingsContext } from "../../context/settings";
import { ThemeContext } from "../../context/theme";
import { useAnswers } from "../../hooks/useAnswers";
import Item from "../../types/Item/Item";
import Slot from "../../types/Slot/Slot";
import Popup from "../../UI/Popup/Popup";
import { generateItem, initItems, initOffset, initSlots } from "../../utils";

import "./Game.scss";
const Game = () => {
  const { theme } = useContext(ThemeContext);
  const { settings } = useContext(SettingsContext);
  const [items, setItems] = useState<Item[]>([]);
  const [slots, setSlots] = useState<Slot[]>([]);
  const [isOpened, setIsOpened] = useState(true);
  const [usersAnswer, setUserAnswer] = useState({});
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const answers = useAnswers(items);
  const currentItemRef = useRef<HTMLDivElement | null>(null);

  function handlerMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    if (currentItemRef.current) {
      currentItemRef.current.style.left = `${
        e.clientX - offset.x - WIDTH_ITEM / 2
      }px`;
      currentItemRef.current.style.top = `${
        e.clientY - offset.y - HEIGHT_ITEM / 2
      }px`;
    }
  }

  const backGroundsDecorations = Object.entries(theme.backgorundImage);
  const style = {
    backgroundColor: theme.backgroundColor,
  };

  useLayoutEffect(() => {
    initItems(settings.count, settings.value, theme, setItems);
    initSlots(setSlots);
    initOffset(setOffset);
  }, [theme]);

  return (
    <>
      <div style={style} className="GameWrapper" onMouseMove={handlerMove}>
        <div className="Game">
          {backGroundsDecorations.map((decoration) => {
            const BackgroundSVG = decoration[1];
            return (
              <Decoration
                extendClassName={decoration[0]}
                svg={BackgroundSVG}
              ></Decoration>
            );
          })}
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
      <EndGame isOpened={isOpened}></EndGame>
    </>
  );
};

export default Game;
