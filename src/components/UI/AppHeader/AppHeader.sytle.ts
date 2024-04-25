import styled from "styled-components";

export const ThemeAppHeader = styled.div`
  margin: 0;
  padding: 0;
  #logo {
    width: calc(3.1vw + 18px);
    height: calc(3.1vw + 16px);
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  }
  #option {
    font-family: "Actay";
    font-size: calc(1.1vw + 8.6px);
    padding: 0 calc(0.8vw + 11.5px);
    color: #ffffff;
    text-decoration: none;

    &:hover {
      color: #c521ff;
    }
  }
  .call {
    font-family: "Actay";
    font-size: calc(1.1vw + 8.6px);
    color: #ffffff;
    position: relative;
    top: -5px;
    right: -8px;
    text-decoration: none;
    &:hover {
      color: lightgray;
    }
    img {
      width: calc(0.9vw + 15.8px);
      height: calc(0.9vw + 15.8px);
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
  padding: 30px calc(5.6vw + 2.9px);
  padding-bottom: 15px;

  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 12, 0.8);
  z-index: 100;
`;
