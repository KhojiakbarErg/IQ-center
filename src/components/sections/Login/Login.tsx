import React from "react";
import { ThemeLogin } from "./Loginstyle.style";
import { AppInput } from "../../UI/AppInput/AppInput";
import { AppButton, MoreInfBtn } from "../../UI/AppButton/AppButton";

export const Login = () => {
  return (
    <ThemeLogin>
      <h1>Запишитесь на пробный урок</h1>
      <form action="">
        <div className="inputsgroup">
          <AppInput type="username" inputPlaceholder="Имя" />
          <AppInput type="usersurname" inputPlaceholder="Фамилие" />
        </div>
        <div className="btnsgroup">
          <MoreInfBtn value="Назад"></MoreInfBtn>
          <AppButton value="Готово"></AppButton>
        </div>
      </form>
    </ThemeLogin>
  );
};
