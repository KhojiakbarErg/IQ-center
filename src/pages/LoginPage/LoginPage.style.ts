import styled from "styled-components";

export const ThemeLogin = styled.div`
  display: flex;
  background: #00000c;
  background-position: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  padding: 75px;
  .inputsgroup {
    display: flex;
    flex-direction: column;
    z-index: 1;
  }

  .btnsgroup {
    display: flex;
    gap: 100px;
    margin-top: 140px;
    justify-content: center;
    z-index: 1;
  }

  h1 {
    font-size: 96px;
    width: 880px;
    text-align: center;
    font-family: "Actay";
    color: #fff;
    margin: 0;
    z-index: 1;
  }

  @media (max-width: 1440px) {
    /* width: 100%;
    height: 100%;
    position: fixed; */
    h1 {
      font-size: calc(4.14vw + 16px);
      width: calc(36vw + 188px);
      z-index: 1;
    }

    .btnsgroup {
      margin-top: 50px;
      gap: calc(4.53vw + 13px);
      z-index: 1;
    }
    padding: 50px;

    button {
      width: calc(12.3vw + 71px);
      font-size: calc(1vw + 13px);
      z-index: 1;
    }
  }
  img {
    width: calc(27.5vw + 147px);
    position: absolute;
    top: -50px;
    right: 0;
    z-index: 0;
  }
  .tab:not(.active){
    display:none !important;
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
    z-index: 1;

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
    z-index: 1;
  }

  button {
    width: 600px;
    margin: 50px 0;
    display: flex;
    z-index: 1000;
  }

  @media (max-width: 1440px) {
    position: fixed;
    padding-top: 30px;
    h1 {
      font-size: calc(4.14vw + 13px);
      width: calc(36vw + 188px);
      z-index: 1;
    }

    p {
      font-size: calc(1vw + 12px);
      width: calc(24.6vw + 238px);
      z-index: 1;
    }

    button {
      width: calc(21.5vw + 237px);
      margin: 0;
      margin-bottom: 30px;
      z-index: 1000;
    }
  }
  img {
    width: calc(27.5vw + 147px);
    position: absolute;
    top: -50px;
    right: 0;
    z-index: 0;
  }
`;
