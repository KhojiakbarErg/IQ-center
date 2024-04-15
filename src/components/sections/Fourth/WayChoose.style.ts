import styled from "styled-components";

export const ThemeWayChoose = styled.div`
  padding: 0 220px;

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

    position: relative;
    top: -50px;
  }

  .FirstWay {
    #imgbox {
      width: 500px;
      position: relative;
      top: -170px;

      h4 {
        margin-top: 54px;
        position: relative;
        right: -250px;
      }
    }
  }

  .SecondWay {
    #imgbox {
      width: 500px;
      position: relative;
      left: -130px;

      h4 {
        position: relative;
        top: -50px;
        right: -150px;
      }
      margin-bottom: 90px;
    }
  }

  .ThirdWay {
    #imgbox {
      width: 500px;
      position: relative;
      right: -300px;
      top: -50px;

      h4 {
        margin-top: 54px;
        position: relative;
        top: -100px;
        right: -100px;
      }
    }
  }
`;
