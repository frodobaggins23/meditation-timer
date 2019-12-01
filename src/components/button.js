import React from "react";
import { ButtonStyles } from "../styles/AppMainStyles";

const Button = ({ completed, active, start, stop, type, action }) => {
  if (!completed && type === "main") {
    return (
      <ButtonStyles
        className={active ? "pause" : "start"}
        onClick={active ? () => stop() : () => start()}
      >
        {active ? "Pause" : "Start"}
      </ButtonStyles>
    );
  } else if (completed && type === "main") {
    return null;
  } else {
    return <ButtonStyles onClick={() => action()}>Reset</ButtonStyles>;
  }
};

export default Button;
