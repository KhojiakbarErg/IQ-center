import styled from "styled-components";
//TODO:сделать жирный Actay куда надо
export const ThemePreview = styled.div`
  .preview {
    padding: 0 270px;
    display: grid;
    grid-template-areas:
      "preview"
      "preview"
      "preview"
      "informa"
      "informa";

    .label {
      display: grid;
      grid-template-areas:
        "study"
        "study"
        "inovation"
        "inovation"
        "inovation"
        "way"
        "way";
      width: 1130px;
    }

    .informa {
      display: grid;
      grid-template-areas:
        "inf"
        "inf"
        "enter";
    }
    .study {
      grid-area: study;
    }
    .inovation {
      grid-area: inovation;
    }
    .way {
      grid-area: way;
      display: flex;
      flex-direction: row-reverse;
    }
    .text {
      grid-area: inf;
      width: 500px;
      height: 175px;
      font-family: "Actay", sans-serif, bold;
      font-weight: 400;
      font-size: 28px;
      color: rgba(255, 255, 255, 0.92);
      position: relative;
      top: -25px;
    }
    .enter {
      grid-area: enter;
      p {
        //TODO: :жирный шрифт

        font-weight: 700;
        font-size: 32px;
        color: #000;
        font-family: "Actay";
      }
    }

    h2 {
      //TODO: :жирный шрифт
      font-family: "Actay";
      font-size: 96px;
      font-weight: 700;
      color: #ffffff;
      margin: 0;
      padding: 0;
      line-height: 0;
    }

    h1 {
      //TODO: :жирный шрифт

      font-family: "Actay";
      font-size: 160px;
      font-weight: 700;
      background: linear-gradient(73deg, #dd0eff 0%, #3c64f1 89.97%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
      margin: 0;
      padding: 0;
      height: 202px;
    }
  }

  .rating {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    flex-wrap: wrap;

    padding-right: 210px;

    .rate {
      //TODO: :жирный шрифт
      font-family: "Actay";
      font-weight: bold;
      font-size: 48px;
      background: linear-gradient(125deg, #c521ff 0%, #3c64f1 100%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      margin: 0;
      width: 100%;
      display: flex;
      flex-direction: row-reverse;
    }
    .p {
      font-family: "Actay";
      font-weight: 700;
      font-size: 48px;
      color: #fff;
      margin: 0;
      display: block;
    }
  }
`;
