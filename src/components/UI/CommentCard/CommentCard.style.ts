import styled from "styled-components";

export const ThemeCommentCard = styled.div`
  display: flex;
  gap: 35px;
  align-items: start;
  scroll-snap-align: start;

  #FirstImgComm {
    width: 185px;
    height: 185px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .containerimg {
    width: 187px;
    height: 187px;
    position: relative;
    background: linear-gradient(45deg, #dd0eff 0%, #3c64f1 89.97%);
    border-radius: 50%;
    padding: 2.5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  h4 {
    font-family: "Actay";
    font-size: 40px;
    margin: 0;
    margin-bottom: 10px;
  }

  p {
    font-family: "Actay";
    font-size: 24px;
    width: 650px;
    margin: 0;
  }

  img {
    position: absolute;
  }

  @media (max-width: 1200px) {
    display: flex;
    flex-direction: column;
    justify-content: start;
    margin-left: -0.5em;
    z-index: 2;

    h4 {
      font-size: 30px;
    }

    p {
      font-size: calc(1vw + 8.8px);
      width: calc(54.24vw + 74px);
    }

    #FirstImgComm {
      width: calc(14.79vw + 35px);
      height: calc(14.79vw + 35px);
    }

    .containerimg {
      width: calc(14.79vw + 37px);
      height: calc(14.79vw + 35px);
    }
  }
`;
