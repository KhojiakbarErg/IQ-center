import styled from "styled-components";

export const ThemeInfToChoose = styled.div`
  h2 {
    color: rgb(255, 255, 255);
    font-family: "Actay";
    font-size: calc(2.8vw + 26px);
    margin: 0;
    margin-bottom: 30px;
    width: calc(27.6vw + 262px);
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
      font-size: calc(0.9vw + 23px);
      margin-bottom: calc(2.8vw + 32px);
      margin-top: calc(2.8vw + 32px);
      width: calc(12.7vw + 428px);
      img {
        width: 34px;
        height: 34px;
        margin-right: 10px;
      }
    }
  }

  #boxOfWay {
    display: flex;
    gap: calc(27.9vw - 256px);
  }

  h4 {
    color: rgb(255, 255, 255);
    font-family: "Actay";
    font-size: calc(1.6vw + 34px);
    width: calc(35.7vw - 75.7px);
    font-weight: 700;
    margin: 0;
  }

  @media (max-width: 955px) {
    position: relative;

    h2 {
      font-size: calc(5.39vw - 0.25px);
      width: calc(74.73vw - 3.25px);
    }
    ul {
      li {
        font-size: calc(2.46vw + 6px);
        margin: calc(3.85vw + 1px) 0;
        width: calc(50vw + 87px);
        img {
          width: calc(2.9vw + 4px);
          height: auto;
          margin-right: 10px;
        }
      }
    }
  }
`;
