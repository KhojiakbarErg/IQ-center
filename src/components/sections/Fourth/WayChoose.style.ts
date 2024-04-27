import styled from "styled-components";

export const ThemeWayChoose = styled.div`
  padding: 0 calc(16.7vw - 101px);

  b {
    background: linear-gradient(73.64deg, rgb(221, 14, 255), rgb(60, 100, 241));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  h1 {
    font-family: "Actay";
    font-size: calc(3.6vw + 27px);
    font-weight: 700;
    letter-spacing: 2px;
    margin: 0;
    margin-bottom: calc(3.3vw + 36px);
  }

  #brmain {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  #br {
    width: calc(103vw - 308px);
    height: 4px;
    border-radius: 4px;

    background: linear-gradient(
      90deg,
      rgb(197, 33, 255),
      rgb(61, 100, 241) 100%
    );
    opacity: 0.6;
    margin: calc(2.8vw + 22px) 0;
    margin-top: 0;
  }

  .FirstWay {
    #imgbox {
      width: calc(35.7vw - 84.7px);
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      img {
        height: calc(21.8vw + 72px);
      }
    }
  }

  .SecondWay {
    #imgbox {
      width: calc(35.7vw - 84.7px);
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      img {
        width: calc(17.3vw + 48px);
        height: calc(17.3vw + 48px);
      }
    }
  }

  .ThirdWay {
    #imgbox {
      width: calc(35.7vw - 84.7px);
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      img {
        height: calc(21.8vw + 72px);
      }
    }
  }
`;
