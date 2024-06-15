import { ThemePreview } from "./Preview.style";
import { AppButton, MoreInfBtn } from "../../UI/AppButton/AppButton";
import { Acceptense } from "../../UI/Acceptense/Acceptense";
import { Link } from "react-router-dom";

export const Preview = () => {
  return (
    <ThemePreview>
      <div className="preview">
        <div className="label">
          <img src="study.png" alt="" className="labelImg" id="study" />
          <img
            src="interactive.svg"
            alt="interactive"
            className="labelImg"
            id="interactive"
          />
          <img src="way.svg" alt="" className="labelImg" id="way" />
          <h2 className="study">учись</h2>
          <h1 className="inovation">продвинутым</h1>
          <h2 className="way">путем</h2>
        </div>
        <div className="informa">
          <p className="text">
            Наш учебный центр - это современное образовательное учреждение,
            которое стремится к качественной подготовке и развитию каждого
            студента.
          </p>
          <div className="enter">
            <AppButton value="Записаться" to="/welcome"></AppButton>
            <div className="WantInf">
              <Link to="/presentation" target="_blank">
                <MoreInfBtn value="Подробнее" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="rating">
        <Acceptense />
      </div>
      <div className="FirstGradient">
        <img src="Blackback.svg" alt="" className="Blackback" />
        <img src="Gradient1.png" alt="" className="Gradient1" />
      </div>
      <div className="SecondGradient">
        <img src="Gradient2.png" alt="Gradient" className="Gradient2" />
      </div>
    </ThemePreview>
  );
};
