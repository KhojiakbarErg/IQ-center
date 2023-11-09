import styled from "styled-components";

export const ThemeHeader = styled.div`
  padding: 10px 70px;
  margin: 0;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
`;

export const ThemeHeaderTop = styled.div`
  font-family: Arial, sans-serif;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;

  .logo {
    display: grid;
    margin: 0;
    grid-template-areas:
      "card2 "
      "card3 ";

    h1 {
      grid-area: card2;
      margin: 0;
      position: relative;
      bottom: -5px;
    }

    span {
      font-size: 20px;
      grid-area: card3;
      font-weight: 700;
      margin: 0;
      color: orange;
      position: relative;
      top: -5px;
    }
  }

  .sections {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    position: relative;
    left: -110px;
  }

  span {
    color: darkgray;
  }

  span:hover {
    color: black;
    transition: 0.5s;
  }

  .SignIn {
    position: absolute;
    right: 30px;
    display: flex;
    align-items: center;

    width: 45px;
    height: 45px;
    border-radius: 45%;
    background-color: darkgray;

    &:hover {
      transition: 0.5s;
      background-color: gray;
    }

    svg {
      width: 100%;
    }
  }

  .payFor {
    position: absolute;
    right: 130px;
    display: flex;
    align-items: center;

    width: 45px;
    height: 45px;
    border-radius: 45%;
    background-color: darkgray;

    &:hover {
      transition: 0.5s;
      background-color: gray;
    }

    svg {
      width: 100%;
    }
  }

  .cart {
    position: absolute;
    right: 80px;
    display: flex;
    align-items: center;

    width: 45px;
    height: 45px;
    border-radius: 45%;
    background-color: darkgray;

    &:hover {
      transition: 0.5s;
      background-color: gray;
    }

    svg {
      width: 100%;
    }
  }
`;

export const ThemeHeaderBottom = styled.div`
  background-color: #2f353b;
  width: 100%;
  position: absolute;
  padding-bottom: 10px;
  padding-top: 10px;
  right: 0;
  left: 0;
  height: 35px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  color: #f5f5f5;
  span {
    font-size: 20px;
    &:hover {
      opacity: 0.7;
      transition: 0.5s;
    }
  }
  div {
    width: 1.5px;
    height: 24px;
    opacity: 0.2;
    background-color: #fff;
  }
  svg {
    opacity: 0.5;
    margin-right: 7px;
  }
`;
