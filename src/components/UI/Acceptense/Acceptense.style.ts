import styled from "styled-components";

export const ThemeAcceptense = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  margin-right: 40px;

  img {
    width: 200px;
    height: 200px;
    position: absolute;
  }

  .shape1 {
    width: 430px;
    height: 430px;
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
    width: 330px;
    height: 330px;
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
