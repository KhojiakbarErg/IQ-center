import styled from "styled-components";

export const BackButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  border-bottom-right-radius: 28px;
  align-items: center;
  width: 650px;
  height: 68px;
  position: absolute;
  top: 0;
  left: 0;

  .Link {
    z-index: 2;
  }

  #borderBackBtn {
    background: linear-gradient(90deg, #ff00e0, #7500ff) #1c1c1c;
    width: 653px;
    height: 75px;
    border-bottom-right-radius: 28px;

    position: absolute;
    z-index: 0;
  }
`;

export const BackButton = styled.button<{ primary?: boolean }>`
  color: white;
  border: none;
  padding: 15px 25px;
  height: 68px;
  transition: 550ms;
  font-family: sans-serif;
  font-weight: 500;
  font-size: 24px;
  cursor: pointer;
  z-index: 2;
  transition: background-color 0.3s ease, opacity 0.3s ease;
  border-bottom-right-radius: 28px;
  ${({ primary }) => primary && "background: 0; width: 233px;"}
  ${({ primary }) =>
    !primary &&
    "background:  #00000f; width: 417px; border-bottom-right-radius: 28px;"}

  &:hover {
    opacity: 0.8;
  }
`;
