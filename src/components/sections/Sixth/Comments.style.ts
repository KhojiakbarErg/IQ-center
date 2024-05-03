import styled from "styled-components";

export const ThemeComments = styled.div`
  position: relative;

  h1 {
    font-family: "Actay";
    font-size: calc(3.6vw + 27px);
    margin-bottom: calc(8.4vw - 8px);
    margin-top: 0;
  }

  margin-bottom: calc(5vw + 22px);

  padding: 40px calc(14.5vw - 79px);

  .container {
    display: flex;
    justify-content: center;
    gap: 100px;

    padding-bottom: 50px;
  }

  @media (max-width: 955px) {
    h1 {
      font-size: calc(6.47vw - 1px);
    }
    padding: 20px;

    .container {
      gap: 50px;
    }
  }

  #commswap {
    display: flex;
    justify-content: space-between;
    position: absolute;
    font-size: 32px;
    width: 80vw;
    bottom: 0;
    transition: 550ms;

    #previouscomm {
      color: #fff;
      background: #00000c;
      border: 0;
      font-size: 32px;
      transition: 550ms;
      &:hover {
        color: #c521ff;
      }
    }
    #nextcomm {
      color: #fff;
      border: 0;
      font-size: 32px;
      background: #00000c;
      transition: 550ms;

      &:hover {
        color: #c521ff;
      }
    }
  }
`;
