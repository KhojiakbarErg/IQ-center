import React from "react";
import { AppButton, MoreInfBtn } from "../../components/UI/AppButton/AppButton";
import { ThemeLogin } from "./LoginPage.style";
import { AppInput } from "../../components/UI/AppInput/AppInput";
import { Link } from "react-router-dom";

export const WelcomePage = () => {
  return (
    <ThemeLogin>
      <h1>Запишитесь на пробный урок</h1>
      <form action="">
        <div className="inputsgroup">
          <AppInput type="username" inputPlaceholder="Имя" />
          <AppInput type="usersurname" inputPlaceholder="Фамилие" />
        </div>
        <div className="btnsgroup">
          <Link to="/">
            <MoreInfBtn value="Назад"></MoreInfBtn>
          </Link>
          <AppButton value="Дальше" to="/login2"></AppButton>
        </div>
      </form>
      <img src="Gradient1.svg" alt="" />
    </ThemeLogin>
  );
};
