import React from "react";
import { CounterTimeStyles } from "../styles/AppMainStyles";

const CounterTime = ({ minutes, seconds }) => {
  return (
    <CounterTimeStyles>
      <span>
        {minutes} : {seconds}
      </span>
    </CounterTimeStyles>
  );
};

export default CounterTime;
