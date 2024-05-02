import React, { useEffect, useState} from "react";
import { AppButton, MoreInfBtn } from "../../components/UI/AppButton/AppButton";
import { ThemeLogin } from "./LoginPage.style";
import { AppInput } from "../../components/UI/AppInput/AppInput";
import { Link } from "react-router-dom";

export const WelcomePage = () => {
  const [secondTab, setSecondTab] = useState(false);

  const handleNext = (event: React.ChangeEvent<HTMLButtonElement>) => {
    if (secondTab == false) {
      setSecondTab(true)
    }
  };

  const handlePrev = () => {
    if (secondTab == true) {
      setSecondTab(false)
    } else {
      window.location.href = "/";
    }
  };

  const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    var formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    
    data.name = data.firstname + ' ' + data.lastname;
    delete data.firstname;
    delete data.lastname;
    
    console.log(data)
    const response = await fetch(`http://localhost:8000/api/apply`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    response.json().then(data => {
        if (data.status == 200) {
          window.location.href = "/congratulations";
          console.log('success')}
    });
  };

  useEffect(() => {
    const inputs = document.querySelectorAll('.inputsgroup input')
    inputs.forEach((inp) => {
      inp.setAttribute('required', '');
    })
  });

  return (
    <ThemeLogin>
      <h1>Запишитесь на пробный урок</h1>
      <form onSubmit={handleSubmit}>
        <div className="inputsgroup">
          <div className={"tab inputsgroup " + (secondTab == false ? 'active' : '')}>
            <AppInput name="firstname" type="username" inputPlaceholder="Имя" />
            <AppInput name="lastname" type="usersurname" inputPlaceholder="Фамилия" />
          </div>
          <div className={"tab inputsgroup " + (secondTab == true ? 'active' : '')}>
            <AppInput name="phone" type="tel" inputPlaceholder="Телефон" />
            <AppInput name="username" type="telegid" inputPlaceholder="Тег телеграмм" />
          </div>
        </div>
        <div className="btnsgroup">
          {/* <Link to="/">
            <MoreInfBtn value="Назад"></MoreInfBtn>
          </Link> */}
          <AppButton value="Назад" onClick={handlePrev}></AppButton>
          {/* <AppButton value="Дальше" onClick={handleNext}></AppButton> */}
          <MoreInfBtn value="Дальше" type={secondTab == true ? "submit" : 'button' } onClick={handleNext}></MoreInfBtn>
        </div>
      </form>
      <img  id={'applyFormBtn'} src="Gradient1.svg" alt="" />
    </ThemeLogin>
  );
};
