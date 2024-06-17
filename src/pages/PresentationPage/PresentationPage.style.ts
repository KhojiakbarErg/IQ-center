import styled from "styled-components";

export const ThemePresentationPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  text-align: left;
  background: #00000c;
  background-position: 100%;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
  color: #fff;
  padding: 120px 122px;
`;

export const Title = styled.h1`
  background: linear-gradient(45deg, #dd0eff 0%, #3c64f1 89.97%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  //TODO:Поставить шрифт
  font-family: sans-serif;
  text-transform: lowercase;
  font-size: 115px;
  width: 903px;
  z-index: 1;
  margin: 0;
  padding: 0;
`;

export const Subtitle = styled.p`
  //TODO:Поставить шрифт

  color: #fff;
  font-size: 28px;
  margin-top: 0;
  z-index: 1;
`;

export const Quote = styled.p`
  //TODO:Поставить шрифт

  color: #fff;
  font-size: 28px;
  margin: 45px 0;
  z-index: 1;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 730px;
  height: 78px;
  #backBtn {
    border-radius: 28px;
    width: 730px;
    height: 78px;
    background: #00000c;
    position: absolute;
    z-index: 1;
  }

  #borderBtn {
    background: linear-gradient(90deg, #ff00e0, #7500ff) #1c1c1c;
    width: 734px;
    height: 82px;
    border-radius: 28px;

    position: absolute;
    z-index: 0;
  }
`;

export const Button = styled.button<{ primary?: boolean }>`
  background: ${({ primary }) =>
    primary ? "linear-gradient(90deg, #ff00e0, #7500ff)" : "#1c1c1c"};
  color: white;
  border: none;
  padding: 15px 25px;
  height: 78px;
  transition: 550ms;
  font-family: sans-serif;
  font-weight: 500;
  font-size: 24px;
  cursor: pointer;
  z-index: 2;
  transition: background-color 0.3s ease, opacity 0.3s ease;
  border-top-right-radius: 28px;
  border-bottom-right-radius: 28px;
  ${({ primary }) =>
    primary &&
    "border-top-left-radius: 26px; border-bottom-left-radius: 26px; width: 497px;"}
  ${({ primary }) => !primary && "background:  0; width: 233px; "}

  &:hover {
    opacity: 0.85;
  }
`;

export const Gradient1 = styled.img`
  width: 700px;
  height: 1008px;
  position: fixed;
  top: -150px;
  right: -50px;
  z-index: 0;
`;
export const Gradient2 = styled.img`
  width: 600px;
  height: 600px;
  position: fixed;
  bottom: -200px;
  left: -200px;
  z-index: 0;
`;

export const Gradient1pre = styled.img`
  width: 700px;
  height: 1008px;
  position: fixed;
  top: -350px;
  left: -50px;
  z-index: 0;
  rotate: -90deg;
  border-radius: 60%;
`;

export const Gradient2pre = styled.img`
  width: 700px;
  height: 900px;
  position: fixed;
  bottom: -350px;
  right: -100px;
  z-index: 0;
  rotate: 45deg;
  border-radius: 60%;
`;

export const OwnerPlace = styled.img`
  width: 570px;
  height: 520px;
  position: absolute;
  right: 120px;
  bottom: 57px;
  z-index: 1;
`;

export const Owner = styled.img`
  width: 566px;
  height: 750px;
  position: absolute;
  right: 120px;
  bottom: 55px;
  z-index: 1;
