import React, { useEffect, useRef, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { VARIANTS_FIRST, VARIANTS_SECOND } from "../../constants/const";
import { SettingsContext as Config } from "../../context/settings";
import {
  mouseMoveHandler,
  mouseUpHandler,
} from "../../handlers/SettingsHandlers";
import "./Settings.scss";
import Range from "./../Range/Range";
import Button from "../../UI/Button/Button";

const Settings = () => {
  const [isReadyVariant, setIsReadyVariant] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const sliderRefSecond = useRef<HTMLDivElement>(null);
  const [isReadyVariantSecond, setIsReadyVariantSecond] = useState(false);

  const { settings, setSettings } = useContext(Config);

  const chosenRange = useRef<HTMLDivElement | null>(null);
  const [range, setRange] = useState<HTMLDivElement | null>(null);

  function changeSettingsHandler(field: string) {
    return function (value: string | number | boolean) {
      if (setSettings) setSettings({ ...settings, [field]: value });
    };
  }

  useEffect(() => {
    if (range) {
      chosenRange.current = range;
    }
  }, [range]);
  useEffect(() => {
    const mouseMoveHandlerBinded = mouseMoveHandler.bind(null, {
      chosenRange,
    });
    const mouseUpHandlerBinded = mouseUpHandler.bind(null, {
      chosenRange,
      setIsReadyVariant,
      setIsReadyVariantSecond,
    });
    document.addEventListener("mousemove", mouseMoveHandlerBinded);
    document.addEventListener("mouseup", mouseUpHandlerBinded);
    return () => {
      document.removeEventListener("mousemove", mouseMoveHandlerBinded);
      document.removeEventListener("mouseup", mouseUpHandlerBinded);
    };
  }, []);

  return (
    <div className="Settings">
      <h2>Кол-во предметов {settings.count}</h2>
      <Range
        name={"count"}
        variants={VARIANTS_FIRST}
        setVariant={changeSettingsHandler("count")}
        sliderRef={sliderRef}
        isReadyVariant={isReadyVariant}
        setIsReadyVariant={setIsReadyVariant}
        setRange={setRange}
      ></Range>
      <h2>Значения</h2>
      <Range
        name={"value"}
        variants={VARIANTS_SECOND}
        setVariant={changeSettingsHandler("value")}
        sliderRef={sliderRefSecond}
        isReadyVariant={isReadyVariantSecond}
        setIsReadyVariant={setIsReadyVariantSecond}
        setRange={setRange}
      ></Range>
      <div className="sort">
        <Button type="minor" active={settings?.order} setVariant={setSettings}>
          По возрастанию
        </Button>
        <Button type="minor" active={!settings?.order} setVariant={setSettings}>
          По убыванию
        </Button>
      </div>
      <div className="play">
        <Button type="major">
          <Link to={"/game"}>Играть</Link>
        </Button>
      </div>
    </div>
  );
};

export default Settings;
