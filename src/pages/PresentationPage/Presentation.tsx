import React, { useEffect, useState } from "react";
import {
  Gradient1pre,
  Gradient2pre,
  PresentationItSelf,
} from "./PresentationPage.style";
import { Link, useNavigate } from "react-router-dom";
import {
  AppButtonNoLink,
  MoreInfBtn,
} from "../../components/UI/AppButton/AppButton";
import {
  AppInput,
  AppInputPresentation,
} from "../../components/UI/AppInput/AppInput";

export const Presentation = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleTelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const formattedValue = value.replace(/^\+/, "").replace(/[\(\)\-\s]/g, "");
    event.target.value = formattedValue;
  };

  const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isButtonDisabled) return;
    setIsSubmitting(true);
    setIsButtonDisabled(true);

    let formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    data.name = data.firstname + " " + data.lastname;
    delete data.firstname;
    delete data.lastname;

    try {
      const response = await fetch("https://admin.iqcenter.uz/api/apply", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      navigate("/congratulations");

      if (!response.ok) {
        alert("Что-то пошло не так");
      }
    } catch (error) {
      alert("Ошибка при отправке формы");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setIsButtonDisabled(false), 20000);
    }
  };

  useEffect(() => {
    const handleScrollIntoView = (id: any) => {
      const element = document.querySelector(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    };

    document.querySelectorAll(".register a").forEach((link) => {
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
        <div className="container">
          <img src="SecondSpec.png" alt="2" className="SecondSpec" />
          <h3>
            Такая методика позволяет эффективно освоить математику и научиться
            рационально мыслить
          </h3>
        </div>
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
      <div className="register">
        <h2>Запишитесь на пробный урок📝</h2>
        <div>
          <a href="#formsubmit" className="btns">
            Записаться📩
          </a>
        </div>
      </div>
      <div className="presentationslide" id="slide9">
        <img src="logo2.svg" alt="logo" className="logo" />
        <h1>Результаты наших учеников:</h1>
      </div>
      <div className="presentationslide" id="slide10">
        <img src="galochka1.png" alt="galochka" className="galochka1" />
        <img src="galochka2.png" alt="galochka" className="galochka2" />
        <img src="Comment1.png" alt="results" />
        <img src="Comment2.png" alt="results" />
        <img src="Comment3.png" alt="results" />
        <img src="Comment4.png" alt="results" />
      </div>
      <div className="presentationslide" id="slide11">
        <img src="galochka1.png" alt="galochka" className="galochka1" />
        <img src="galochka2.png" alt="galochka" className="galochka2" />
        <img src="Comment5.png" alt="results" />
        <img src="Comment6.png" alt="results" />
        <img src="Comment7.png" alt="results" />
        <img src="Comment8.png" alt="results" />
      </div>
      <div className="presentationslide" id="slide12">
        <img src="galochka1.png" alt="galochka" className="galochka1" />
        <img src="galochka2.png" alt="galochka" className="galochka2" />
        <img src="Comment9.png" alt="results" />
        <img src="Comment10.png" alt="results" />
        <img src="Comment11.png" alt="results" />
        <img src="Comment12.png" alt="results" />{" "}
      </div>
      <div className="presentationslide" id="slide13">
        <img src="galochka1.png" alt="galochka" className="galochka1" />
        <img src="galochka2.png" alt="galochka" className="galochka2" />
        <img src="Comment13.png" alt="results" />
        <img src="Comment14.png" alt="results" />
        <img src="Comment15.png" alt="results" />
        <img src="Comment20.png" alt="results" />{" "}
      </div>
      <div className="presentationslide" id="slide14">
        <img src="galochka1.png" alt="galochka" className="galochka1" />
        <img src="galochka2.png" alt="galochka" className="galochka2" />
        <img src="Comment16.png" alt="results" />
        <img src="Comment17.png" alt="results" />
        <img src="Comment18.png" alt="results" />
        <img src="Comment19.png" alt="results" />{" "}
      </div>

      <footer id="formsubmit">
        <div id="left_footer">
          <h1>Запишитесь на пробный урок прямо сейчас!</h1>
          <ul>
            <li>
              <b>🧮</b>Профильная математика
            </li>
            <li>
              <img src="diploma.svg" alt="diploma" />
              Помощь с поступлением
            </li>
            <li>
              <img src="science.svg" alt="science" />
              Предметы для сдачи в DTM
            </li>
          </ul>
        </div>
        <form id="right_footer" onSubmit={handleSubmit}>
          <h2>Оставьте заявку</h2>
          <div className="inputsgroup">
            <AppInputPresentation
              required
              name="firstname"
              type="username"
              inputPlaceholder="Имя"
            />
            <AppInputPresentation
              required
              name="lastname"
              type="usersurname"
              inputPlaceholder="Фамилия"
            />
            <AppInputPresentation
              required
              name="phone"
              type="tel"
              inputPlaceholder="Телефон"
              id="telnum"
              onChange={handleTelChange}
            />
          </div>
          <div className="btnsgroup">
            <MoreInfBtn value="Назад" isDisabled={false} className="btnback">
              <Link to="/" target="_blank" className="linkback"></Link>
            </MoreInfBtn>
            <AppButtonNoLink
              value="Дальше"
              type="submit"
              className="btnnext"
              isDisabled={isButtonDisabled}
            ></AppButtonNoLink>
          </div>
          <a className="telnum" href="tel:+998900146432">
            Связаться📞
          </a>
        </form>
      </footer>
    </PresentationItSelf>
  );
};
