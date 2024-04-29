import React from "react";
import { ThemeLogin } from "./LoginPage.style";
import { AppInput } from "../../components/UI/AppInput/AppInput";
import { AppButton, MoreInfBtn } from "../../components/UI/AppButton/AppButton";
import { Link } from "react-router-dom";

export const Login2 = () => {
  return (
    <ThemeLogin>
      <h1>Запишитесь на пробный урок</h1>
      <form action="">
        <div className="inputsgroup">
          <AppInput type="username" inputPlaceholder="Телефон" />
          <AppInput type="usersurname" inputPlaceholder="Тег телеграмм" />
        </div>
        <div className="btnsgroup">
          <Link to="/welcome">
            <MoreInfBtn value="Назад"></MoreInfBtn>
          </Link>
          <AppButton value="Дальше" to="/congratulations"></AppButton>
        </div>
      </form>
    </ThemeLogin>
  );
};
