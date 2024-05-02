import styled from "styled-components";

export const ThemeTeacherCard = styled.div`
  width: 443px;
  height: 662px;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  scroll-snap-align: start;
  position: relative;
  padding: 2px;
  margin: 50px 25px 50px 25px;
  #border {
    background: linear-gradient(45deg, #dd0eff 0%, #3c64f1 89.97%);

    border-radius: 30px;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: -1;
  }

  #teacherinfbox {
    background: #00000c;
    width: 440px;
    height: 660px;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 10;
    b {
      font-family: monospace, sans-serif;
      font-size: calc(0.5vw + 16px);
      font-weight: 1000;
      z-index: 10;
    }

    h3 {
      font-family: "Actay";
      font-size: calc(1.33vw + 22px);
      margin: 0;
      margin: calc(2.6vw + 10px) 0 5px 0px;
      z-index: 10;
    }

    p {
      margin: 0;
      font-size: calc(0.5vw + 14px);
      font-family: "Actay";
      z-index: 10;
    }

    .subject {
      background: linear-gradient(
        126.61deg,
        rgb(61, 100, 241),
        rgb(197, 33, 255)
      );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      z-index: 10;

      margin-bottom: calc(0.77vw + 5px);
    }

    .informationteach {
      width: calc(6.5vw + 255px);
      text-align: center;
    }

    #TeacherPlace {
      width: calc(7.44vw + 187px);
      height: calc(5vw + 125px);
      z-index: 10;
    }
  }

  @media (max-width: 1400px) {
    width: 385px;
    height: 529px;
    #teacherinfbox {
      width: 382px;
      height: 527px;
    }
  }

  @media (max-width: 955px) {
    width: 285px;
    height: 429px;
    z-index: 10;
    #teacherinfbox {
      width: 282px;
      height: 428px;
      #TeacherPlace {
        width: 215px;
        height: 144px;
        z-index: 10;
      }

      .informationteach {
        width: 280px;
        height: 60px;
        font-size: 16px;
        z-index: 10;
      }

      .subject {
        font-size: 16px;
        z-index: 10;
      }

      h3 {
        font-size: 36px;
        z-index: 10;
      }
    }
  }
`;
