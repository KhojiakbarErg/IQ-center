import styled from "styled-components";

export const ThemeLocation = styled.div`
  padding: 220px 210px;

  .mainlocation {
    display: flex;
    flex-direction: row;
    position: relative;
    justify-content: space-between;
  }

  h1 {
    font-family: "Actay";
    font-size: 96px;
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

    a:-webkit-any-link {
      color: #fff;
    }

    a {
      font-family: "Actay";
      font-size: 36px;
    }

    p {
      font-family: "Actay";
      font-size: 36px;
      margin: 0;
    }

    h5 {
      font-family: "Actay";
      font-size: 36px;
      margin: 0;
    }

    #number {
      background: linear-gradient(90deg, #c521ff 0%, #3d64f1 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      width: 320px;
    }

    #location {
      background: linear-gradient(-90deg, #c521ff 0%, #3d64f1 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      width: 130px;
    }

    #place {
      background: linear-gradient(90deg, #c521ff 0%, #3d64f1 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      width: 200px;
    }
  }

  #socialmedias {
    display: flex;
    gap: 30px;

    padding-top: 60px;
  }

  #map {
    border-radius: 25px;
  }
`;
