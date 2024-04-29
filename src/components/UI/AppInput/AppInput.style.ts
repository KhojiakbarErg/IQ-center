import styled from "styled-components";

// type StyledInput = {
//   isError?: boolean;
// };

export const ThemeAppInput = styled.input`
  width: 710px;
  margin: 25px 0;
  font-family: "Actay";
  padding: 20px 40px;
  border: 2px solid transparent;
  border-radius: 10px;
  font-size: 32px;
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

  @media (max-width: 1440px) {
    width: calc(29.77vw + 148px);
    padding: calc(1vw + 3.35px) calc(1.61vw + 6px);
    font-size: calc(1vw + 12px);
  }
`;
// export const ThemeInputError = styled.span<StyledInput>`
//   ${(props) => props.isError && `color: red`}
// `;
