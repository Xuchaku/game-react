import React, { FC, ReactNode } from "react";
import "./Decoration.scss";

type DecorationTypeProps = {
  extendClassName: string;
  svg: React.FunctionComponent<React.SVGProps<SVGSVGElement>> | null;
};

export const Decoration: FC<DecorationTypeProps> = ({
  extendClassName,
  svg: SvgElem,
}) => {
  return (
    <div className={`Decoration ${extendClassName}`}>
      {SvgElem ? <SvgElem></SvgElem> : null}
    </div>
  );
};
