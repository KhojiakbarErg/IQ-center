import React from "react";
import { BackButton, BackButtonsContainer } from "./BackBtn.style";
import { Link } from "react-router-dom";

export const BackBtn = () => {
  return (
    <BackButtonsContainer>
      <Link to="/" className="Link">
        <BackButton>⬅️Выйти в главное меню</BackButton>
      </Link>
      <Link to="/welcome" className="Link">
        <BackButton primary>📩Записаться</BackButton>
      </Link>
      <div id="borderBackBtn"></div>
    </BackButtonsContainer>
  );
};
