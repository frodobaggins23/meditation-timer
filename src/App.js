import React from "react";
import { ThemeProvider } from "styled-components";
import logo from "./logo.svg";
import "./App.css";
import { MainAppBodyStyles } from "./styles/AppMainStyles";
import theme from "./styles/variables";
import Counter from "./components/counter";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <MainAppBodyStyles>
        <h1>Meditation Timer</h1>
        <Counter />
      </MainAppBodyStyles>
    </ThemeProvider>
  );
}

export default App;
