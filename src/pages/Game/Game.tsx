import React, { useContext, useLayoutEffect, useState } from "react";
import Board from "../../components/Board/Board";
import Cell from "../../components/Cell/Cell";
import { WIDTH_ITEM, HEIGHT_ITEM } from "../../constants/const";
import { SettingsContext } from "../../context/settings";
import { ThemeContext } from "../../context/theme";
import Item from "../../types/Item/Item";
import { generateItem } from "../../utils";

import "./Game.scss";
const Game = () => {
  const { theme } = useContext(ThemeContext);
  const { settings } = useContext(SettingsContext);

  const [items, setItems] = useState<Item[]>([]);
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
  console.log(items);

  const style = {
    backgroundColor: theme.backgroundColor,
    backgroundImage: theme.backgorundImage,
  };
  return (
    <div style={style} className="GameWrapper">
      <div className="Game">
        {items.map((item) => {
          return <Cell options={item}></Cell>;
        })}
        <Board svgSrc={theme.board}></Board>
      </div>
    </div>
  );
};

export default Game;
