import styled from "styled-components";

export const ThemePreview = styled.div`
  .labelImg {
    display: none;
    z-index: 2;
  }

  .preview {
    padding: 0 calc(22.9vw - 199.3px);
    padding-right: 0;
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
    }

    .informa {
      display: grid;
      grid-template-areas:
        "inf inf"
        "inf inf"
        "enter enter";
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
      position: relative;
      margin-right: 13rem;
      top: calc(2.2vw - 18px);
    }
    .text {
      grid-area: inf;
      width: 500px;
      height: calc(6.1vw + 57.1px);
      font-family: "Actay", sans-serif, bold;
      font-size: calc(0.45vw + 19.4px);
      color: rgba(255, 255, 255, 0.92);
      position: relative;
      top: -10px;
      font-weight: bold;
    }
    .enter {
      grid-area: enter;
      width: calc(22.3vw + 271.4px);
      display: flex;
      flex-direction: row;
      gap: 40px;
    }

    h2 {
      font-family: "Actay";
      font-size: calc(7vw + 4.5px);
      color: #ffffff;
      margin: 0;
      padding: 0;
      line-height: 0;
      font-weight: bold;
    }

    h1 {
      font-family: "Actay";
      font-size: calc(11vw - 4px);
      font-weight: 700;
      background: linear-gradient(73deg, #dd0eff 0%, #3c64f1 89.97%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      text-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
      margin: 0;
      padding: 0;
      height: calc(8vw + 48px);
      width: calc(59.9vw + 307px);
      font-weight: bold;
    }
  }

  .rating {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    flex-wrap: wrap;

    padding-right: calc(23.3vw - 59px);

    .rate {
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
    margin-bottom: 200px;
  }

  .FirstGradient {
    padding: 0;
    margin: 0;
    .Blackback {
      padding: 0;
      margin: 0;
      position: absolute;
      width: 368.17px;
      height: 272.96px;
      top: -67px;
      right: 0;
      z-index: 3;
    }

    .Gradient1 {
      padding: 0;
      margin: 0;
      position: absolute;
      width: calc(15.5vw + 208px);
      height: calc(52.1vw + 51px);
      top: -70px;
      right: 0;
      z-index: 1;
    }
  }
  .SecondGradient {
    .Gradient2 {
      position: absolute;
      width: calc(15.5vw + 208px);
      height: auto;
      left: -90px;
      top: calc(90.7vh - 53px);
      transform: rotate(-15.43deg);
      z-index: 0;
    }
  }

  @media (max-width: 955px) {
    .enter {
      height: auto;
    }

    .WantInf {
      display: none;
    }

    .FirstGradient {
      .Blackback,
      .Gradient1 {
        display: none;
      }
    }

    .SecondGradient {
      .Gradient2 {
        display: none;
      }
    }

    .preview {
      padding: calc(6.3vw + 3px);

      .text {
        margin-top: 0;
        font-size: 0;
        width: calc(42.83vw + 51px);
        font-size: calc(1.23vw + 7px);
      }
    }

    .rating {
      padding-right: calc(23.3vw - 29px);
    }

    h1,
    h2 {
      display: none;
      width: 0;
      font-size: 0;
      position: absolute;
      opacity: 0;
    }

    .labelImg {
      display: grid;
      justify-content: end;
    }

    #study {
      width: calc(16.2vw + 74px);
      margin-bottom: 10px;
    }

    #interactive {
      width: calc(87vw - 2px);
    }

    #way {
      width: calc(16.2vw + 74px);

      justify-self: end;
    }
  }

  @media (max-width: 420px) {
    .preview {
      padding: 15px;
    }
    #way {
      position: relative;
      left: -1.7rem;
    }
  }
`;
