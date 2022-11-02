import React, { FC, useEffect } from "react";
import { INTERVAL_WIDTH, SLIDER_WIDTH } from "../../constants/const";
import "./Range.scss";

type RangePropsType = {
  variants: (string | number)[];
  sliderRef: React.RefObject<HTMLDivElement>;
  containerSliderRef: React.RefObject<HTMLDivElement>;
  isReadyVariant: boolean;
  setIsReadyVariant: React.Dispatch<React.SetStateAction<boolean>>;
  setVariant: React.Dispatch<React.SetStateAction<number | string>>;
  setRange: React.Dispatch<React.SetStateAction<HTMLDivElement | null>>;
};

const Range: FC<RangePropsType> = ({
  variants,
  sliderRef,
  containerSliderRef,
  isReadyVariant,
  setIsReadyVariant,
  setVariant,
  setRange,
}) => {
  const style = { width: (variants.length - 1) * INTERVAL_WIDTH };

  useEffect(() => {
    if (isReadyVariant) {
      if (sliderRef.current) {
        const x = parseInt(sliderRef.current.style.left);
        const position = Math.round(x / INTERVAL_WIDTH);
        let offset = 0;

        if (position > 0 && position < variants.length - 1) {
          offset = SLIDER_WIDTH / 2;
        } else if (position == variants.length - 1) {
          offset = SLIDER_WIDTH;
        }

        sliderRef.current.style.left = `${
          position * INTERVAL_WIDTH - offset
        }px`;
        setVariant(variants[position]);
        setIsReadyVariant(false);
      }
    }
  }, [isReadyVariant]);

  useEffect(() => {
    if (containerSliderRef && containerSliderRef.current) {
      const { x } = containerSliderRef.current?.getBoundingClientRect();
      containerSliderRef.current?.setAttribute("leftEdge", `${x}`);
    }
  }, []);

  function mouseDownHandler() {
    sliderRef.current?.setAttribute("start", "true");
    setRange(sliderRef.current);
  }

  console.log("render");
  return (
    <div style={style} className="Range-wrapper">
      <div className="values">
        {variants.map((variant) => {
          return <span>{variant}</span>;
        })}
      </div>
      <div ref={containerSliderRef} className="Range">
        <div
          ref={sliderRef}
          className="slider"
          onMouseDown={mouseDownHandler}
        ></div>
      </div>
    </div>
  );
};

export default Range;
