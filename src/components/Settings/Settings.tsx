import React, { useEffect, useRef, useState } from "react";
import { VARIANTS_FIRST, VARIANTS_SECOND } from "../../constants/const";
import {
  mouseMoveHandler,
  mouseUpHandler,
} from "../../handlers/SettingsHandlers";
import "./Settings.scss";
import Range from "./../Range/Range";

const Settings = () => {
  const [countItem, setCountItem] = useState<string | number>(0);
  const [isReadyVariant, setIsReadyVariant] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const containerSliderRef = useRef<HTMLDivElement>(null);

  const num = 12;

  const [countItemSecond, setCountItemSecond] = useState<string | number>(0);

  const sliderRefSecond = useRef<HTMLDivElement>(null);
  const containerSliderRefSecond = useRef<HTMLDivElement>(null);
  const [isReadyVariantSecond, setIsReadyVariantSecond] = useState(false);
  const chosenRange = useRef<HTMLDivElement | null>(null);
  const [range, setRange] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (range) {
      chosenRange.current = range;
    }
  }, [range]);
  useEffect(() => {
    const mouseMoveHandlerBinded = mouseMoveHandler.bind(null, {
      chosenRange,
      sliderRef,
      containerSliderRef,
      sliderRefSecond,
      containerSliderRefSecond,
    });
    const mouseUpHandlerBinded = mouseUpHandler.bind(null, {
      chosenRange,
      sliderRef,
      setIsReadyVariant,
      sliderRefSecond,
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
      <h2>Кол-во предметов</h2>
      <Range
        variants={VARIANTS_FIRST}
        setVariant={setCountItem}
        sliderRef={sliderRef}
        containerSliderRef={containerSliderRef}
        isReadyVariant={isReadyVariant}
        setIsReadyVariant={setIsReadyVariant}
        setRange={setRange}
      ></Range>
      <h2>Значения</h2>
      <Range
        variants={VARIANTS_SECOND}
        setVariant={setCountItemSecond}
        sliderRef={sliderRefSecond}
        containerSliderRef={containerSliderRefSecond}
        isReadyVariant={isReadyVariantSecond}
        setIsReadyVariant={setIsReadyVariantSecond}
        setRange={setRange}
      ></Range>
      <div className="sort"></div>
    </div>
  );
};

export default Settings;
