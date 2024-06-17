import { Link } from "react-router-dom";
import {
  Gradient1,
  Gradient2,
  Owner,
  ThemePresentationPage,
} from "./PresentationPage.style";
import {
  Title,
  Subtitle,
  Quote,
  ButtonsContainer,
  Button,
} from "./PresentationPage.style";

export const PresentationPage = () => {
  return (
    <ThemePresentationPage>
      <div>
        <Subtitle>Вместе мы сделаем сложное</Subtitle>
        <Title>ПРОСТЫМ И ДОСТУПНЫМ!</Title>
        <Quote>- Сергей Дмитриевич, основатель IQ Центра</Quote>
        <Link to="/presentationitself" className="link">
          <ButtonsContainer>
            <div id="borderBtn"></div>
            <div id="backBtn"></div>
            <Button primary>Скачать презентацию бесплатно📑</Button>
            <Button>Подробнее🔍</Button>
          </ButtonsContainer>
        </Link>
      </div>
      <div>
        <Owner src="Owner.png" alt="IQOwner" />
      </div>
      <Gradient1 src="Gradient1.png" alt="Decoration1" />
      <Gradient2 src="Gradient2.png" alt="Decoration2" />
    </ThemePresentationPage>
  );
};
