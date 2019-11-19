import React from "react";

const CounterTime = ({ minutes, seconds }) => {
  return (
    <span>
      {minutes} : {seconds}
    </span>
  );
};

export default CounterTime;
