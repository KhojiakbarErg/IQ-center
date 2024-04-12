import React from "react";
import { ThemeAcceptense } from "./Acceptense.style";

export const Acceptense = () => {
  // const rotateBetweenWords = (value: number): void => {
  //   const words = document.querySelectorAll(".word");

  //   let deg: number = -60;

  //   for (let word of Array.from(words)) {
  //     (word as HTMLElement).style.transform = `rotate(${deg}deg)`;
  //     deg += value;
  //   }
  // };

  // // расстояние между буквами
  // const rotateBetweenLetters = (value: number): void => {
  //   const letters = document.querySelectorAll<HTMLElement>(".letter");

  //   let deg: number = 0;

  //   for (let letter of Array.from(letters)) {
  //     (letter as HTMLElement).style.transform = `rotate(${deg}deg)`;
  //     deg += value;
  //   }
  // };

  // rotateBetweenWords(50);
  // rotateBetweenLetters(12);

  return (
    <ThemeAcceptense className="wheel">
      {/* <div className="word">
        <div className="letter">1</div>
        <div className="letter">0</div>
        <div className="letter">0</div>
        <div className="letter">%</div>
      </div>
      <div className="word">
        <div className="letter">п</div>
        <div className="letter">о</div>
        <div className="letter">с</div>
        <div className="letter">т</div>
        <div className="letter">у</div>
        <div className="letter">п</div>
        <div className="letter">а</div>
        <div className="letter">е</div>
        <div className="letter">м</div>
        <div className="letter">о</div>
        <div className="letter">с</div>
        <div className="letter">т</div>
        <div className="letter">и</div>
      </div>
      <div className="word">
        <div className="letter">1</div>
        <div className="letter">0</div>
        <div className="letter">0</div>
        <div className="letter">0</div>
        <div className="letter">+</div>
      </div>
      <div className="word">
        <div className="letter">г</div>
        <div className="letter">р</div>
        <div className="letter">а</div>
        <div className="letter">н</div>
        <div className="letter">т</div>
        <div className="letter">о</div>
        <div className="letter">в</div>
      </div> */}
      <img src="shape.png" alt="shape" className="shape1" />
      <img src="shape.png" alt="shape" className="shape2" />
      <img src="Maskgroup.png" alt="звезда" />
    </ThemeAcceptense>
  );
};
