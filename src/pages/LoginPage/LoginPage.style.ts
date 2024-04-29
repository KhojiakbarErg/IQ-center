import styled from "styled-components";

export const ThemeLogin = styled.div`
  display: flex;
  background: #00000c;
  background-position: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 75px;
  .inputsgroup {
    display: flex;
    flex-direction: column;
  }

  .btnsgroup {
    display: flex;
    gap: 100px;
    margin-top: 240px;
    justify-content: center;
  }

  h1 {
    font-size: 96px;
    width: 880px;
    text-align: center;
    font-family: "Actay";
    color: #fff;
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
  h1 {
    font-size: 96px;
    width: 880px;
    text-align: center;
    font-family: "Actay";
    margin: 0;
    b {
      background: linear-gradient(73deg, #dd0eff 0%, #3c64f1 89.97%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  p {
    font-size: 32px;
    width: 710px;
    font-family: "Actay";
  }

  button {
    width: 600px;
    margin: 50px 0;
  }
`;
