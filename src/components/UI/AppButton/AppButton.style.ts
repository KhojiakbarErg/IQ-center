import styled from "styled-components";

export const ThemeAppButton = styled.button`
  width: calc(8.9vw + 129px);
  height: calc(2.1vw + 48.3px);
  padding: 0;
  font-weight: 700;
  font-size: calc(1.1vw + 14px);
  color: #000;
  font-family: "Actay";
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 39px;
  background: linear-gradient(
    125.75deg,
    rgb(197, 33, 255) 2.976%,
    rgb(87, 94, 242) 101.304%
  );

  #registertext {
    width: calc(2vw + 130px);
  }

  border: 0;
  overflow: hidden;
  transition: 1s;

  &:hover {
    filter: hue-rotate(15deg);
  }

  @media (max-width: 955px) {
    width: calc(6vw + 158px);
  }
`;

export const ThemeMoreInfBtn = styled.button`
  width: calc(8.9vw + 129px);
  height: calc(2.1vw + 48.3px);
  padding: 0;
  font-weight: 700;
  font-size: calc(1.1vw + 11px);
  font-family: "Actay";
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  padding: 0;
  background-color: rgba(0, 0, 0, 0);
  border: 3px solid rgba(255, 255, 255);
  border-radius: 39px;
  transition: 550ms;

  &:hover {
    background-color: rgba(256, 256, 256, 0.85);
    color: #000;
  }
`;

export const ThemeAppButtonTwo = styled.button`
  width: calc(8.9vw + 129px);
  height: calc(2.1vw + 48.3px);
  padding: 0;
  font-weight: 700;
  font-size: calc(1.1vw + 11px);
  font-family: "Actay";
  display: flex;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  color: #fff;
  padding: 0;
  background-color: rgba(0, 0, 0, 0);
  border: 2px solid rgba(255, 255, 255, 0.9);
  border-radius: 15px;
  transition: 550ms;

  &:hover {
    background-color: rgba(256, 256, 256, 0.85);
    color: #000;
  }
  @media (max-width: 955px) {
    width: 80%;
  }
`;
