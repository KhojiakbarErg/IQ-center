import styled from "styled-components";

// type StyledInput = {
//   isError?: boolean;
// };

export const ThemeAppInput = styled.input`
  margin: 10px 0;
  font-family: "Actay";
  padding: 12px 20px;
  border: 2px solid transparent;
  border-radius: 15px;
  color: #fff;
  background: #00000c;
  border-color: #fff;
  box-shadow: 0;
  transition: 550ms;

  &:hover {
    border: 2px solid transparent;

    border-color: lightblue;
  }

  &:is(:focus, :active) {
    border-color: #00000c;
  }

  width: calc(29.77vw + 108px);
  font-size: calc(1vw + 7px);

  @media (max-height: 400px) {
    margin: 3px 0;
    padding: 5px 10px;
    border: 1px solid transparent;
    border-color: #fff;
    border-radius: 8px;
  }
`;

export const ThemeAppInputPress = styled.input`
  margin: 10px 0;
  font-family: "Actay";
  padding: 25px 30px;
  padding-bottom: 15px;
  border: 0;
  border-bottom: 2px solid transparent;
  border-radius: 0;
  color: #111;
  background: 0;
  border-color: #000;
  box-shadow: 0;
  margin: 0 auto;
  transition: 550ms;
  margin-bottom: 10px;

  &:hover {
    border-bottom: 2px solid transparent;

    border-bottom-color: blue;
  }

  &:is(:focus, :active) {
    border-bottom-color: #00000c;
  }

  width: calc(19.77vw + 108px);
  font-size: calc(1vw + 4px);

  @media (max-height: 400px) {
    margin: 3px 0;
    padding: 5px 10px;
    border: 1px solid transparent;
  }
`;
// export const ThemeInputError = styled.span<StyledInput>`
//   ${(props) => props.isError && `color: red`}
// `;
