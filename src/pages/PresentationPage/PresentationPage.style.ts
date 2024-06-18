import styled from "styled-components";

export const ThemePresentationPage = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
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
  padding: calc(35.4vh - 112px) calc(5.85vw + 7px);
  padding-bottom: calc(14.6vh - 38px);
  gap: calc(4.94vw + 5px);

  @media (max-width: 1050px) {
    gap: 0;
  }

  @media (max-width: 685px) {
    padding: calc(35.4vh - 162px) calc(5.85vw + 7px);
    gap: 70px;
    flex-direction: column;
  }
`;

export const Title = styled.h1`
  background: linear-gradient(45deg, #dd0eff 0%, #3c64f1 89.97%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  //TODO:Поставить шрифт
  font-family: sans-serif;
  text-transform: lowercase;
  font-size: calc(5.86vw + 18px);
  width: calc(41.1vw + 113.5px);
  z-index: 1;
  margin: 0;
  padding: 0;
`;

export const Subtitle = styled.p`
  //TODO:Поставить шрифт

  color: #fff;
  font-size: calc(1.6vw + 5px);
  margin: 0;
  z-index: 1;
`;

export const Quote = styled.p`
  //TODO:Поставить шрифт

  color: #fff;
  font-size: calc(1.17vw + 5.5px);
  margin: 45px 0;
  display: flex;
  z-index: 1;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(31vw + 151px);
  height: calc(12.7vh - 29px);
  @media (max-width: 1050px) {
    height: calc(12.7vh - 49px);
  }

  .link {
    background: 0;
    width: calc(31vw + 151px);
  }

  #backBtn {
    border-radius: 28px;
    width: calc(31vw + 151px);
    height: calc(12.7vh - 29px);
    background: #00000c;
    position: absolute;
    z-index: 1;
    @media (max-width: 1050px) {
      height: calc(12.7vh - 49px);
    }
  }

  #borderBtn {
    background: linear-gradient(90deg, #ff00e0, #7500ff) #1c1c1c;
    width: calc(31vw + 156px);
    height: calc(12.7vh - 25px);
    border-radius: 28px;

    position: absolute;
    z-index: 0;
    @media (max-width: 1050px) {
      height: calc(12.7vh - 45px);
    }
  }
`;

export const Button = styled.button<{ primary?: boolean }>`
  background: ${({ primary }) =>
    primary ? "linear-gradient(90deg, #ff00e0, #7500ff)" : "#1c1c1c"};
  color: white;
  border: none;
  padding: 15px 25px;
  height: calc(12.7vh - 29px);
  transition: 550ms;
  font-family: sans-serif;
  font-weight: 500;
  font-size: calc(1.1vw + 4px);
  cursor: pointer;
  z-index: 2;
  transition: background-color 0.3s ease, opacity 0.3s ease;
  border-top-right-radius: 28px;
  border-bottom-right-radius: 28px;
  ${({ primary }) =>
    primary &&
    "border-top-left-radius: 26px; border-bottom-left-radius: 26px; width: calc(20.2vw + 113px);"}
  ${({ primary }) => !primary && "background:  0; width: calc(10.8vw + 37px); "}

  &:hover {
    opacity: 0.85;
  }

  @media (max-width: 1050px) {
    height: calc(12.7vh - 47px);
    padding: 0;
  }
`;

export const Gradient1 = styled.img`
  width: 700px;
  height: 1008px;
  position: fixed;
  top: -150px;
  right: -50px;
  z-index: 0;

  @media (max-width: 1050px) {
    display: none;
  }
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
  width: calc(30.85vw + 207px);
  height: 1008px;
  position: fixed;
  top: -350px;
  left: -50px;
  z-index: 0;
  rotate: -90deg;
  border-radius: 60%;

  @media (max-width: 1400px) {
    height: 608px;
    top: -250px;
  }
