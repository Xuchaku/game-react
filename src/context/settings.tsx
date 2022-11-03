import { createContext } from "react";
import GameSettings from "../types/GameSettings/GameSettings";
type SettingsContextType = {
  settings: GameSettings;
  setSettings: React.Dispatch<React.SetStateAction<GameSettings>>;
};
const initialState: SettingsContextType = {
  settings: { count: 0, value: 0, order: true },
  setSettings: () => {},
};

export const SettingsContext = createContext<SettingsContextType>(initialState);
