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
// export const ThemeInputError = styled.span<StyledInput>`
//   ${(props) => props.isError && `color: red`}
// `;
