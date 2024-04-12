import styled from "styled-components";

export const ThemeAcceptense = styled.div`
  /* :root {
    --duration: 30s;
  } */

  /* transform: translate(-50%, -50%);
  font-family: "Actay";
  padding: 0;
  margin: 0;
  width: 430px;
  height: 430px;
  border-radius: 50%;
  color: white;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  .word {
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(-50%, -50%);
  }

  .letter {
    position: absolute;
    transform-origin: 0 100%;
    padding-bottom: 150px;
    font-size: 1em;
    bottom: 50%;
    left: 50%;
  } */
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;

  img {
    width: 250px;
    height: 250px;
    position: absolute;
  }

  .shape1 {
    width: 400px;
    height: 400px;
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
    width: 300px;
    height: 300px;
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
