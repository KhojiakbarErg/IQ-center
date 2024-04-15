import styled from "styled-components";

export const ThemeAboutUs = styled.div`
  padding: 200px 296px;
  background-image: url("banner.png");
  background-repeat: no-repeat;
  background-size: 1600px;
  height: 679px;
  background-position: center;
  border-radius: 40px;
  z-index: 10;
  margin-bottom: 75px;

  h1 {
    font-family: "Actay";
    font-weight: 700;
    font-size: 96px;
    color: #fff;
    z-index: 10;
  }
  p {
    font-family: "Actay";
    font-size: 30px;
    color: rgba(255, 255, 255, 0.9);
    width: 903px;
    height: 333px;
    z-index: 10;
  }
  .enter {
    display: flex;
    flex-direction: column-reverse;
    position: relative;
    top: -40px;
    right: -20px;
    z-index: 10;
  }
  .AboutUsInf {
    display: flex;
    gap: 120px;
    z-index: 10;
  }

  .ThirdGradient {
    .Gradient3 {
      position: absolute;
      width: 694px;
      height: 694px;
      right: 50px;
      top: 1489px;
      z-index: 1;
    }
  }
`;
