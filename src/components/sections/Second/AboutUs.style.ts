import styled from "styled-components";

export const ThemeAboutUs = styled.div`
  padding: calc(16.7vw - 121px) calc(22.9vw - 144px);
  background-image: url("banner.png");
  background-repeat: no-repeat;
  background-size: 1700px;
  height: calc(21.3vw + 270px);
  background-position: center;
  border-radius: 40px;
  margin-bottom: 75px;
  position: absolute;

  @media (max-width: 1850px) {
    background-size: 100%;
    border-radius: none;
  }

  h1 {
    font-family: "Actay";
    font-weight: 700;
    font-size: 96px;
    color: #fff;
  }

  p {
    font-family: "Actay";
    font-size: calc(1.1vw + 9px);
    color: rgba(255, 255, 255, 0.9);
    width: calc(35.5vw + 222px);
    height: calc(0.15vw + 48px);
  }

  .register {
    display: flex;
    flex-direction: column-reverse;
  }

  .AboutUsInf {
    display: flex;
    gap: 120px;
  }
  z-index: 1;
`;

export const ThemeGradient3 = styled.img`
  position: absolute;
  right: 0;
  top: 450px;
  z-index: 0;
`;

export const ThemeContainer2 = styled.div`
  position: relative;
  height: 1080px;
`;
