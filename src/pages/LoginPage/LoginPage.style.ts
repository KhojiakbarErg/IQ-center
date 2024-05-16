import styled from "styled-components";

export const ThemeLogin = styled.div`
  display: flex;
  background: #00000c;
  background-position: cover;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  .inputsgroup {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1;
    margin: 0;
  }

  .btnsgroup {
    display: flex;
    gap: calc(4.53vw + 10px);
    z-index: 1;
    margin: 0;
    justify-content: center;
  }

  h1 {
    font-size: calc(3.14vw + 16px);
    width: calc(36vw + 188px);
    text-align: center;
    margin: 0;
    z-index: 1;
    font-family: "Actay";
    color: #fff;
  }

  button {
    width: calc(12.3vw + 45px);
    font-size: calc(1vw + 8px);
    height: calc(2.1vw + 38.3px);

    margin-top: 1.5rem;

    z-index: 1;
  }

  img {
    width: calc(27.5vw + 147px);
    position: absolute;
    top: -10em;
    right: 0;
    z-index: 0;
  }
`;

export const ThemeHappy = styled.div`
  display: flex;
  background: #00000c;
  background-position: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  text-align: center;
  color: #fff;
  padding: 75px;
  padding-top: 30px;
  h1 {
    text-align: center;
    font-family: "Actay";
    margin: 0;

    font-size: calc(4.14vw + 13px);
    width: calc(36vw + 188px);
    z-index: 1;

    b {
      background: linear-gradient(73deg, #dd0eff 0%, #3c64f1 89.97%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  p {
    font-size: calc(1vw + 12px);
    width: calc(24.6vw + 238px);
    z-index: 1;
    font-family: "Actay";
  }

  button {
    width: calc(21.5vw + 237px);
    margin: 0;
    margin-bottom: 15px;
    z-index: 1000;
  }

  img {
    width: calc(27.5vw + 147px);
    position: absolute;
    top: -50px;
    right: 0;
    z-index: 0;
  }

  @media (max-height: 390px) {
    button {
      height: 55px;
    }
  }
  @media (max-height: 360px) {
    button {
      height: 40px;
      font-size: 17px;
    }
  }
`;
