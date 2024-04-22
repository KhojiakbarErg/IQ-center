import styled from "styled-components";

export const ThemeComments = styled.div`
  h1 {
    font-family: "Actay";
    font-size: 96px;
    margin-bottom: 120px;
    margin-top: 0;
  }

  padding: 0 200px;

  .container {
    display: flex;
    gap: 100px;

    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    padding-bottom: 50px;
  }

  .container::-webkit-scrollbar {
    height: 6px;
    width: auto;
  }

  .container::-webkit-scrollbar-thumb {
    background: linear-gradient(
      90deg,
      rgb(197, 33, 255),
      rgb(87, 94, 242) 81.348%
    );
    border-radius: 10px;
  }
`;
