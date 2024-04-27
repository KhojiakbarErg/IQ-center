import styled from "styled-components";

export const ThemeTeacherCard = styled.div`
  width: 440px;
  height: 660px;
  background: rgb(0, 0, 12);
  border-radius: 35px;
  z-index: 1;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  scroll-snap-align: start;

  b {
    font-family: monospace, sans-serif;
    font-size: calc(0.5vw + 16px);
    font-weight: 1000;
  }

  h3 {
    font-family: "Actay";
    font-size: calc(1.33vw + 22px);
    margin: 0;
    margin: calc(2.6vw + 10px) 0 5px 0px;
  }

  p {
    margin: 0;
    font-size: calc(0.5vw + 14px);
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

    margin-bottom: calc(0.77vw + 10px);
  }

  .informationteach {
    width: calc(6.5vw + 255px);
    text-align: center;
  }

  #TeacherPlace {
    width: calc(7.44vw + 187px);
    height: calc(5vw + 125px);
  }

  @media (max-height: 720px) {
    width: calc(10.35vw + 226px);
    height: calc(82.25vh + 8.5px);
  }
`;

export const ThemeBoxTeachers = styled.div`
  position: relative;
  width: 440px;
  height: 660px;
  padding: 50px 40px 0 10px;

  #border {
    width: 440px;
    height: 660px;
    position: absolute;
    top: 0;
    z-index: 0;
  }

  @media (max-height: 720px) {
    width: calc(10.35vw + 226px);
    height: calc(82.25vh + 28.5px);

    #border {
      width: calc(10.35vw + 228px);
      height: calc(82.25vh + 30.5px);
    }
  }
`;
