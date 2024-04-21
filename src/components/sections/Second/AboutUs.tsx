import React from "react";
import { AppButton, AppButtonTwo } from "../../UI/AppButton/AppButton";
import { ThemeAboutUs, ThemeContainer2, ThemeGradient3 } from "./AboutUs.style";

export const AboutUs = () => {
  return (
    <ThemeContainer2>
      <ThemeAboutUs>
        <h1>О нас</h1>
        <div className="AboutUsInf">
          <div>
            <p>
              Наш уникальный подход к обучению базируется на индивидуальном
              подходе к каждому ученику, использовании современных технологий и
              интерактивных методик. Мы создаем комфортную и стимулирующую
              образовательную среду, где ученики не только получают знания, но и
              развивают навыки самостоятельной работы, критического мышления и
              творческого подхода к решению задач.
            </p>
          </div>
          <div className="enter">
            <AppButtonTwo value="Записаться" className="enter" />
          </div>
        </div>
      </ThemeAboutUs>
      <ThemeGradient3 src="Gradient3.png" alt="" />
    </ThemeContainer2>
  );
};
