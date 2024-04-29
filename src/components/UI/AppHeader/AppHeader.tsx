import React from "react";
import { ThemeAppHeader } from "./AppHeader.sytle";

export const AppHeader = () => {
  window.addEventListener("load", () => {
    document
      .querySelector('a[href="#aboutus"]')
      ?.addEventListener("click", (e: Event) => {
        e.preventDefault();
        document
          .querySelector("#aboutus")
          ?.scrollIntoView({ behavior: "smooth" });
      });
  });

  window.addEventListener("load", () => {
    document
      .querySelector('a[href="#waychoose"]')
      ?.addEventListener("click", (e: Event) => {
        e.preventDefault();
        document
          .querySelector("#waychoose")
          ?.scrollIntoView({ behavior: "smooth" });
      });
  });

  window.addEventListener("load", () => {
    document
      .querySelector('a[href="#ourteachers"]')
      ?.addEventListener("click", (e: Event) => {
        e.preventDefault();
        document
          .querySelector("#ourteachers")
          ?.scrollIntoView({ behavior: "smooth" });
      });
  });

  window.addEventListener("load", () => {
    document
      .querySelector('a[href="#comments"]')
      ?.addEventListener("click", (e: Event) => {
        e.preventDefault();
        document
          .querySelector("#comments")
          ?.scrollIntoView({ behavior: "smooth" });
      });
  });

  window.addEventListener("load", () => {
    document
      .querySelector('a[href="#contacts"]')
      ?.addEventListener("click", (e: Event) => {
        e.preventDefault();
        document
          .querySelector("#contacts")
          ?.scrollIntoView({ behavior: "smooth" });
      });
  });

  return (
    <ThemeAppHeader>
      <img src="infbtn.png" alt="nav" id="navigation" />
      <img src="logo.png" alt="logo" id="logo" className="logotype" />
      <a href="tel:+998908052935" id="callbtn">
        <img src="CallBtn.svg" alt="Call" />
      </a>
      <div className="options">
        <a href="#aboutus" id="option">
          О нас
        </a>
        <a href="#waychoose" id="option">
          Курсы
        </a>
        <a href="#ourteachers" id="option">
          Учителя
        </a>
        <a href="#comments" id="option">
          Отзывы
        </a>
        <a href="#contacts" id="option">
          Контакты
        </a>
      </div>
      <a href="tel:+998908052935" className="call">
        Связаться <img className="call" src="right-arrow.png" alt="." />
      </a>
    </ThemeAppHeader>
  );
};
