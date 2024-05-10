import styled from "styled-components";

export const ThemeMainPage = styled.div`
  background-color: #00000c;
  background-position: 100%;
  color: #ffffff;
  padding: calc(8.9vw + 98px) 0;
  padding-bottom: 0;
  height: 100%;
  width: 100%;
  position: relative;

  @media (max-width: 750px) {
    padding-top: 270px;
  }

  img {
    -webkit-user-select: none !important;
    -ms-user-select: none !important;
    user-select: none !important;
  }
`;
