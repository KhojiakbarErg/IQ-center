import React from "react";
import { ThemeWayChoose } from "./WayChoose.style";
import { InfToChoose, InfToChooseSec } from "../../UI/ChoosingInf/InfToChoose";

export const WayChoose = () => {
  return (
    <ThemeWayChoose id="waychoose">
      <h1>
        Выбери свой <b>путь</b>
      </h1>
      <div>
        <InfToChoose
          name="Групповые занятия"
          property1="Школьная программа"
          property2=" Подготовка в AL WIUT"
          property3="Подготовка к DTM"
          property4="Подготовка в зарубежные вузы (Вест, Инха, Турин)"
          image="WayImg1.png"
          duration="9 месяцев"
          className="FirstWay"
        />
        <div id="brmain">
          <div id="br"></div>
        </div>

        <InfToChooseSec
          name="Индивидуальные занятия"
          property1="1 на 1 с учителем"
          property2="Индивидуальная прграмма"
          property3="12 занятий в месяц"
          image="WayImg2.png"
          duration="6 месяцев"
          className="SecondWay"
        />
        <div id="brmain">
          <div id="br"></div>
        </div>

        <InfToChoose
          name="IQ Kids"
          property1="Группы до 10 детей"
          property2=" Творческое развитие"
          property3="Ментальная арифметика"
          property4="Интерактивное обучение"
          image="WayImg3.png"
          duration="9 месяцев"
          className="ThirdWay"
        />
      </div>
    </ThemeWayChoose>
  );
};
