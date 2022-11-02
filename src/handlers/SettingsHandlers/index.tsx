import {
  INTERVAL_WIDTH,
  SLIDER_WIDTH,
  VARIANTS_FIRST,
  VARIANTS_SECOND,
} from "../../constants/const";

type OptionsMoveHandler = {
  chosenRange: React.MutableRefObject<HTMLDivElement | null>;
};

export const mouseMoveHandler = function (
  options: OptionsMoveHandler,
  e: MouseEvent
) {
  const { chosenRange } = options;
  let targetSlider = chosenRange;
  let targetContainer = targetSlider.current?.parentElement;
  let currentVarinats =
    targetContainer?.getAttribute("name") == "count"
      ? VARIANTS_FIRST
      : VARIANTS_SECOND;

  const isGotAttributes =
    targetSlider.current?.getAttribute("start") &&
    targetContainer?.getAttribute("leftEdge");

  if (isGotAttributes) {
    const leftEdge = Number(targetContainer?.getAttribute("leftEdge"));

    const isWithinAcceptable =
      e.clientX >= leftEdge &&
      e.clientX <=
        leftEdge +
          (currentVarinats.length - 1) * INTERVAL_WIDTH -
          SLIDER_WIDTH / 2;

    if (isWithinAcceptable && targetSlider.current) {
      targetSlider.current.style.left = `${
        e.clientX - leftEdge - SLIDER_WIDTH / 2
      }px`;
    }
  }
};

type OptionsUpHandler = {
  chosenRange: React.MutableRefObject<HTMLDivElement | null>;
  setIsReadyVariant: React.Dispatch<React.SetStateAction<boolean>>;
  setIsReadyVariantSecond: React.Dispatch<React.SetStateAction<boolean>>;
};
export const mouseUpHandler = function mouseUpHandler(
  options: OptionsUpHandler,
  e: MouseEvent
) {
  const { chosenRange, setIsReadyVariant, setIsReadyVariantSecond } = options;

  let targetSlider = chosenRange;
  let targetContainer = targetSlider.current?.parentElement;
  let readyVariant =
    targetContainer?.getAttribute("name") == "count"
      ? setIsReadyVariant
      : setIsReadyVariantSecond;

  targetSlider.current?.removeAttribute("start");
  readyVariant(true);
};
