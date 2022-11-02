import React, { useEffect, useRef, useState, createRef, useMemo } from "react";
import "./Settings.scss";
import Range from "./../Range/Range";

const Settings = () => {
  const [countItem, setCountItem] = useState<string | number>(0);
  const [firsetOption, setFirstOption] = useState([0, 1, 2, 3, 4]);
  const [readyCount, setReadyCount] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const containerSliderRef = useRef<HTMLDivElement>(null);

  function mouseMoveHandler(e: MouseEvent) {
    if (
      sliderRef.current?.getAttribute("start") &&
      containerSliderRef.current?.getAttribute("leftEdge")
    ) {
      const leftEdge = Number(
        containerSliderRef.current?.getAttribute("leftEdge")
      );
      if (
        sliderRef &&
        sliderRef.current &&
        e.clientX >= leftEdge &&
        e.clientX <= leftEdge + (firsetOption.length - 1) * 90 - 11
      ) {
        sliderRef.current.style.left = `${e.clientX - leftEdge - 11}px`;
      }
    }
  }

  function mouseUpHandler() {
    sliderRef.current?.removeAttribute("start");
    setReadyCount(true);
  }

  useEffect(() => {
    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHandler);
    return () => {
      document.removeEventListener("mousemove", mouseMoveHandler);
      document.addEventListener("mouseup", mouseUpHandler);
    };
  }, []);

  return (
    <div className="Settings">
      <h2>Кол-во предметов {countItem}</h2>
      <Range
        values={firsetOption}
        setter={setCountItem}
        ref1={sliderRef}
        ref2={containerSliderRef}
        readyCount={readyCount}
        setReadyCount={setReadyCount}
      ></Range>
      <h2>Значения</h2>
      <div className="sort"></div>
    </div>
  );
};

export default Settings;
