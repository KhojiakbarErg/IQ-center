import styled from "styled-components";

export const ThemeAppHeader = styled.div`
  margin: 0;
  padding: 0;
  #logo {
    width: 78px;
    height: 76px;
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  }
  span {
    font-family: "Actay";
    font-size: 30px;
    line-height: 30px;
    padding: 0 32.5px;
    color: #ffffff;
  }
  a {
    font-family: "Actay";
    font-size: 30px;
    line-height: 30px;
    color: #ffffff;
    position: relative;
    top: -5px;
    right: -8px;
    text-decoration: none;
    &:hover {
      color: lightgray;
    }
    img {
      width: 33px;
      height: 33px;
      position: relative;
      top: 9px;
      right: 10px;
    }
  }

  #options {
    display: flex;
    flex-direction: row;
  }
  display: flex;
  flex-direction: row;
  padding: 15px 110px;

  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 12, 0.8);
  z-index: 100;
`;
