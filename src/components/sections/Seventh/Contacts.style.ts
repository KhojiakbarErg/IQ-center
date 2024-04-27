import styled from "styled-components";

export const ThemeLocation = styled.div`
  padding: calc(10vw + 22px) calc(16.2vw - 136px);

  .mainlocation {
    display: flex;
    flex-direction: row;
    position: relative;
    justify-content: space-between;
  }

  h1 {
    font-family: "Actay";
    font-size: calc(3.6vw + 17px);
    b {
      background: linear-gradient(73deg, #dd0eff 0%, #3c64f1 89.97%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  .inf {
    width: 48%;
  }

  .extrainf {
    display: flex;
    gap: 5px;
    align-items: start;
    margin: 0;
    color: #fff;
    margin-bottom: 50px;
    width: 680px;

    a:-webkit-any-link {
      color: #fff;
    }

    a {
      font-family: "Actay";
      font-size: calc(0.45vw + 27px);
    }

    p {
      font-family: "Actay";
      font-size: calc(0.45vw + 27px);
      margin: 0;
    }

    h5 {
      font-family: "Actay";
      font-size: calc(0.45vw + 27px);
      margin: 0;
    }

    #number {
      background: linear-gradient(90deg, #c521ff 0%, #3d64f1 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    #location {
      background: linear-gradient(-90deg, #c521ff 0%, #3d64f1 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }

    #place {
      background: linear-gradient(90deg, #c521ff 0%, #3d64f1 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  #socialmedias {
    display: flex;
    gap: 30px;

    padding-top: 60px;
  }

  #map {
    border-radius: 25px;
    width: calc(38.2vw - 73px);
    height: calc(27.3vw - 55px);
  }

  @media (max-width: 1200px) {
    padding: calc(10vw + 22px) calc(16.2vw - 76px);

    .mainlocation {
      flex-direction: column;
    }

    #mapmain {
      display: flex;
      justify-content: center;
      width: 100%;
    }

    #map {
      width: 700px;
      height: 470px;
    }

    #socialmedias {
      display: flex;
      position: absolute;
      bottom: -100px;
    }

    .extrainf {
      width: 750px;
    }
  }
`;