`;

export const Gradient2pre = styled.img`
  width: calc(39.2vw + 82px);
  height: calc(220vh - 890px);
  position: fixed;
  bottom: -450px;
  right: -90px;
  z-index: 0;
  rotate: 85deg;
  border-radius: 60%;
  @media (max-width: 1400px) {
    height: calc(240vh - 790px);
    bottom: -290px;
  }
  @media (max-width: 1200px) {
    bottom: -390px;
  }
  @media (max-width: 700px) {
    bottom: -230px;
  }
`;

export const Owner = styled.img`
  width: calc(28.14vw + 100px);
  margin-top: -15vh;
  position: absolute;
  z-index: 1;
  @media (max-width: 1150px) {
    margin-top: -10vh;
  }
  @media (max-width: 915px) {
    width: calc(28.14vw + 50px);
    margin-top: -5vh;
  }
  @media (max-width: 685px) {
    width: calc(35.14vw + 130px);
    margin-left: 2rem;
  }
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
    font-size: calc(4.35vw + 8px);
    letter-spacing: 2%;
    width: calc(73.7vw - 11px);
    height: 100vh;
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
    background: #00000c;
    background-position: 100%;
    height: 100vh;
    display: flex;
    margin: 0;

    h1 {
      margin: 0;
      font-size: calc(4.69vw + 15px);
      width: calc(29.87vw + 98px);
      margin-top: calc(37.5vh - 165px);
      margin-left: calc(16.66vw - 20px);
      z-index: 1;
    }

    img {
      width: 500px;
      height: 350px;
      margin-top: calc(71vh - 267px);

      @media (max-width: 1500px) {
        width: 350px;
        height: 230px;
      }
      z-index: 1;
    }

    .logo {
      width: calc(8.56vw + 10px);
      height: calc(8.56vw + 10px);
      position: absolute;
      margin-top: 0px;
      right: 2rem;
      z-index: 1;
    }

    @media (max-width: 850px) {
      img {
        margin: 0;
        margin-top: 5vh;
        margin-left: 40vw;
      }
      flex-direction: column;
    }
    @media (max-width: 650px) {
      img {
        margin-top: 8vh;
        margin-left: 25vw;
        width: 290px;
        height: 200px;
      }
    }
    @media (max-width: 450px) {
      img {
        margin-top: 8vh;
        margin-left: 25vw;
        width: 230px;
        height: 155px;
      }
    }
    @media (max-width: 350px) {
      img {
        margin-top: 8vh;
        margin-left: 25vw;
        width: 200px;
        height: 135px;
      }
    }
  }

  #slide3 {
    padding: 0 calc(14.81vw - 22px);
    background: #00000c;
    background-position: 100%;
    margin: 0;
    height: 100vh;
    display: flex;
    justify-content: space-between;

    .ThirdSpec {
      width: 500px;
      height: 350px;
      margin-top: 30vh;

      @media (max-width: 1500px) {
        width: 350px;
        height: 260px;
      }
      @media (max-width: 1000px) {
        margin-top: 35vh;
        width: 270px;
        height: 210px;
      }
      @media (max-width: 650px) {
        width: 240px;
        height: 180px;
      }
      @media (max-width: 450px) {
        width: 210px;
        height: 140px;
      }

      z-index: 1;
    }

    .container {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      .SecondSpec {
        width: calc(22.22vw + 117px);

        max-height: 100vh;
        z-index: 1;
        margin-top: -10vh;
      }
      h3 {
        font-size: calc(2.22vw + 7px);
        max-width: calc(49vw + 58px);
        margin-top: -10vh;
        text-align: right;
        z-index: 1;
      }
    }

    .logo {
      width: calc(8.56vw + 10px);
      height: calc(8.56vw + 10px);
      margin-top: 10px;
      position: absolute;
      right: 2rem;
      z-index: 2;
    }

    @media (max-width: 1000px) {
      .container {
        padding: 10vh 0;
        max-width: 100vh;
        position: relative;
        left: -10vw;
        .SecondSpec {
          margin-top: -15vh;
        }
        h3 {
          margin-top: 0;
          margin-bottom: -8vh;
        }
      }
    }

    @media (max-width: 650px) {
      .container {
        left: -15vw;
      }
    }
    @media (max-width: 450px) {
      .container {
        left: -28vw;
        .SecondSpec {
          margin-top: -14vh;
        }
        h3 {
          margin-top: 0;
          margin-bottom: -1vh;
        }
      }
    }
    @media (max-width: 335px) {
      .container {
        left: -42vw;
      }
    }
  }

  #slide4 {
    background: #00000c;
    background-position: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 15vh;

    .logo {
      width: calc(8.56vw + 10px);
      height: calc(8.56vw + 10px);
      margin: 0 auto;
      margin-top: 15vh;
      z-index: 1;
    }

    h1 {
      margin: 0;
      text-align: center;
      font-size: calc(5vw + 15px);
      z-index: 1;
    }
  }

  #slide5 {
    background: #00000c;
    background-position: 100%;
    display: flex;
    padding-left: calc(10.49vw - 1.48px);
    max-height: 100vh;
    display: flex;
    gap: calc(7.49vw - 1.48px);
    z-index: 1;

    div {
      z-index: 1;
    }

    .logo {
      width: calc(7.56vw + 10px);
      height: calc(7.56vw + 10px);
      position: absolute;
      left: 2rem;
      margin-top: -5vh;
      z-index: 1;
    }

    #FirstTeacher {
      width: calc(28.53vw + 60px);
      z-index: 1;
      display: flex;
      margin-top: -5vh;
    }

    .TeacherInf {
      display: flex;
      flex-direction: column;
    }

    h1 {
      font-size: calc(3.33vw + 10px);
      margin: 0;
    }

    h4 {
      font-size: calc(1.17vw + 4px);
      background: #fff;
      color: #000000;
      border-radius: 32px;
      width: calc(21vw + 114px);
      text-align: center;
      padding: calc(0.74vw + 5.5px);
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    li {
      img {
        width: calc(2.16vw + 9px);
      }
      width: calc(37.97vw + 74px);
      font-size: calc(1.17vw + 4px);
      margin: 3.3vh 0;
      display: flex;
      flex-direction: row;
      align-items: end;
    }

    @media (max-width: 1200px) {
      #FirstTeacher {
        margin: 0;
      }
      .logo {
        margin-top: -85vh;
      }
      padding-bottom: 15vh;
      flex-direction: column;
      gap: 0;
      justify-content: center;
      align-items: center;
    }
  }

  #slide6 {
    background: #00000c;
    background-position: 100%;
    height: 100vh;
    display: flex;
    padding-left: calc(10.49vw - 1.48px);
    max-height: 100vh;
    display: flex;
    gap: calc(7.49vw - 1.48px);
    z-index: 1;

    div {
      z-index: 1;
    }

    .logo {
      width: calc(7.56vw + 10px);
      height: calc(7.56vw + 10px);
      position: absolute;
      right: 2rem;
      margin-top: 3vh;
      z-index: 1;
    }

    #SecondTeacher {
      width: calc(26.53vw + 60px);
      z-index: 1;
      display: flex;
      margin-top: -5vh;
    }

    .TeacherInf {
      display: flex;
      flex-direction: column;
      padding-top: 20vh;
    }

    h1 {
      font-size: calc(3.33vw + 10px);
      margin: 0;
    }

    h4 {
      font-size: calc(1.17vw + 4px);
      background: #fff;
      color: #000000;
      border-radius: 32px;
      width: calc(21vw + 114px);
      text-align: center;
      padding: calc(0.74vw + 5.5px);
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    li {
      img {
        width: calc(2.16vw + 9px);
        padding-bottom: 3%;
      }
      width: calc(35.97vw + 94px);
      font-size: calc(1.17vw + 4px);
      margin: 3.3vh 0;
      display: flex;
      flex-direction: row;
      align-items: end;
    }
    @media (max-width: 1200px) {
      #SecondTeacher {
        margin: 0;
        margin-bottom: -15vh;
      }
      .logo {
        margin-top: -90vh;
      }
      padding-bottom: 15vh;
      flex-direction: column-reverse;
      gap: 0;
      justify-content: center;
      align-items: center;
    }
  }

  #slide7 {
    background: #00000c;
    background-position: 100%;
    height: 100vh;
    display: flex;
    padding-left: calc(10.49vw - 1.48px);
    max-height: 100vh;
    display: flex;
    gap: calc(7.49vw - 1.48px);
    z-index: 1;
    div {
      z-index: 1;
    }
    .logo {
      width: calc(7.56vw + 10px);
      height: calc(7.56vw + 10px);
      position: absolute;
      left: 2rem;
      margin-top: 3vh;
      z-index: 1;
    }
    #ThirdTeacher {
      width: calc(26.53vw + 60px);
      z-index: 1;
      display: flex;
      margin-top: -5vh;
    }

    .TeacherInf {
      display: flex;
      flex-direction: column;
      padding-top: 20vh;
    }

    h1 {
      font-size: calc(3.33vw + 10px);
      margin: 0;
    }

    h4 {
      font-size: calc(1.17vw + 4px);
      background: #fff;
      color: #000000;
      border-radius: 32px;
      width: calc(21vw + 114px);
      text-align: center;
      padding: calc(0.74vw + 5.5px);
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    li {
      img {
        width: calc(2.16vw + 9px);
        padding-bottom: 3%;
      }
      width: calc(35.97vw + 94px);
      font-size: calc(1.17vw + 4px);
      margin: 3.3vh 0;
      display: flex;
      flex-direction: row;
      align-items: end;
    }
    @media (max-width: 1200px) {
      #ThirdTeacher {
        margin: 0;
        margin-bottom: -15vh;
      }
      .logo {
        margin-top: -80vh;
      }
      padding-bottom: 15vh;
      flex-direction: column;
      gap: 0;
      justify-content: center;
      align-items: center;
    }
  }

  #slide8 {
    background: #00000c;
    background-position: 100%;
    height: 100vh;
    display: flex;
    padding-left: calc(10.49vw - 1.48px);
    max-height: 100vh;
    display: flex;
    gap: calc(7.49vw - 1.48px);
    z-index: 1;

    div {
      z-index: 1;
    }

    .logo {
      width: calc(7.56vw + 10px);
      height: calc(7.56vw + 10px);
      position: absolute;
      right: 2rem;
      margin-top: 3vh;
      z-index: 1;
    }

    #FourthTeacher {
      width: calc(26.53vw + 60px);
      z-index: 1;
      display: flex;
      margin-top: -3vh;
    }

    .TeacherInf {
      display: flex;
      flex-direction: column;
      padding-top: 20vh;
    }

    h1 {
      font-size: calc(3.33vw + 10px);
      margin: 0;
    }

    h4 {
      font-size: calc(1.17vw + 4px);
      background: #fff;
      color: #000000;
      border-radius: 32px;
      width: calc(21vw + 114px);
      text-align: center;
      padding: calc(0.74vw + 5.5px);
    }

    ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    li {
      img {
        width: calc(2.16vw + 9px);
        padding-bottom: 9%;
      }
      .sec {
        padding-bottom: 1%;
      }
      width: calc(35.97vw + 94px);
      font-size: calc(1.17vw + 4px);
      margin: 3.3vh 0;
      display: flex;
      flex-direction: row;
      align-items: end;
    }
    @media (max-width: 1200px) {
      #FourthTeacher {
        margin: 0;
        margin-bottom: -15vh;
      }
      .logo {
        margin-top: -80vh;
      }
      padding-bottom: 15vh;
      flex-direction: column-reverse;
      gap: 0;
      justify-content: center;
      align-items: center;
    }
  }

  #slide9 {
    background: #00000c;
    background-position: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 130px;

    .logo {
      width: calc(8.56vw + 10px);
      height: calc(8.56vw + 10px);
      margin: 0 auto;
      margin-top: 15vh;
      z-index: 1;
    }

    h1 {
      margin: 0;
      width: calc(54.56vw + 86px);
      font-size: calc(5vw + 15px);
      text-align: center;
      z-index: 1;
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
    height: 100vh;
    display: flex;
    gap: 2vw;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    img {
      width: calc(16.42vw + 50px);
      z-index: 1;
    }

    .galochka1 {
      position: absolute;
      width: calc(28.33vw + 142px);
      z-index: 0;
      right: 0;
    }

    .galochka2 {
      width: calc(28.33vw + 142px);
      z-index: 0;
      position: absolute;
      left: 0;
    }
  }

  .register {
    background: #00000c;
    background-position: 100%;
    margin: 0;
    height: 50vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 5px solid white;
    border-right: 0;
    border-left: 0;
    z-index: 1;
    gap: 5vh;
    padding: 100px 0;

    h2 {
      font-size: calc(2.22vw + 9px);
      z-index: 1;
    }

    .btns {
      color: white;
      background: 0;
      border: 2px solid white;
      border-radius: 15px;
      padding: calc(6.58vh - 25px) calc(1.54vw + 17px);
      margin: 25px;
      z-index: 2;
      font-size: calc(1.1vw + 11px);
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
    padding: calc(4.1vw + 7.5px) calc(9.23vw + 2px);
    gap: 10%;
    justify-content: space-between;

    #left_footer {
      display: flex;
      flex-direction: column;

      h1 {
        margin: 0;
        font-size: calc(2.96vw + 21px);
        text-align: left;
        width: calc(22.22vw + 173px);
        margin-bottom: 5vh;
      }

      ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        flex-direction: column;
        gap: 3vh;
      }

      li {
        font-size: calc(1.18vw + 12px);
        img {
          width: calc(1.18vw + 14px);
          margin-bottom: -5px;
        }
        b {
          font-size: calc(1.18vw + 10px);
        }
      }
    }

    #right_footer {
      background: #fdf5e6;
      padding: calc(48vh - 230px) calc(4.1vw + 7.5px);
      border-radius: 30px;
      display: flex;
      flex-direction: column;
      align-items: center;

      h2 {
        font-size: calc(2vw + 19px);
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
      font-size: 20px;
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
    @media (max-width: 1200px) {
      gap: 50px;
    }
    @media (max-width: 970px) {
      flex-direction: column;
      justify-content: center;
    }
    @media (max-width: 400px) {
      padding-left: 0;
      padding-right: 0;
      padding-bottom: 0;
      #left_footer {
        padding: calc(48vh - 230px) calc(4.1vw + 7.5px);
      }
      #right_footer {
        border-radius: 0;
        h2 {
          font-size: calc(2vw + 16px);
        }
        .btnback {
          width: calc(8.9vw + 69px);
          height: calc(2.1vw + 23.3px);

          font-size: calc(1.1vw + 5px);

          &:hover {
            background: #111;
            color: #fff;
          }
        }

        .btnsgroup {
          height: calc(2.1vw + 23.3px);
          margin-top: 2em;
          gap: 15px;
        }

        .btnnext {
          width: calc(8.9vw + 69px);
          height: calc(2.1vw + 23.3px);

          font-size: calc(1.1vw + 5px);
        }

        .telnum {
          font-size: 10px;
          color: #222;
          position: relative;
          bottom: -15px;
        }
        .linkback {
          margin: 0;
          z-index: 11111;
          width: calc(8.9vw + 69px);
          height: calc(2.1vw + 23.3px);
          text-align: center;
          position: absolute;
        }
      }
    }
  }
`;
