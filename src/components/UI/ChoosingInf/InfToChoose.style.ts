import styled from "styled-components";

export const ThemeInfToChoose = styled.div`
  h2 {
    color: rgb(255, 255, 255);
    font-family: "Actay";
    font-size: 80px;
    margin: 0;
    margin-bottom: 30px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      display: flex;
      align-items: center;
      color: rgb(255, 255, 255);
      font-family: "Actay";
      font-size: 40px;
      margin-bottom: 60px;
      width: 600px;
      img {
        width: 34px;
        height: 34px;
        margin-right: 16px;
      }
    }
  }

  #boxOfWay {
    display: flex;
    justify-content: space-between;
  }

  h4 {
    color: rgb(255, 255, 255);
    font-family: "Actay";
    font-size: 64px;
    font-weight: 700;
    margin: 0;
  }

  img {
    opacity: 0.6;
  }
`;
