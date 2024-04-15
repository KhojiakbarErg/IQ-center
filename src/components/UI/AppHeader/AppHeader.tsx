import React from "react";
import { ThemeAppHeader } from "./AppHeader.sytle";

export const AppHeader = () => {
  return (
    <ThemeAppHeader>
      <img src="logo.png" alt="logo" id="logo" className="logotype" />
      <div className="options">
        <span>О нас</span>
        <span>Курсы</span>
        <span>Учителя</span>
        <span>Отзывы</span>
        <span>Контакты</span>
      </div>
      <a href="" className="call">
        Связаться <img className="call" src="right-arrow.png" alt="." />
      </a>
    </ThemeAppHeader>
  );
};
