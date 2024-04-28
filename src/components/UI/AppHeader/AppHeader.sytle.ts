import styled from "styled-components";

export const ThemeAppHeader = styled.div`
  margin: 0;
  padding: 0;
  #logo {
    width: calc(3.1vw + 18px);
    height: calc(3.1vw + 16px);
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  }

  #navigation {
    display: none;
  }

  #callbtn {
    display: none;
  }

  #option {
    font-family: "Actay";
    font-size: calc(1.1vw + 8.6px);
    padding: 0 calc(0.8vw + 11.5px);
    color: #ffffff;
    text-decoration: none;
    transition: 550ms;

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
  padding: 0px calc(5.6vw + 2.9px);
  height: 100px;

  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 12, 0.8);
  z-index: 100;

  @media (max-width: 955px) {
    display: grid;
    grid-template-columns: 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5%;
    grid-template-rows: 10% 10% 10% 10% 10% 10% 10% 10% 10% 10%;
    align-items: center;

    #options {
      display: none;
      width: 0;
    }

    #option {
      display: none;
      width: 0;
    }

    .call {
      display: none;
      width: 0;
    }

    #navigation {
      display: flex;
      grid-column-start: 1;
      grid-row-start: 5;
    }

    #callbtn {
      display: flex;
      grid-column-start: 20;
      grid-row-start: 5;
    }

    #logo {
      width: 55px;
      height: 55px;
      grid-column-start: 10;
      grid-row-start: 5;
    }
  }

  @media (max-width: 755px) {
    display: flex;
    justify-content: space-between;
  }
`;
