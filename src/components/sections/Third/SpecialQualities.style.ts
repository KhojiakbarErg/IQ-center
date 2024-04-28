import styled from "styled-components";

export const ThemeSpecialQualities = styled.div`
  padding: 0 calc(2vw + 51px);
  margin-bottom: calc(10vw + 57px);
  position: relative;

  h1 {
    color: rgb(255, 255, 255);
    font-family: "Actay";
    font-size: calc(3.6vw + 27px);
    letter-spacing: 1px;
    display: block;
  }
  #box {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: calc(-3vw + 109px);
  }

  .Gradient4 {
    position: absolute;
    right: 0;
    top: 210px;
  }

  @media (max-width: 955px) {
    padding: 30px;
    #box {
      gap: 30px;
    }
    h1 {
      font-size: calc(6.47vw - 3px);
      width: 100%;
      margin-bottom: 30px;
    }
  }
`;
