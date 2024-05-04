import React from "react";
import { ThemeSpecialQualities } from "./SpecialQualities.style";
import { QualityCard } from "../../UI/QualityCard/QualityCard";

export const SpecialQualities = () => {
  return (
    <ThemeSpecialQualities>
      <h1>Особенности обучения</h1>
      <div id="box">
        <QualityCard
          img="Quality1.svg"
          text="Мы учитываем особенности каждого студента и создаем комфортные условия для их обучения и развития."
          label="Индивидуальный подход"
        />
        <QualityCard
          img="Quality2.svg"
          text="Мы обеспечиваем комфортные условия для обучения, используя современное оборудование и удобные аудитории."
          label="Современное оборудование"
        />
        <QualityCard
          img="Quality3.svg"
          text="Наши преподаватели - Профессионалы своего дела с богатым опытом работы в сфере образования."
          label="Компентентные преподователи"
        />
        <QualityCard
          img="Quality4.svg"
          text="У нас есть различные форматы обучения, включая дневные, вечерние и онлайн курсы, чтобы каждый мог выбрать подходящий график."
          label="Гибкий график"
        />
      </div>
      <img src="Gradient4.png" alt="" className="Gradient4" />
    </ThemeSpecialQualities>
  );
};
