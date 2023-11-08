import { styled } from "styled-components";

export const ThemeInputMain = styled.input`
  border: 1px solid transparent;
  outline: 0;
  font-family: inherit;
  height: 40px;
  display: flex;
  width: 20vw;
  max-width: 400px;

  padding: 12px 15px;
  background-color: ${(props) => props.theme.colors.bgc};
  border-radius: 10px;
  border: 1px solid transparent;

  transition: 200ms;

  &:is(:hover, :focus) {
    border-color: ${(props) => props.theme.colors.primeColor};
  }

  @media (max-width: 730px) {
    padding: 10px 12px;
  }
  position: relative;
  left: -100px;
`;
