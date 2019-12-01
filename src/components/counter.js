import React, { Component } from "react";
import { AppBlock, CounterStyles, AppBlockFlex } from "../styles/AppMainStyles";
import CounterTime from "./counter-time";
import Button from "./button";
import TimeCircle from "./time-circle";
import gongSound from "../audio/gong.mp3";
import { formatMe } from "../functionalities/func";

const defaultState = {
  minutes: 0,
  seconds: 10,
  active: false,
  completed: false
};

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = defaultState;
    this.gong = React.createRef();
  }

  countDown() {
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
      this.gong.current.play();
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
    minutes != null && (defaultState.minutes = minutes);
    seconds != null && (defaultState.seconds = seconds);
    this.reset();
  }

  render() {
    const { minutes, seconds, active, completed } = this.state;

    return (
      <CounterStyles>
        <AppBlock>
          <CounterTime
            minutes={formatMe(minutes)}
            seconds={formatMe(seconds)}
          />
        </AppBlock>
        <AppBlock>
          <Button
            type="main"
            completed={completed}
            active={active}
            start={this.countMeDown.bind(this)}
            stop={this.stopCounting.bind(this)}
          />

          <Button action={this.reset.bind(this)} />
        </AppBlock>

        <AppBlock>
          <AppBlockFlex>
            <TimeCircle m={5} s={0} action={this.setDefault.bind(this)} />
            <TimeCircle m={10} s={0} action={this.setDefault.bind(this)} />
            <TimeCircle m={15} s={0} action={this.setDefault.bind(this)} />
            <TimeCircle action={this.setDefault.bind(this)} custom={true} />
          </AppBlockFlex>
        </AppBlock>

        <audio ref={this.gong} src={gongSound} />
      </CounterStyles>
    );
  }
}
