import styled from "styled-components";

export const ThemeComments = styled.div`
  position: relative;

  h1 {
    font-family: "Actay";
    font-size: calc(3.6vw + 27px);
    margin-bottom: calc(8.4vw - 8px);
    margin-top: 0;
  }

  margin-bottom: calc(5vw + 22px);

  padding: 40px calc(14.5vw - 79px);

  .container {
    display: flex;

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

  @media (max-width: 1200px) {
    h1 {
      font-size: calc(6.47vw - 1px);
    }

    padding: 30px;

    .container {
      justify-content: start;
    }
    .slick-prev:before {
      font-family: "slick";
      font-size: 20px;
      position: absolute;
      left: 10px;
    }
    .slick-next:before {
      font-family: "slick";
      font-size: 20px;
      position: absolute;
      right: 10px;
    }
  }
  .slick-prev:before {
    font-family: "slick";
    font-size: 40px;
    width: 40px;
    height: 40px;
    position: absolute;
    left: 10px;
  }
  .slick-next:before {
    font-family: "slick";
    font-size: 40px;
    width: 40px;
    height: 40px;
    position: absolute;
    right: 10px;
  }
`;
