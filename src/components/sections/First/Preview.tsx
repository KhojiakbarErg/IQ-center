import React from "react";
import { ThemePreview } from "./Preview.style";
import { AppButton, MoreInfBtn } from "../../UI/AppButton/AppButton";
import { Acceptense } from "../../UI/Acceptense/Acceptense";

export const Preview = () => {
  return (
    <ThemePreview>
      <div className="preview">
        <div className="label">
          <img src="study.png" alt="" className="labelImg" id="study" />
          <img
            src="interactive.png"
            alt=""
            className="labelImg"
            id="interactive"
          />
          <img src="way.png" alt="" className="labelImg" id="way" />
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
            <AppButton value=""></AppButton>
            <MoreInfBtn value="Подробнее" />
          </div>
        </div>
      </div>
      <div className="rating">
        <Acceptense />
      </div>
      <div className="FirstGradient">
        <img src="Blackback.png" alt="" className="Blackback" />
        <img src="Gradient1.png" alt="" className="Gradient1" />
      </div>
      <div className="SecondGradient">
        <img src="Gradient2.png" alt="" className="Gradient2" />
      </div>
    </ThemePreview>
  );
};
