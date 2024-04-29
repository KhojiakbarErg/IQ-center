import React, { useEffect } from "react";
import { ThemeAppHeader } from "./AppHeader.sytle";

export const AppHeader = () => {
  useEffect(() => {
    const handleScrollIntoView = (id: string) => {
      const element = document.querySelector(id);
      if (element) {
        (element as HTMLElement).scrollIntoView({ behavior: "smooth" });
      }
    };

    document.querySelectorAll(".options a").forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const id = link.getAttribute("href");
        if (id) {
          handleScrollIntoView(id);
        }
      });
    });
  }, []);

  return (
    <ThemeAppHeader>
      <div id="nav">
        <img
          src="infbtn.svg"
          alt="nav"
          id="navigation"
          loading="lazy"
          onClick={() => {}}
        />
        <div id="list_menu">
          <ul>
            <li>
              <a href="#aboutus">О нас</a>
            </li>
            <li>
              <a href="#waychoose">Курсы</a>
            </li>
            <li>
              <a href="#ourteachers">Учителя</a>
            </li>
            <li>
              <a href="#comments">Отзывы</a>
            </li>
            <li>
              <a href="#contacts">Контакты</a>
            </li>
          </ul>
        </div>
      </div>
      <img
        src="logo.png"
        alt="logo"
        id="logo"
        className="logotype"
        loading="lazy"
      />
      <a href="tel:+998908052935" id="callbtn">
        <img src="CallBtn.svg" alt="Call" loading="lazy" />
      </a>
      <div className="options">
        <a href="#aboutus" id="option1">
          О нас
        </a>
        <a href="#waychoose" id="option2">
          Курсы
        </a>
        <a href="#ourteachers" id="option3">
          Учителя
        </a>
        <a href="#comments" id="option4">
          Отзывы
        </a>
        <a href="#contacts" id="option5">
          Контакты
        </a>
      </div>
      <a href="tel:+998908052935" className="call">
        Связаться <img className="call" src="right-arrow.png" alt="." />
      </a>
    </ThemeAppHeader>
  );
};
