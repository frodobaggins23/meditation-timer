import styled from "styled-components";

//pallette
// #011126
// #3B4B59
// #B6BF6F
// #BFBDA3
// #D95F43

const MainAppBodyStyles = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Alata&display=swap");

  width: 100vw;
  height: 100vh;
  background-color: #3b4b59;
  background-image: url(${require("../img/background.jpg")});
  background-size: cover;

  h1 {
    text-align: center;
    color: #d95f43;
    font-family: "Alata", sans-serif;
    padding-top: 10vh;
  }
`;

const CounterStyles = styled.div`
  max-width: 50%;
  height: 50vh;
  margin: 0 auto;
  background-color: rgba(59, 75, 89, 0.47);
  font-family: "Alata", sans-serif;
`;

export { MainAppBodyStyles, CounterStyles };
