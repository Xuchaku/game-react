import { VARIANTS_SECOND } from "../constants/const";
import Item from "../types/Item/Item";

function randomInteger(min: number, max: number): number {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}
function randomChar(min: number = 65, max: number = 90): string {
  let rand = Math.floor(min + Math.random() * (max + 1 - min));
  return String.fromCharCode(rand);
}

export const generateItem = (
  edge: string | number,
  x: number,
  y: number,
  svgSrc: string
): Item => {
  switch (typeof edge) {
    case "string": {
      const item: Item = { value: randomChar(), x, y, svgSrc };
      return item;
    }
    case "number": {
      const leftIndex = VARIANTS_SECOND.indexOf(edge);
      let leftEdge = 0;
      if (leftIndex == 1) {
        leftEdge = 1;
      } else {
        leftEdge = VARIANTS_SECOND[leftIndex - 1] as number;
      }

      const item: Item = {
        value: randomInteger(leftEdge, edge),
        x,
        y,
        svgSrc,
      };
      return item;
    }
    default: {
      return { value: randomInteger(0, 0), x, y, svgSrc };
    }
  }
};
