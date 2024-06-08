import React, { useState } from "react";
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
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const data: { [key: string]: any } = Object.fromEntries(formData.entries());

    data.name = `${data.firstname} ${data.lastname}`;
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

      const result = await response.json();
      if (response.ok) {
        navigate("/congratulations");
      } else {
        alert("Что-то пошло не так");
      }
    } catch (error) {
      alert("Произошла ошибка при отправке формы");
    } finally {
      setIsSubmitting(false);
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
            type="text"
            inputPlaceholder="Имя"
          />
          <AppInput
            required
            name="lastname"
            type="text"
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
            type="text"
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
            isDisabled={isSubmitting}
          ></AppButtonNoLink>
        </div>
      </form>
      <img id={"applyFormBtn"} src="Gradient1.png" alt="" />
    </ThemeLogin>
  );
};
