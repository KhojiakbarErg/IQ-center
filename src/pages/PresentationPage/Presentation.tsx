import React from "react";
import {
  Gradient1pre,
  Gradient2pre,
  PresentationItSelf,
} from "./PresentationPage.style";

export const Presentation = () => {
  return (
    <PresentationItSelf>
      <Gradient1pre src="Gradient1.png" alt="Decoration1" />
      <Gradient2pre src="Gradient1.png" alt="Decoration2" />
      <div className="presentationslide" id="slide1">
        <h1>
          Презентация<b> о IQ центре</b>
        </h1>
      </div>
      <div className="presentationslide" id="slide2">
        <img src="logo2.svg" alt="logo" className="logo" />
        <h1>Методы обучения учеников:</h1>
        <img src="FirstSpec.png" alt="1" />
      </div>
      <div className="presentationslide" id="slide3">
        <img src="logo2.svg" alt="logo" className="logo" />
        <img src="ThirdSpec.png" alt="3" className="ThirdSpec" />
        <img src="SecondSpec.png" alt="2" className="SecondSpec" />
        <h3>
          Такая методика позволяет эффективно освоить математику и научиться
          рационально мыслить
        </h3>
      </div>
      <div className="presentationslide" id="slide4">
        <img src="logo2.svg" alt="logo" className="logo" />
        <h1>Наши преподаватели:</h1>
      </div>
      <div className="presentationslide" id="slide5">
        <img src="logo2.svg" alt="logo" className="logo" />
        <div>
          <img src="FirstTeacher.png" alt="Teacher" id="FirstTeacher" />
        </div>

        <div className="TeacherInf">
          <h1>Сергей Дмитриевич</h1>
          <h4>Стаж преподавания более 10 лет</h4>
          <ul>
            <li>
              <img src="1.png" alt="1" />
              Высшее образование — Педагогический университет, факультет
              методики преподавания математики
            </li>
            <li>
              <img src="2.png" alt="2" />
              Магистр математических наук, Высшая школа экономики
            </li>
            <li>
              <img src="3.png" alt="3" />
              Каждый год проходит повышение квалификации
            </li>
            <li>
              <img src="4.png" alt="4" />
              Имеет сертификат Westminster — прошел лекции о различных приемах
              интерактивного подхода к преподаванию
            </li>
          </ul>
        </div>
      </div>
      <div className="presentationslide" id="slide6">
        <img src="logo2.svg" alt="logo" className="logo" />

        <div className="TeacherInf">
          <h1>Улугбек Шухратович</h1>
          <h4>Стаж преподавания более 5 лет</h4>
          <ul>
            <li>
              <img src="1.png" alt="1" />
              Высшее образование — Московский государственный университет им.
              Ломоносова, факультет прикладной математики и информатики
            </li>
            <li>
              <img src="2.png" alt="2" />
              Обладает уникальной методикой преподавания, подготавливает детей к
              поступлению в любой вуз
            </li>
          </ul>
        </div>

        <div>
          <img src="SecondTeacher.png" alt="Teacher" id="SecondTeacher" />
        </div>
      </div>
      <div className="presentationslide" id="slide7">
        <img src="logo2.svg" alt="logo" className="logo" />
        <div>
          <img src="ThirdTeacher.png" alt="Teacher" id="ThirdTeacher" />
        </div>

        <div className="TeacherInf">
          <h1>Самин Тимурович</h1>
          <h4>Стаж преподавания более 3 лет</h4>
          <ul>
            <li>
              <img src="1.png" alt="1" />
              Преподаватель по математике, Университет ИНХА, факультет SOCIE
            </li>
          </ul>
        </div>
      </div>
      <div className="presentationslide" id="slide8">
        <img src="logo2.svg" alt="logo" className="logo" />

        <div className="TeacherInf">
          <h1>Камила Ильдаровна</h1>
          <h4>Стаж преподавания более 3 лет</h4>
          <ul>
            <li>
              <img src="1.png" alt="1" />
              Образование - Среднее-специальное, закончила Академический лицей
              при филиале РГУ нефте и газа им. Губкина, факультет— точные науки
              (физика, математика)
            </li>
            <li>
              <img src="2.png" alt="2" className="sec" />
              Закончила спец-курс на специальность оператор информационных
              технологий
            </li>
          </ul>
        </div>

        <div>
          <img src="FourthTeacher.png" alt="Teacher" id="FourthTeacher" />
        </div>
      </div>
      <div className="presentationslide" id="slide9">
        <img src="logo2.svg" alt="logo" className="logo" />
        <h1>Результаты наших учеников:</h1>
      </div>
      <div className="presentationslide" id="slide10">
        <img src="galochka1.png" alt="galochka" className="galochka1" />
        <img src="galochka2.png" alt="galochka" className="galochka2" />
        <img src="result1.png" alt="results" />
      </div>
      <div className="presentationslide" id="slide11">
        <img src="galochka1.png" alt="galochka" className="galochka1" />
        <img src="galochka2.png" alt="galochka" className="galochka2" />
        <img src="result2.png" alt="results" />
      </div>
      <div className="presentationslide" id="slide12">
        <img src="galochka1.png" alt="galochka" className="galochka1" />
        <img src="galochka2.png" alt="galochka" className="galochka2" />
        <img src="result3.png" alt="results" />
      </div>
      <div className="presentationslide" id="slide13">
        <img src="galochka1.png" alt="galochka" className="galochka1" />
        <img src="galochka2.png" alt="galochka" className="galochka2" />
        <img src="result4.png" alt="results" />
      </div>
      <div className="presentationslide" id="slide14">
        <img src="galochka1.png" alt="galochka" className="galochka1" />
        <img src="galochka2.png" alt="galochka" className="galochka2" />
        <img src="result5.png" alt="results" />
      </div>
    </PresentationItSelf>
  );
};
