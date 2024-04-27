import styled from "styled-components";

export const ThemeOurTeacher = styled.div`
  padding: calc(5.6vw + 93px) calc(14.5vw - 79px);
  position: relative;

  #scrollplace {
    display: flex;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
  }

  #Gradient5 {
    position: absolute;
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
`;