`;

export const PresentationItSelf = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: 0;
  right: 0;

  background: #00000c;
  background-position: 100%;
  width: 100%;
  height: 100%;
  color: #fff;

  #slide1 {
    font-size: 81px;
    letter-spacing: 2%;
    width: 1000px;
    height: 730px;
    text-align: center;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1;

    h1 {
      z-index: 0;
      margin: 0;
    }

    b {
      background: linear-gradient(
        73.64deg,
        rgb(221, 14, 255),
        rgb(60, 100, 241)
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }
  }

  #slide2 {
    height: 730px;
    background: #00000c;
    background-position: 100%;
    margin: 0;
    display: flex;
    max-height: 730px;

    h1 {
      margin: 0;
      font-size: 90px;
      width: 650px;
      margin-top: 100px;
      margin-left: 270px;
      z-index: 1;
    }

    img {
      width: 504px;
      height: 730px;
      z-index: 1;
      max-height: 730px;
    }

    .logo {
      width: 120px;
      height: 120px;
      position: absolute;
      margin-top: 0px;
      right: 50px;
      z-index: 1;
    }
  }

  #slide3 {
    padding: 0 120px;
    background: #00000c;
    background-position: 100%;
    margin: 0;
    height: 730px;

    .ThirdSpec {
      max-width: 550px;
      margin-right: 200px;
      z-index: 1;
    }

    .SecondSpec {
      margin-top: -100px;
      max-height: 720px;
      z-index: 1;
    }

    h3 {
      font-size: 44px;
      max-width: 850px;
      position: absolute;
      right: 120px;
      text-align: right;
      margin-top: -150px;
      z-index: 1;
    }

    .logo {
      width: 120px;
      height: 120px;
      margin-top: 40px;
      position: absolute;
      right: 50px;
      z-index: 2;
    }
  }

  #slide4 {
    background: #00000c;
    background-position: 100%;
    height: 730px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 130px;

    .logo {
      width: 120px;
      height: 120px;
      margin: 0 auto;
      margin-top: 70px;
      z-index: 1;
    }

    h1 {
      margin: 0;
      font-size: 90px;
      z-index: 1;
    }
  }

  #slide5 {
    background: #00000c;
    background-position: 100%;
    height: 730px;
    display: flex;
    padding-left: 150px;
    max-height: 730px;
    display: flex;
    gap: 150px;
    z-index: 1;

    div {
      z-index: 1;
    }

    .logo {
      width: 120px;
      height: 120px;
      position: absolute;
      left: 50px;
      margin-top: 30px;
      z-index: 1;
    }

    #FirstTeacher {
      width: 525px;
      z-index: 1;
      display: flex;
      margin-top: -30px;
    }

    .TeacherInf {
      display: flex;
      flex-direction: column;
      padding-top: 30px;
    }

    h1 {
      font-size: 65px;
      margin: 0;
    }

    h4 {
      font-size: 25px;
      background: #fff;
      color: #000000;
      border-radius: 32px;
      width: 550px;
      text-align: center;
      padding: 15px;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    li {
      width: 700px;
      font-size: 23px;
      margin: 30px 0;
      display: flex;
      flex-direction: row;
      align-items: end;
    }
  }

  #slide6 {
    background: #00000c;
    background-position: 100%;
    height: 730px;
    display: flex;
    padding-left: 150px;
    max-height: 730px;
    display: flex;
    gap: 150px;
    z-index: 1;
    div {
      z-index: 1;
    }

    .logo {
      width: 120px;
      height: 120px;
      position: absolute;
      right: 50px;
      margin-top: 30px;
      z-index: 1;
    }

    #SecondTeacher {
      width: 525px;
      z-index: 1;
      display: flex;
      margin-top: -60px;
    }

    .TeacherInf {
      display: flex;
      flex-direction: column;
      padding-top: 140px;
    }

    h1 {
      font-size: 65px;
      margin: 0;
    }

    h4 {
      font-size: 25px;
      background: #fff;
      color: #000000;
      border-radius: 32px;
      width: 550px;
      text-align: center;
      padding: 15px;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    li {
      width: 700px;
      font-size: 23px;
      margin: 30px 0;
      display: flex;
      flex-direction: row;
      align-items: end;
      img {
        padding-bottom: 3%;
      }
    }
  }

  #slide7 {
    background: #00000c;
    background-position: 100%;
    height: 730px;
    display: flex;
    padding-left: 200px;
    max-height: 730px;
    display: flex;
    gap: 150px;
    z-index: 1;

    div {
      z-index: 1;
    }

    .logo {
      width: 120px;
      height: 120px;
      position: absolute;
      left: 50px;
      margin-top: 30px;
      z-index: 1;
    }

    #ThirdTeacher {
      width: 525px;
      z-index: 1;
      display: flex;
      margin-top: -50px;
    }

    .TeacherInf {
      display: flex;
      flex-direction: column;
      padding-top: 13%;
    }

    h1 {
      font-size: 65px;
      margin: 0;
    }

    h4 {
      font-size: 25px;
      background: #fff;
      color: #000000;
      border-radius: 32px;
      width: 550px;
      text-align: center;
      padding: 15px;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    li {
      width: 700px;
      font-size: 23px;
      margin: 30px 0;
      display: flex;
      flex-direction: row;
      align-items: end;
      img {
        padding-bottom: 3%;
      }
    }
  }

  #slide8 {
    background: #00000c;
    background-position: 100%;
    height: 730px;
    display: flex;
    padding-left: 150px;
    max-height: 730px;
    display: flex;
    gap: 150px;
    z-index: 1;
    div {
      z-index: 1;
    }

    .logo {
      width: 120px;
      height: 120px;
      position: absolute;
      right: 50px;
      margin-top: 30px;
      z-index: 1;
    }

    #FourthTeacher {
      width: 525px;
      z-index: 1;
      display: flex;
      margin-top: -30px;
    }

    .TeacherInf {
      display: flex;
      flex-direction: column;
      padding-top: 140px;
    }

    h1 {
      font-size: 65px;
      margin: 0;
    }

    h4 {
      font-size: 25px;
      background: #fff;
      color: #000000;
      border-radius: 32px;
      width: 550px;
      text-align: center;
      padding: 15px;
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    li {
      width: 700px;
      font-size: 23px;
      margin: 30px 0;
      display: flex;
      flex-direction: row;
      align-items: end;
      img {
        padding-bottom: 9%;
      }
      .sec {
        padding-bottom: 1%;
      }
    }
  }

  #slide9 {
    background: #00000c;
    background-position: 100%;
    height: 730px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 130px;

    .logo {
      width: 120px;
      height: 120px;
      margin: 0 auto;
      margin-top: 70px;
      z-index: 1;
    }

    h1 {
      margin: 0;
      width: 1000px;
      font-size: 90px;
      z-index: 1;
      text-align: center;
    }
  }

  #slide10,
  #slide11,
  #slide12,
  #slide13,
  #slide14 {
    background: #00000c;
    background-position: 100%;
    margin: 0;
    height: 730px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      width: 75%;
      z-index: 1;
    }

    .galochka1 {
      position: absolute;
      width: 550px;
      z-index: 0;
      right: 0;
    }

    .galochka2 {
      width: 550px;
      z-index: 0;
      position: absolute;
      left: 0;
    }
  }

  .register {
    background: #00000c;
    background-position: 100%;
    margin: 0;
    height: 330px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 5px solid white;
    border-right: 0;
    border-left: 0;
    z-index: 1;
    gap: 50px;
    padding: 100px 0;

    h2 {
      font-size: 50px;
      z-index: 1;
    }

    .btns {
      color: white;
      background: 0;
      border: 2px solid white;
      border-radius: 15px;
      padding: 25px 35px;
      margin: 25px;
      z-index: 2;
      font-size: 25px;
      transition: 550ms;

      &:hover {
        background: #fff;
        color: #00000c;
      }
    }
  }

  #formsubmit {
    background: #222;
    position: relative;
    display: flex;
    padding: 70px 150px;
    gap: 15%;
    justify-content: space-between;

    #left_footer {
      display: flex;
      flex-direction: column;

      h1 {
        margin: 0;
        font-size: 68px;
        text-align: left;
        width: 500px;
        margin-bottom: 50px;
      }

      ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 40px;
      }

      li {
        font-size: 25px;
        img {
          width: 32px;
          margin-bottom: -5px;
        }
        b {
          font-size: 28px;
        }
      }
    }

    #right_footer {
      background: #fdf5e6;
      padding: 80px 70px;
      border-radius: 30px;
      display: flex;
      flex-direction: column;
      align-items: center;

      h2 {
        font-size: 50px;
        margin: 0;
        color: #222;
      }

      .inputsgroup {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

      .btnback {
        border: 2px solid #111;
        color: #111;
        width: calc(8.9vw + 89px);
        height: calc(2.1vw + 38.3px);

        padding: 0;
        margin: 0;
        font-weight: 600;
        font-size: calc(1.1vw + 7px);
        position: relative;
        text-align: center;

        &:hover {
          background: #111;
          color: #fff;
        }
      }

      .btnsgroup {
        display: flex;
        position: relative;
        height: calc(2.1vw + 38.3px);
        margin-top: 4em;
        gap: 30px;
      }

      .btnnext {
        width: calc(8.9vw + 89px);
        height: calc(2.1vw + 38.3px);
        padding: 0;
        font-weight: 600;
        margin: 0;

        font-size: calc(1.1vw + 7px);
      }
    }
    .telnum {
      font-size: 25px;
      color: #222;
      position: relative;
      bottom: -25px;
    }
    .linkback {
      margin: 0;
      z-index: 11111;
      width: calc(8.9vw + 89px);
      height: calc(2.1vw + 38.3px);
      text-align: center;
      position: absolute;
    }
  }
`;
