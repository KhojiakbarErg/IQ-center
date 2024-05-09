import styled from "styled-components";

export const ThemeAppHeader = styled.div`
  margin: 0;
  padding: 0;
  #logo {
    width: calc(3.1vw + 18px);
    height: calc(3.1vw + 16px);
    box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
    position: relative;
    left: -7vw;
  }

  #navigation {
    display: none;
  }

  #callbtn {
    display: none;
  }

  #option1,
  #option2,
  #option3,
  #option4,
  #option5 {
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
  #list_menu {
    display: none;
  }

  @media (max-width: 955px) {
    #nav {
      position: fixed;
      z-index: 1000;
      #list_menu {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;
        position: fixed;
        top: 0;
        left: -1000px;
        width: 55%;
        height: 70%;
        border: 2px solid #ffffff;
        border-left: 0;
        border-top: 0;
        padding: 30px 10px;
        background: rgba(0, 0, 0, 0.6);
        backdrop-filter: blur(12px);
        transition: 400ms;
        z-index: 1000;
        #backImg {
          color: #ffffff;
          display: flex;
          align-items: center;
          padding-left: 10px;
          position: absolute;
          text-align: left;
          width: 60px;
          height: 35px;
          right: 0;
          top: 20px;
          background: linear-gradient(90deg, #000000 1%, #ffffff 100%);
        }
        ul {
          list-style: none;
          padding: 0;
          margin: 0;
          transition: 400ms;

          li {
            margin-bottom: 15%;
            padding-bottom: 10px;
            width: 100%;
            border-bottom: 2px solid lightgray;
            transition: 400ms;

            a {
              text-decoration: none;
              font-family: "Actay";
              font-size: 27px;
              color: #fcfffc;
              transition: 400ms;

              &:hover {
                margin-bottom: 2px;
                color: #c521ff;
              }
            }
          }
        }
      }
    }
    display: grid;
    grid-template-columns: 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5% 5%;
    grid-template-rows: 10% 10% 10% 10% 10% 10% 10% 10% 10% 10%;
    align-items: center;

    #options {
      display: none;
      width: 0;
    }

    #option1,
    #option2,
    #option3,
    #option4,
    #option5 {
      display: none;
      width: 0;
    }

    .call {
      display: none;
      width: 0;
    }

    #navigation {
      display: flex;
      grid-row-start: 5;
      padding-left: 1rem;
    }

    #callbtn {
      display: flex;
      grid-column-start: 20;
      grid-row-start: 5;
      padding-top: 0.4rem;
      width: 55px;
      svg {
        width: 100%;
      }
    }

    #logo {
      width: 55px;
      height: 55px;

      grid-column-start: 11;
      padding-left: 0.5rem;
      grid-row-start: 6;
    }
  }

  @media (max-width: 600px) {
    #callbtn {
      position: relative;
      left: -1rem;
    }
  }
  @media (max-width: 420px) {
    #callbtn {
      position: relative;
      left: -1.5rem;
    }
  }
`;
