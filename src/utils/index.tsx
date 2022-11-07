import { VARIANTS_SECOND, WIDTH_ITEM } from "../constants/const";
import Item from "../types/Item/Item";
import Slot from "../types/Slot/Slot";
import Theme from "../types/Theme/Theme";

type HashTable = {
  [key: string]: boolean;
};

function randomInteger(min: number, max: number, hashTable: HashTable): number {
  let rand = 0;
  do {
    rand = Math.floor(min + Math.random() * (max + 1 - min));
    let hasFind = hashTable[rand];
    if (!hasFind) {
      hashTable[rand] = true;
      break;
    }
  } while (true);

  return rand;
}
function randomChar(
  min: number = 65,
  max: number = 90,
  hashTable: HashTable
): string {
  let rand = 0;
  do {
    rand = Math.floor(min + Math.random() * (max + 1 - min));
    let hasFind = hashTable[rand];
    if (!hasFind) {
      hashTable[rand] = true;
      break;
    }
  } while (true);

  return String.fromCharCode(rand);
}
export const initItems = (
  count: number,
  edge: string | number,
  theme: Theme,
  setItems: React.Dispatch<React.SetStateAction<Item[]>>
) => {
  const newItems: Item[] = [];
  let xStartOffset = 70,
    yStartOffset = 100,
    x = 0,
    y = 0;
  for (let i = 0; i < count; i++) {
    x = xStartOffset + i * WIDTH_ITEM + (i + 1) * 10;
    y = yStartOffset + (i % 2 == 0 ? 1 : 0) * 150;
    newItems.push(generateItem(edge, x, y, theme.elements[i]));
  }
  setItems(newItems);
};

export const initSlots = (
  setSlots: React.Dispatch<React.SetStateAction<Slot[]>>
) => {
  const rects = document.querySelectorAll(".Slot");
  const newSlots: Slot[] = [];
  rects.forEach((rect) => {
    let index = Number(rect.getAttribute("data-index")) as number;
    let { x, y } = rect.getBoundingClientRect();
    newSlots.push({
      index,
      x: Math.floor(x),
      y: Math.floor(y),
    });
  });
  setSlots(newSlots);
};
export const initOffset = (
  setOffset: React.Dispatch<
    React.SetStateAction<{
      x: number;
      y: number;
    }>
  >
) => {
  const container = document.querySelector(".Game");
  if (container) {
    let { x, y } = container.getBoundingClientRect();
    setOffset({ x, y });
  }
};

export const generateItem = (
  edge: string | number,
  x: number,
  y: number,
  svgSrc: string
): Item => {
  switch (typeof edge) {
    case "string": {
      const hashTable: HashTable = {};
      const item: Item = { value: randomChar(65, 90, hashTable), x, y, svgSrc };
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
      const hashTable: HashTable = {};
      const item: Item = {
        value: randomInteger(leftEdge, edge, hashTable),
        x,
        y,
        svgSrc,
      };
      return item;
    }
    default: {
      const hashTable: HashTable = {};
      return { value: randomInteger(0, 0, hashTable), x, y, svgSrc };
    }
  }
};
