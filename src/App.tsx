import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import { VARIANTS_FIRST, VARIANTS_SECOND } from "./constants/const";
import { Settings } from "./context";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Game from "./pages/Game/Game";
import Menu from "./pages/Menu/Menu";
import GameSettings from "./types/GameSettings/GameSettings";

function App() {
  const [settings, setSettings] = useState<GameSettings>({
    count: VARIANTS_FIRST[0],
    value: VARIANTS_SECOND[0],
    order: true,
  });
  return (
    <Settings.Provider value={{ settings, setSettings }}>
      <Routes>
        <Route path="/" element={<Menu />}></Route>
        <Route path="/game" element={<Game />}></Route>
        <Route path="*" element={<ErrorPage />}></Route>
      </Routes>
    </Settings.Provider>
  );
}

export default App;
