import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { MainAppBodyStyles } from "./styles/AppMainStyles";
import Counter from "./components/counter";

function App() {
  return (
    <MainAppBodyStyles>
      <h1>Meditation Timer</h1>
      <Counter />
    </MainAppBodyStyles>
  );
}

export default App;
