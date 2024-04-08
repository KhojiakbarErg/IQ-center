import React from "react";
import { ThemePreview } from "./Preview.style";
import { AppButton } from "../../UI/AppButton/AppButton";

export const Preview = () => {
  return (
    <ThemePreview>
      <div className="preview">
        <div className="label">
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
          <AppButton value="" className="enter">
            <p>Записаться</p>
          </AppButton>
        </div>
      </div>
      <div className="rating">
        <p className="rate">100%</p>
        <p className="p">Поступаемости</p>
      </div>
    </ThemePreview>
  );
};
