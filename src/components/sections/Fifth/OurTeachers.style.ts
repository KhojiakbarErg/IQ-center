import styled from "styled-components";

export const ThemeOurTeacher = styled.div`
  padding: 0 calc(14.5vw - 79px);
  padding-bottom: calc(5.6vw + 93px);
  position: relative;

  #scrollplace {
    display: flex;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
  }

  #Gradient5 {
    position: absolute;
    width: calc(43.76vw + 38px);
    top: 770px;
    left: 0;
    z-index: 0;
  }

  h1 {
    font-family: "Actay";
    font-size: calc(3.6vw + 27px);
  }

  #scrollplace::-webkit-scrollbar {
    height: 6px;
    width: auto;
  }

  #scrollplace::-webkit-scrollbar-thumb {
    background: linear-gradient(
      90deg,
      rgb(197, 33, 255),
      rgb(87, 94, 242) 81.348%
    );
    border-radius: 10px;
  }

  @media (max-width: 955px) {
    padding: 30px;
    margin-bottom: 100px;
    h1 {
      font-size: calc(6.47vw - 1px);
    }
  }
`;
