import React, { useEffect } from "react";
import { ThemePreview } from "./Preview.style";
import { AppButton, MoreInfBtn } from "../../UI/AppButton/AppButton";
import { Acceptense } from "../../UI/Acceptense/Acceptense";

export const Preview = () => {
  useEffect(() => {
    const handleScrollIntoView = (id: string) => {
      const element = document.querySelector(id);
      if (element) {
        (element as HTMLElement).scrollIntoView({ behavior: "smooth" });
      }
    };

    document.querySelectorAll(".WantInf a").forEach((link) => {
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
    <ThemePreview>
      <div className="preview">
        <div className="label">
          <img src="study.png" alt="" className="labelImg" id="study" />
          <img
            src="interactive.svg"
            alt=""
            className="labelImg"
            id="interactive"
          />
          <img src="way.svg" alt="" className="labelImg" id="way" />
          <h2 className="study">учись</h2>
          <h1 className="inovation">продвинутым</h1>
          <h2 className="way">путем</h2>
        </div>
        <div className="informa">
          <p className="text">
            Наш учебный центр - это современное образовательное учреждение,
            которое стремится к качественной подготовке и развитию каждого
            студента.
          </p>
          <div className="enter">
            <AppButton value="Записаться" to="/welcome"></AppButton>
            <div className="WantInf">
              <a href="#aboutus">
                <MoreInfBtn value="Подробнее" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="rating">
        <Acceptense />
      </div>
      <div className="FirstGradient">
        <img src="Blackback.svg" alt="" className="Blackback" />
        <img src="Gradient1.png" alt="" className="Gradient1" />
      </div>
      <div className="SecondGradient">
        <img src="Gradient2.png" alt="Gradient" className="Gradient2" />
      </div>
    </ThemePreview>
  );
};
