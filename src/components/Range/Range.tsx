import React, { FC, forwardRef, useEffect } from "react";
import "./Range.scss";

type RangePropsType = {
  values: (string | number)[];
  ref1: React.RefObject<HTMLDivElement>;
  ref2: React.RefObject<HTMLDivElement>;
  readyCount: boolean;
  setReadyCount: React.Dispatch<React.SetStateAction<boolean>>;
  setter: React.Dispatch<React.SetStateAction<number | string>>;
};

const Range: FC<RangePropsType> = ({
  values,
  ref1,
  ref2,
  readyCount,
  setReadyCount,
  setter,
}) => {
  const style = { width: (values.length - 1) * 90 };
  console.log(style);
  useEffect(() => {
    if (readyCount) {
      if (ref1.current) {
        const x = parseInt(ref1.current.style.left);

        const position = Math.round(x / 90);
        let offset = 0;
        if (position > 0 && position < values.length - 1) {
          offset = 11;
        } else if (position == values.length - 1) {
          offset = 22;
        }
        ref1.current.style.left = `${position * 90 - offset}px`;
        setter(values[position]);
        setReadyCount(false);
      }
    }
  }, [readyCount]);
  useEffect(() => {
    console.log("her");
    if (ref2 && ref2.current) {
      const { x } = ref2.current?.getBoundingClientRect();
      ref2.current?.setAttribute("leftEdge", `${x}`);
    }
  }, []);

  function mouseDownHandler() {
    if (ref1 && ref1.current) ref1.current.setAttribute("start", "true");
  }

  console.log("render");
  return (
    <div style={style} className="Range-wrapper">
      <div className="values">
        {values.map((value) => {
          return <span>{value}</span>;
        })}
      </div>
      <div ref={ref2} className="Range">
        <div ref={ref1} className="slider" onMouseDown={mouseDownHandler}></div>
      </div>
    </div>
  );
};

export default Range;
