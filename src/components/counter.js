import React, { Component } from "react";
import { CounterStyles } from "../styles/AppMainStyles";
import CounterTime from "./counter-time";
import gong from "../audio/gong.mp3";

const defaultState = {
  minutes: 0,
  seconds: 10,
  active: false,
  completed: false,
  default: true
};

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
    this.myRef = React.createRef();
  }

  formatMe(time) {
    if (time < 10) {
      return "0" + time;
    }
    return `${time}`;
  }

  countDown() {
    console.log("counting");
    const { minutes, seconds } = this.state;
    if (minutes >= 0 && seconds >= 0) {
      if (seconds > 0) {
        this.setState({
          ...this.state,
          seconds: seconds - 1
        });
      } else {
        if (minutes > 0) {
          this.setState({
            ...this.state,
            seconds: 59
          });
          this.setState({
            ...this.state,
            minutes: minutes - 1
          });
        }
      }
    }

    if (minutes === 0 && seconds === 0) {
      this.setState({
        ...this.state,
        completed: true
      });
      this.stopCounting();
    }
  }

  countMeDown() {
    this.setState({
      ...this.state,
      active: true
    });
    this.counter = setInterval(this.countDown.bind(this), 1000);
  }

  stopCounting() {
    this.setState({
      ...this.state,
      active: false
    });
    clearInterval(this.counter);
  }

  reset() {
    clearInterval(this.counter);
    this.setState(defaultState);
  }

  setDefault(minutes, seconds) {
    defaultState.minutes = minutes;
    defaultState.seconds = seconds;
    this.reset();
  }

  render() {
    const { minutes, seconds, active, completed } = this.state;
    // if (completed) {
    //   this.stopCounting();
    // }

    return (
      <CounterStyles>
        <CounterTime
          minutes={this.formatMe(minutes)}
          seconds={this.formatMe(seconds)}
        />

        <button
          onClick={
            active ? () => this.stopCounting() : () => this.countMeDown()
          }
        >
          {active ? "Pause" : "Start"}
        </button>
        <button onClick={() => this.reset()}>Reset</button>
        <div
          onClick={() => {
            this.setDefault(5, 0);
          }}
        >
          5:00
        </div>
        <div
          onClick={() => {
            this.setDefault(10, 0);
          }}
        >
          10:00
        </div>
        <div
          onClick={() => {
            this.setDefault(15, 0);
          }}
        >
          15:00
        </div>
        <button onClick={() => this.playGong()}>Gong</button>
        {/* {completed && <audio src={gong} autoPlay />} */}
      </CounterStyles>
    );
  }
}
