import styled from "styled-components";

const MainAppBodyStyles = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Alata&display=swap");

  max-width: 100vw;
  height: 100vh;
  background-color: ${props => props.theme.palette.gray};
  background-image: url(${require("../img/background.jpg")});
  background-size: cover;

  h1 {
    text-align: center;
    color: ${props => props.theme.palette.darkBlue};
    font-family: "Alata", sans-serif;
    padding-top: 10vh;
  }
`;

const AppBlock = styled.div`
  display: block;
  flex: 1 0 100%;
  text-align: center;
`;

const AppBlockFlex = styled.div`
  display: flex;
  justify-content: space-around;
`;

const CounterStyles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 50%;
  height: 50vh;
  margin: 0 auto;
  background-color: rgba(255, 255, 255, 0.2);
  font-family: "Alata", sans-serif;
`;

const CounterTimeStyles = styled.div`
  width: 30%;
  margin: 0 auto;
  font-size: 3rem;
  color: ${props => props.theme.palette.darkBlue};
  text-align: center;
`;

const ButtonStyles = styled.button`
  border: none;
  background-color: ${props => props.theme.palette.brickishRed};
  color: #fff;
  border-radius: 5px;
  padding: 5px 10px;
  margin-right: 20px;
  font-size: 1rem;
  cursor: pointer;

  &.start {
    background-color: ${props => props.theme.palette.greenish};
    color: ${props => props.theme.palette.darkBlue};
  }
  &.pause {
    background-color: ${props => props.theme.palette.clay};
    color: ${props => props.theme.palette.darkBlue};
  }
`;

const TimeCircleStyles = styled.div`
  display: flex;
  width: 100px;
  height: 100px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: ${props => props.theme.palette.clay};
  opacity: 0.8;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.palette.brickishRed};
    opacity: 1;
  }

  input {
    width: 30px;
    background: none;
    background-color: ${props => props.theme.palette.clay};
    text-align: center;
  }

  input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }
`;

export {
  AppBlock,
  AppBlockFlex,
  ButtonStyles,
  CounterStyles,
  CounterTimeStyles,
  MainAppBodyStyles,
  TimeCircleStyles
};
