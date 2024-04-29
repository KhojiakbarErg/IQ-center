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
          <Link to="/login2">
            <MoreInfBtn value="Назад" to="/login2"></MoreInfBtn>
          </Link>
          <Link to="/">
            <AppButton value="Дальше" to="/"></AppButton>
          </Link>
        </div>
      </form>
    </ThemeLogin>
  );
};
