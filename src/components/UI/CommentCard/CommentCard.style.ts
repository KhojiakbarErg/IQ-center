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
  }

  .containerimg {
    width: 187px;
    height: 187px;
    position: relative;
  }

  #borderComm {
    width: 187px;
    height: 187px;
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
`;
