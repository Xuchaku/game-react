import {
  INTERVAL_WIDTH,
  SLIDER_WIDTH,
  VARIANTS_FIRST,
  VARIANTS_SECOND,
} from "../../constants/const";

type OptionsMoveHandler = {
  chosenRange: React.MutableRefObject<HTMLDivElement | null>;
  sliderRef: React.RefObject<HTMLDivElement>;
  containerSliderRef: React.RefObject<HTMLDivElement>;
  sliderRefSecond: React.RefObject<HTMLDivElement>;
  containerSliderRefSecond: React.RefObject<HTMLDivElement>;
};

export const mouseMoveHandler = function (
  options: OptionsMoveHandler,
  e: MouseEvent
) {
  const {
    chosenRange,
    sliderRef,
    containerSliderRef,
    sliderRefSecond,
    containerSliderRefSecond,
  } = options;
  let targetSlider = null;
  let targetContainer = null;
  let currentVarinats = null;
  if (chosenRange.current == sliderRef.current) {
    targetSlider = sliderRef;
    targetContainer = containerSliderRef;
    currentVarinats = VARIANTS_FIRST;
  } else if (chosenRange.current == sliderRefSecond.current) {
    targetSlider = sliderRefSecond;
    targetContainer = containerSliderRefSecond;
    currentVarinats = VARIANTS_SECOND;
  } else {
    throw new Error("No available ref");
  }

  const isGotAttributes =
    targetSlider.current?.getAttribute("start") &&
    targetContainer.current?.getAttribute("leftEdge");

  if (isGotAttributes) {
    const leftEdge = Number(targetContainer.current?.getAttribute("leftEdge"));

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

  /*
  const isGotAttributes =
    chosenRange.current?.getAttribute("start") &&
    containerSliderRef.current?.getAttribute("leftEdge");

  if (isGotAttributes) {
    const leftEdge = Number(
      containerSliderRef.current?.getAttribute("leftEdge")
    );

    const isWithinAcceptable =
      e.clientX >= leftEdge &&
      e.clientX <=
        leftEdge +
          (VARIANTS_FIRST.length - 1) * INTERVAL_WIDTH -
          SLIDER_WIDTH / 2;

    if (isWithinAcceptable && sliderRef.current) {
      sliderRef.current.style.left = `${
        e.clientX - leftEdge - SLIDER_WIDTH / 2
      }px`;
    }
  }*/
};

type OptionsUpHandler = {
  chosenRange: React.MutableRefObject<HTMLDivElement | null>;
  sliderRef: React.RefObject<HTMLDivElement>;
  setIsReadyVariant: React.Dispatch<React.SetStateAction<boolean>>;
  sliderRefSecond: React.RefObject<HTMLDivElement>;
  setIsReadyVariantSecond: React.Dispatch<React.SetStateAction<boolean>>;
};
export const mouseUpHandler = function mouseUpHandler(
  options: OptionsUpHandler,
  e: MouseEvent
) {
  const {
    chosenRange,
    sliderRef,
    setIsReadyVariant,
    sliderRefSecond,
    setIsReadyVariantSecond,
  } = options;

  let targetSlider = null;
  let readyVariant = null;
  if (chosenRange.current == sliderRef.current) {
    targetSlider = sliderRef;
    readyVariant = setIsReadyVariant;
  } else if (chosenRange.current == sliderRefSecond.current) {
    targetSlider = sliderRefSecond;
    readyVariant = setIsReadyVariantSecond;
  } else {
    throw new Error("No available ref");
  }

  targetSlider.current?.removeAttribute("start");
  readyVariant(true);

  /*
  sliderRef.current?.removeAttribute("start");
  setIsReadyVariant(true);*/
};
