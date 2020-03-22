import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const textArray = ['Not Your Average Knowledge Base.', 'Clarity Is Power.', 'Knowledge Makes The Difference.', "We Will Kick Covid's Ass Soon.", "Embrace The Knowledge.", "Make Sense Of The Data.", "Connect The Dots", "Broaden Your Horizon.", "No Need To Panic.", "Differentiate.", "Understand Statistics.", "Stay Fucking Home!", "Don't eat other peoples stuff!"];

export default class Knowrona extends Component {
  constructor() {
    super();
    this.state = { textIdx: 0 };
  }

  componentDidMount() {
    this.timeout = setInterval(() => {
      let currentIdx = this.state.textIdx;
      this.setState({ textIdx: currentIdx + 1 });
    }, 1500);
  }

  componentDidUnmount() {
    clearInterval(this.timeout);
  }

  render() {
    let textThatChanges = textArray[this.state.textIdx % textArray.length];

    return (
        <div className="introcard">
            <div className="centered">
            <h1>{textThatChanges}</h1>
            <Link to="/list"><button className="btn">Now go get yourself some hot Covid knowledge!</button></Link>
            </div>
        </div>
    )
  }
}