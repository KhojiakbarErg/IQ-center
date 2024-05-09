import React from "react";
import {
  AppButton,
  AppButtonNoLink,
  MoreInfBtn,
} from "../../components/UI/AppButton/AppButton";
import { ThemeLogin } from "./LoginPage.style";
import { AppInput } from "../../components/UI/AppInput/AppInput";
import { Link, useNavigate } from "react-router-dom";

export const WelcomePage = () => {
  const navigate = useNavigate();

  const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    let formData = new FormData(event.target);
    const data = Object.fromEntries(formData);

    data.name = data.firstname + " " + data.lastname;
    delete data.firstname;
    delete data.lastname;

    const response = await fetch("https://admin.iqcenter.uz/api/apply", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    response.json().then((data) => {
      if (response.ok) {
        navigate("/congratulations");
      } else {
        alert("Что-то пошло не так");
      }
    });
  };

  return (
    <ThemeLogin>
      <h1>Запишитесь на пробный урок</h1>
      <form onSubmit={handleSubmit}>
        <div className="inputsgroup">
          <AppInput
            required
            name="firstname"
            type="username"
            inputPlaceholder="Имя"
          />
          <AppInput
            required
            name="lastname"
            type="usersurname"
            inputPlaceholder="Фамилия"
          />
          <AppInput
            required
            name="phone"
            type="tel"
            inputPlaceholder="Телефон"
          />
          <AppInput
            required
            name="username"
            type="telegid"
            inputPlaceholder="Тег телеграмм"
          />
        </div>
        <div className="btnsgroup">
          <Link to="/">
            <MoreInfBtn value="Назад"></MoreInfBtn>
          </Link>
          <AppButtonNoLink value="Дальше" type="submit"></AppButtonNoLink>
        </div>
      </form>
      <img id={"applyFormBtn"} src="Gradient1.png" alt="" />
    </ThemeLogin>
  );
};
