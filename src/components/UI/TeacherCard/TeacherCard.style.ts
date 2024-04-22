import styled from "styled-components";

export const ThemeTeacherCard = styled.div`
  width: 445px;
  height: 667px;
  background: rgb(0, 0, 12);
  border-radius: 35px;
  z-index: 1;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  scroll-snap-align: start;

  b {
    font-family: monospace, sans-serif;
    font-size: 30px;
    font-weight: 1000;
  }

  h3 {
    font-family: "Actay";
    font-size: 48px;
    margin: 0;
    margin: 60px 0 5px 0px;
  }

  p {
    margin: 0;
    font-size: 24px;
    font-family: "Actay";
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

    margin-bottom: 25px;
  }

  .informationteach {
    width: 381px;
    text-align: center;
  }

  #TeacherPlace {
    width: 329px;
    height: 222px;
  }

  #Teacher {
    width: 200px;
  }
`;

export const ThemeBoxTeachers = styled.div`
  position: relative;
  width: 445px;
  height: 667px;
  padding: 100px 40px 0 10px;

  #border {
    width: 447px;
    height: 669px;
    position: absolute;
    top: 0;
    z-index: 0;
  }
`;
