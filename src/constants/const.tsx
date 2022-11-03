import Theme from "../types/Theme/Theme";

import { ReactComponent as BoardSweets } from "./../assets/imgs/sweets/board.svg";
import { ReactComponent as SweetFirst } from "./../assets/imgs/sweets/1.svg";
import { ReactComponent as SweetSecond } from "./../assets/imgs/sweets/2.svg";
import { ReactComponent as SweetThird } from "./../assets/imgs/sweets/3.svg";
import { ReactComponent as SweetFourt } from "./../assets/imgs/sweets/4.svg";
import { ReactComponent as SweetFifth } from "./../assets/imgs/sweets/5.svg";

import { ReactComponent as BoardCoins } from "./../assets/imgs/coins/board.svg";
import { ReactComponent as CoinFirst } from "./../assets/imgs/coins/1.svg";
import { ReactComponent as CoinSecond } from "./../assets/imgs/coins/2.svg";
import { ReactComponent as CoinThird } from "./../assets/imgs/coins/3.svg";
import { ReactComponent as CoinFourt } from "./../assets/imgs/coins/4.svg";
import { ReactComponent as CoinFifth } from "./../assets/imgs/coins/5.svg";

import { ReactComponent as BoardToys } from "./../assets/imgs/toys/board.svg";
import { ReactComponent as ToyFirst } from "./../assets/imgs/toys/1.svg";
import { ReactComponent as ToySecond } from "./../assets/imgs/toys/2.svg";
import { ReactComponent as ToyThird } from "./../assets/imgs/toys/3.svg";
import { ReactComponent as ToyFourt } from "./../assets/imgs/toys/4.svg";
import { ReactComponent as ToyFifth } from "./../assets/imgs/toys/5.svg";

import { ReactComponent as BoardFlowers } from "./../assets/imgs/flowers/board.svg";
import { ReactComponent as FlowerFirst } from "./../assets/imgs/flowers/1.svg";
import { ReactComponent as FlowerSecond } from "./../assets/imgs/flowers/2.svg";
import { ReactComponent as FlowerThird } from "./../assets/imgs/flowers/3.svg";
import { ReactComponent as FlowerFourt } from "./../assets/imgs/flowers/4.svg";
import { ReactComponent as FlowerFifth } from "./../assets/imgs/flowers/5.svg";

export const INTERVAL_WIDTH = 90;
export const SLIDER_WIDTH = 22;
export const VARIANTS_FIRST = [2, 3, 4, 5];
export const VARIANTS_SECOND = ["A", 9, 19, 50, 99, 999];

export const THEMES: Theme[] = [
  {
    backgroundColor: "#DEC6AA",
    backgorundImage: "#DEC6AA",
    board: BoardSweets,
    elements: [SweetFirst, SweetSecond, SweetThird, SweetFourt, SweetFifth],
  },
  {
    backgroundColor: "#3A1F36",
    backgorundImage: "#3A1F36",
    board: BoardCoins,
    elements: [CoinFirst, CoinSecond, CoinThird, CoinFourt, CoinFifth],
  },
  {
    backgroundColor: "#132738",
    backgorundImage: "#132738",
    board: BoardToys,
    elements: [ToyFirst, ToySecond, ToyThird, ToyFourt, ToyFifth],
  },
  {
    backgroundColor: "#2D3539",
    backgorundImage: "#2D3539",
    board: BoardFlowers,
    elements: [
      FlowerFirst,
      FlowerSecond,
      FlowerThird,
      FlowerFourt,
      FlowerFifth,
    ],
  },
];
