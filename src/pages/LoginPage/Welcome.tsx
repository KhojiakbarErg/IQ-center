import React, { useState } from "react";
import { AppButton, MoreInfBtn } from "../../components/UI/AppButton/AppButton";
import { ThemeLogin } from "./LoginPage.style";
import { AppInput } from "../../components/UI/AppInput/AppInput";
import { Link } from "react-router-dom";

export const WelcomePage = () => {
  const [showUsername, setShowUsername] = useState(true);
  const [showTel, setShowTel] = useState(false);

  const handleNext = () => {
    if (showUsername) {
      setShowUsername(false);
      setShowTel(true);
    } else {
      window.location.href = "/congratulations";
    }
  };

  return (
    <ThemeLogin>
      <h1>Запишитесь на пробный урок</h1>
      <form action="">
        <div className="inputsgroup">
          {showUsername && (
            <>
              <AppInput type="username" inputPlaceholder="Имя" />
              <AppInput type="usersurname" inputPlaceholder="Фамилия" />
            </>
          )}
          {showTel && (
            <>
              <AppInput type="tel" inputPlaceholder="Телефон" />
              <AppInput type="telegid" inputPlaceholder="Тег телеграмм" />
            </>
          )}
        </div>
        <div className="btnsgroup">
          <Link to="/">
            <MoreInfBtn value="Назад"></MoreInfBtn>
          </Link>
          <AppButton value="Дальше" onClick={handleNext}></AppButton>
        </div>
      </form>
      <img src="Gradient1.svg" alt="" />
    </ThemeLogin>
  );
};
