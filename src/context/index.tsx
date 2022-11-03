import { createContext, useState } from "react";
import GameSettings from "../types/GameSettings/GameSettings";
type SettingsContext = {
  settings: GameSettings;
  setSettings: React.Dispatch<React.SetStateAction<GameSettings>>;
};
const initialState: SettingsContext = {
  settings: { count: 0, value: 0, order: true },
  setSettings: () => {},
};

export const Settings = createContext<SettingsContext>(initialState);
