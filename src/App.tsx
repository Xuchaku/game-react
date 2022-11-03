import React, { useLayoutEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { VARIANTS_FIRST, VARIANTS_SECOND, THEMES } from "./constants/const";
import { SettingsContext } from "./context/settings";
import { ThemeContext } from "./context/theme";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Game from "./pages/Game/Game";
import Menu from "./pages/Menu/Menu";
import GameSettings from "./types/GameSettings/GameSettings";
import Theme from "./types/Theme/Theme";

function App() {
  const [settings, setSettings] = useState<GameSettings>({
    count: VARIANTS_FIRST[0],
    value: VARIANTS_SECOND[0],
    order: true,
  });
  const [theme, setTheme] = useState<Theme>({
    backgroundColor: "",
    backgorundImage: "",
    board: null,
    elements: [],
  });
  useLayoutEffect(() => {
    let index = Math.floor(Math.random() * THEMES.length);
    setTheme(THEMES[index]);
  }, []);
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <SettingsContext.Provider value={{ settings, setSettings }}>
        <Routes>
          <Route path="/" element={<Menu />}></Route>
          <Route path="/game" element={<Game />}></Route>
          <Route path="*" element={<ErrorPage />}></Route>
        </Routes>
      </SettingsContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
