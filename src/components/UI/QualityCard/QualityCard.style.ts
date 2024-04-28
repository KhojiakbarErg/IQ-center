import styled from "styled-components";

export const ThemeQualityCard = styled.div`
  width: 334px;
  height: 320px;

  box-shadow: 0px 0px 14.2px 7px rgba(255, 255, 255, 0.1);
  background: rgb(0, 0, 0);

  padding: 30px 23px;
  position: relative;
  z-index: 2;

  .line {
    width: 380px;
    height: 16px;
    background: rgb(161, 53, 251);
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
  }

  img {
    width: 81.76px;
    height: 81.76px;
  }

  h3 {
    color: rgb(255, 255, 255);
    font-family: "Actay";
    font-size: 25px;
    font-weight: 700;
  }

  p {
    color: rgb(255, 255, 255);
    font-family: "Actay";
    font-size: 16px;
  }

  @media (max-width: 555px) {
    width: 224px;
    height: 224px;
    padding: 20px 15px;

    .line {
      width: 254px;
      height: 10px;
    }

    img {
      width: 41px;
      height: 41px;
    }

    h3 {
      font-size: 18px;
    }

    p {
      font-size: 14px;
    }
  }
`;
