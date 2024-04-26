import styled from "styled-components";

export const ThemeAcceptense = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  margin-right: 40px;

  img {
    width: calc(7.4vw + 58px);
    height: calc(7.4vw + 58px);
    position: absolute;
  }

  .shape1 {
    width: calc(20.2vw + 42px);
    height: calc(20.2vw + 42px);
    position: absolute;
    animation: 20s linear infinite rotate;
    @keyframes rotate {
      from {
        transform: rotate(0deg);
      }

      to {
        transform: rotate(360deg);
      }
    }
  }

  .shape2 {
    width: calc(15vw + 41px);
    height: calc(15vw + 41px);
    opacity: 0.6;
    position: absolute;
    animation: 20s linear infinite rotatesec;
    @keyframes rotatesec {
      from {
        transform: rotate(0deg);
      }

      to {
        transform: rotate(-360deg);
      }
    }
  }
`;
