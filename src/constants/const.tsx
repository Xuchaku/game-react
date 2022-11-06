import Theme from "../types/Theme/Theme";

import BoardSweets from "./../assets/imgs/sweets/board.svg";
import SweetFirst from "./../assets/imgs/sweets/1.svg";
import SweetSecond from "./../assets/imgs/sweets/2.svg";
import SweetThird from "./../assets/imgs/sweets/3.svg";
import SweetFourt from "./../assets/imgs/sweets/4.svg";
import SweetFifth from "./../assets/imgs/sweets/5.svg";
import { ReactComponent as SweetLeftDecoration } from "./../assets/imgs/sweets/leftDecoration.svg";
import { ReactComponent as SweetRightDecoration } from "./../assets/imgs/sweets/rightDecoration.svg";

import BoardCoins from "./../assets/imgs/coins/board.svg";
import CoinFirst from "./../assets/imgs/coins/1.svg";
import CoinSecond from "./../assets/imgs/coins/2.svg";
import CoinThird from "./../assets/imgs/coins/3.svg";
import CoinFourt from "./../assets/imgs/coins/4.svg";
import CoinFifth from "./../assets/imgs/coins/5.svg";
import { ReactComponent as CoinLeftDecoration } from "./../assets/imgs/coins/leftDecoration.svg";
import { ReactComponent as CoinRightDecoration } from "./../assets/imgs/coins/rightDecoration.svg";

import BoardToys from "./../assets/imgs/toys/board.svg";
import ToyFirst from "./../assets/imgs/toys/1.svg";
import ToySecond from "./../assets/imgs/toys/2.svg";
import ToyThird from "./../assets/imgs/toys/3.svg";
import ToyFourt from "./../assets/imgs/toys/4.svg";
import ToyFifth from "./../assets/imgs/toys/5.svg";
import { ReactComponent as ToyLeftDecoration } from "./../assets/imgs/toys/leftDecoration.svg";
import { ReactComponent as ToyRightDecoration } from "./../assets/imgs/toys/rightDecoration.svg";
import { ReactComponent as ToyLeftTopDecoration } from "./../assets/imgs/toys/leftTopDecoration.svg";
import { ReactComponent as ToyRightTopDecoration } from "./../assets/imgs/toys/rightTopDecoration.svg";

import BoardFlowers from "./../assets/imgs/flowers/board.svg";
import FlowerFirst from "./../assets/imgs/flowers/1.svg";
import FlowerSecond from "./../assets/imgs/flowers/2.svg";
import FlowerThird from "./../assets/imgs/flowers/3.svg";
import FlowerFourt from "./../assets/imgs/flowers/4.svg";
import FlowerFifth from "./../assets/imgs/flowers/5.svg";
import { ReactComponent as FlowerLeftDecoration } from "./../assets/imgs/flowers/leftDecoration.svg";
import { ReactComponent as FlowerRightDecoration } from "./../assets/imgs/flowers/rightDecoration.svg";
import { ReactComponent as FlowerLeftTopDecoration } from "./../assets/imgs/flowers/leftTopDecoration.svg";
import { ReactComponent as FlowerRightTopDecoration } from "./../assets/imgs/flowers/rightTopDecoration.svg";

export const INTERVAL_WIDTH = 90;
export const SLIDER_WIDTH = 22;
export const VARIANTS_FIRST = [2, 3, 4, 5];
export const VARIANTS_SECOND = ["A", 9, 19, 50, 99, 999];
export const WIDTH_ITEM = 160;
export const HEIGHT_ITEM = 160;

export const WIDTH_SLOT = 130;
export const HEIGHT_SLOT = 130;

/*
type Background = {
  leftBottomDecoration: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  > | null;
  rightBottomDecoration: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  > | null;
  leftTopDecoration?: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  > | null;
  rightTopDecoration?: React.FunctionComponent<
    React.SVGProps<SVGSVGElement>
  > | null;
};



*/
export const THEMES: Theme[] = [
  {
    backgroundColor: "#DEC6AA",
    backgorundImage: {
      leftTopDecoration: SweetLeftDecoration,
      rightTopDecoration: SweetRightDecoration,
    },
    board: BoardSweets,
    elements: [SweetFirst, SweetSecond, SweetThird, SweetFourt, SweetFifth],
  },
  {
    backgroundColor: "#3A1F36",
    backgorundImage: {
      leftTopDecoration: CoinLeftDecoration,
      rightTopDecoration: CoinRightDecoration,
    },
    board: BoardCoins,
    elements: [CoinFirst, CoinSecond, CoinThird, CoinFourt, CoinFifth],
  },
  {
    backgroundColor: "#132738",
    backgorundImage: {
      leftBottomDecoration: ToyLeftDecoration,
      rightBottomDecoration: ToyRightDecoration,
      leftTopDecoration: ToyLeftTopDecoration,
      rightTopDecoration: ToyRightTopDecoration,
    },
    board: BoardToys,
    elements: [ToyFirst, ToySecond, ToyThird, ToyFourt, ToyFifth],
  },
  {
    backgroundColor: "#2D3539",
    backgorundImage: {
      leftBottomDecoration: FlowerLeftDecoration,
      rightBottomDecoration: FlowerRightDecoration,
      leftTopDecoration: FlowerLeftTopDecoration,
      rightTopDecoration: FlowerRightTopDecoration,
    },
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
