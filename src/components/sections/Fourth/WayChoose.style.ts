import styled from "styled-components";

export const ThemeWayChoose = styled.div`
  padding: 0 220px;

  b {
    background: linear-gradient(73.64deg, rgb(221, 14, 255), rgb(60, 100, 241));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-family: "Actay";
  }

  h1 {
    font-family: "Actay";
    font-size: 96px;
    font-weight: 700;
    line-height: 121px;
    letter-spacing: 2px;
    margin: 0;
    margin-bottom: 100px;
  }

  #br {
    width: 1480px;
    height: 5px;
    border-radius: 4px;
    background: linear-gradient(
      90deg,
      rgb(197, 33, 255),
      rgb(61, 100, 241) 100%
    );
    opacity: 0.6;
    margin: 40px 0;
  }

  .FirstWay {
    #imgbox {
      width: 500px;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }
  }

  .SecondWay {
    #imgbox {
      width: 550px;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      img {
        width: 380px;
        height: 380px;
      }
    }
  }

  .ThirdWay {
    #imgbox {
      width: 500px;
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
    }
  }
`;
