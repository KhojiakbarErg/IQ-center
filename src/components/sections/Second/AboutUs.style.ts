import styled from "styled-components";

export const ThemeAboutUs = styled.div`
  padding: 200px 296px;
  background-image: url("banner.png");
  background-repeat: no-repeat;
  background-size: 1600px;
  height: 679px;
  background-position: center;
  border-radius: 40px;
  margin-bottom: 75px;
  position: absolute;

  h1 {
    font-family: "Actay";
    font-weight: 700;
    font-size: 96px;
    color: #fff;
  }
  p {
    font-family: "Actay";
    font-size: 30px;
    color: rgba(255, 255, 255, 0.9);
    width: 903px;
    height: 333px;
  }
  .enter {
    display: flex;
    flex-direction: column-reverse;
    position: relative;
    top: -40px;
    right: -20px;
  }
  .AboutUsInf {
    display: flex;
    gap: 120px;
  }
  z-index: 1;
`;

export const ThemeGradient3 = styled.img`
  position: absolute;
  right: 0;
  top: 450px;
  z-index: 0;
`;

export const ThemeContainer2 = styled.div`
  position: relative;
  height: 1080px;
`;
