import React, { useState } from "react";
import {
  AppButtonNoLink,
  MoreInfBtn,
} from "../../components/UI/AppButton/AppButton";
import { ThemeLogin } from "./LoginPage.style";
import { AppInput } from "../../components/UI/AppInput/AppInput";
import { Link, useNavigate } from "react-router-dom";

export const WelcomePage = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleTelChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const formattedValue = value.replace(/^\+/, "").replace(/[\(\)\-\s]/g, "");
    event.target.value = formattedValue;
  };

  const handleTgTagChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    const formattedValue = value.replace(/^@/, "");
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
            id="telnum"
            onChange={handleTelChange}
          />
          <AppInput
            required
            name="username"
            type="telegid"
            inputPlaceholder="Тег телеграмм"
            id="tgteg"
            onChange={handleTgTagChange}
          />
        </div>
        <div className="btnsgroup">
          <Link to="/">
            <MoreInfBtn value="Назад"></MoreInfBtn>
          </Link>
          <AppButtonNoLink
            value="Дальше"
            type="submit"
            isDisabled={isButtonDisabled}
          ></AppButtonNoLink>
        </div>
      </form>
      <img id={"applyFormBtn"} src="Gradient1.png" alt="" />
    </ThemeLogin>
  );
};
