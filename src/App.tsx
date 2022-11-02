import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import Game from "./pages/Game/Game";
import Menu from "./pages/Menu/Menu";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Menu />}></Route>
      <Route path="/game" element={<Game />}></Route>
      <Route path="*" element={<ErrorPage />}></Route>
    </Routes>
  );
}

export default App;
