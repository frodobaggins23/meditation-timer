import React from "react";
import { TimeCircleStyles } from "../styles/AppMainStyles";

const validate = value => {
  value = parseInt(value);
  if (value >= 0 && value < 60) {
    return true;
  }
  return false;
};

const TimeCircle = ({ m, s, action, custom }) => {
  return (
    <>
      {!custom && (
        <TimeCircleStyles
          onClick={() => {
            action(m, s);
          }}
        >
          {m < 10 ? `0${m}` : m}:{s < 10 ? `0${s}` : s}
        </TimeCircleStyles>
      )}
      {custom && (
        <TimeCircleStyles>
          <input
            type="number"
            onChange={e => {
              let { value } = e.target;
              validate(value) && action(parseInt(value), null);
            }}
          />
          {":"}
          <input
            type="number"
            onChange={e => {
              let { value } = e.target;
              validate(value) && action(null, parseInt(value));
            }}
          />
        </TimeCircleStyles>
      )}
    </>
  );
};

export default TimeCircle;
