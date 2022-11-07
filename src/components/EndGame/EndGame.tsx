import React, { FC } from "react";
import Popup from "../../UI/Popup/Popup";
import "./EndGame.scss";
import { ReactComponent as LeftTopStar } from "./../../assets/imgs/stars/leftTop.svg";
import { ReactComponent as LeftBottomStar } from "./../../assets/imgs/stars/leftBottom.svg";
import { ReactComponent as RightTopStar } from "./../../assets/imgs/stars/rightTop.svg";
import { ReactComponent as RightBottomStar } from "./../../assets/imgs/stars/rightBottom.svg";
import Button from "../../UI/Button/Button";
import { Link } from "react-router-dom";

type EndGameTypeProps = {
  isOpened: boolean;
};

const EndGame: FC<EndGameTypeProps> = ({ isOpened }) => {
  return (
    <Popup isOpened={isOpened}>
      <div className="EndGame">
        <LeftTopStar></LeftTopStar>
        <LeftBottomStar></LeftBottomStar>
        <RightTopStar></RightTopStar>
        <RightBottomStar></RightBottomStar>
        <h1>Победа!</h1>
        <p>Молодец! Ты успешно справился с заданием!</p>
        <Button type="major">
          <Link to={"/"}>Заново</Link>
        </Button>
      </div>
    </Popup>
  );
};

export default EndGame;
