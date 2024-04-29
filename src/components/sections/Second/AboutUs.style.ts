import styled from "styled-components";

export const ThemeAboutUs = styled.div`
  padding: calc(16.7vw - 121px) calc(22.9vw - 157px);
  background-image: url("banner.svg");
  background-repeat: no-repeat;
  background-size: 1700px;
  height: calc(21.3vw + 270px);
  background-position: center;
  margin: 0;
  border-radius: 40px;
  z-index: 1;

  @media (max-width: 1850px) {
    background-size: 100%;
    border-radius: none;
  }

  h1 {
    font-family: "Actay";
    font-weight: 700;
    font-size: calc(3.6vw + 27px);
    color: #fff;
  }

  p {
    font-family: "Actay";
    font-size: calc(1.1vw + 9px);
    color: rgba(255, 255, 255, 0.9);
    width: calc(35.5vw + 222px);
  }

  .register {
    display: flex;
    flex-direction: column-reverse;
    margin-top: calc(11.2vw + 10px);
    position: relative;
    left: -10px;
    height: 100%;
  }

  .AboutUsInf {
    display: flex;
    gap: 120px;
    z-index: 1;
  }
  z-index: 1;

  @media (max-width: 955px) {
    margin-top: 300px;

    display: flex;
    height: 390px;
    flex-direction: column;
    align-items: flex-start;
    background-image: url("bluraboutus.svg");
    padding: calc(16.7vw - 121px) 25px;
    padding-right: 25px;
    border-radius: 0px;
    margin-bottom: 100px;

    .register {
      display: flex;
      flex-direction: row;
      justify-content: center;
      margin-top: 30px;
      width: 100%;
    }

    .AboutUsInf {
      flex-direction: column;
      width: 100%;

      gap: 0;
    }

    h1 {
      margin-top: 25px;
      margin-bottom: 10px;
      font-size: calc(6.97vw - 1px);
    }
    p {
      margin: 0;
      font-size: 0;
      font-size: calc(1.23vw + 6px);
    }
  }

  @media (max-width: 555px) {
    height: 320px;
  }

  @media (max-width: 425px) {
    p {
      width: 300px;
    }
  }
`;

export const ThemeGradient3 = styled.img`
  position: absolute;
  right: 0;
  top: 450px;
  z-index: -1;

  @media (max-width: 1850px) {
    display: none;
  }
`;

export const ThemeContainer2 = styled.div`
  position: relative;
  z-index: 0;

  @media (max-width: 1850px) {
    background-size: 100%;
    border-radius: none;
  }
`;
