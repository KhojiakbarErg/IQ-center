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
    gap: 100px;
  }

  @media (max-width: 955px) {
    h1 {
      font-size: calc(6.47vw - 1px);
    }
    padding: 20px;

    .container {
      gap: 50px;
    }
  }

  #commswap {
    display: flex;
    justify-content: space-between;
    position: absolute;
    font-size: 32px;
    width: 80vw;
    bottom: 0;
    transition: 550ms;

    #previouscomm {
      color: #fff;
      background: #00000c;
      border: 0;
      font-size: 32px;
      transition: 550ms;
      &:hover {
        color: #c521ff;
      }
    }
    #nextcomm {
      color: #fff;
      border: 0;
      font-size: 32px;
      background: #00000c;
      transition: 550ms;

      &:hover {
        color: #c521ff;
      }
    }
  }

  #slides article {
    width: 20%;
    float: left;
  }

  #slides .image {
    width: 500%;
  }

  #overflow {
    width: 100%;
    overflow: hidden;
  }

  #desktop:checked ~ #slider {
    max-width: 960px;
  }

  #switch1:checked ~ #controls label:nth-child(4),
  #switch2:checked ~ #controls label:nth-child(1),
  #switch3:checked ~ #controls label:nth-child(2),
  #switch4:checked ~ #controls label:nth-child(3) {
    background: url("prev.png") no-repeat;
    float: left;
    margin: 0 0 0 -84px;
    display: block;
    height: 68px;
    width: 68px;
  }

  #switch1:checked ~ #controls label:nth-child(2),
  #switch2:checked ~ #controls label:nth-child(3),
  #switch3:checked ~ #controls label:nth-child(4),
  #switch4:checked ~ #controls label:nth-child(1) {
    background: url("next.png") no-repeat;
    float: right;
    margin: 0 -84px 0 0;
    display: block;
    height: 68px;
    width: 68px;
  }

  label,
  a {
    cursor: pointer;
  }

  .container input {
    display: none;
  }

  #switch1:checked ~ #slides .image {
    margin-left: 0;
  }

  #switch2:checked ~ #slides .image {
    margin-left: -100%;
  }

  #switch3:checked ~ #slides .image {
    margin-left: -200%;
  }

  #switch4:checked ~ #slides .image {
    margin-left: -300%;
  }

  #controls {
    margin: -25% 0 0 0;
    width: 100%;
    height: 50px;
  }

  #active label {
    border-radius: 10px;
    display: inline-block;
    width: 15px;
    height: 15px;
    background: #bbb;
  }

  #active {
    margin: 23% 0 0;
    text-align: center;
  }

  #active label:hover {
    background: #76c8ff;
    border-color: #777 !important;
  }

  #switch1:checked ~ #active label:nth-child(1),
  #switch2:checked ~ #active label:nth-child(2),
  #switch3:checked ~ #active label:nth-child(3),
  #switch4:checked ~ #active label:nth-child(4) {
    background: #18a3dd;
    border-color: #18a3dd !important;
  }

  #slides .image {
    transition: all 800ms cubic-bezier(0.77, 0, 0.175, 1);
  }
`;
