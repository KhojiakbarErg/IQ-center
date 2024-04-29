import React from "react";
import { AppButton, MoreInfBtn } from "../../components/UI/AppButton/AppButton";
import { Link } from "react-router-dom";
import { ThemeHappy } from "./LoginPage.style";

export const Congratulation = () => {
  return (
    <ThemeHappy>
      <h1>
        Запись прошла
        <b> успешно</b>
      </h1>
      <p>
        Регистрация прошла успешно. Мы свяжемся с вами в ближайшее время для
        обсуждения вашего дальнейшего обучения. Спасибо что выбрали нас
      </p>
      <div className="btnsgroup">
        <Link to="/">
          <AppButton value="Готово"></AppButton>
        </Link>
        <Link to="/">
          <MoreInfBtn value="Продолжить в боте"></MoreInfBtn>
        </Link>
      </div>
    </ThemeHappy>
  );
};
