import React, { Component } from "react";
import "./App.css";
import { Shape } from "./Shape";

class App extends Component {
  state = {
    isTransitioned: false,
    bounce: 0,
    ease: 0,
    transitionDuration: 1000,
    pause: 1
  };

  componentDidMount() {
    this.togglePlay();
  }

  togglePlay = () => {
    setTimeout(() => {
      this.setState({
        isTransitioned: !this.state.isTransitioned
      });
      console.log("gogo", this.state.pause);
    }, this.state.pause * 500);
  };

  getCubicBezier = () => {
    const { bounce, ease } = this.state;
    const ne = parseFloat(ease);
    const nb = parseFloat(bounce);

    // 0.680, -1.500, 0.265, 2.500

    return `cubic-bezier(${ne + nb * 2}, ${0 - (nb / 2 + 1)}, ${1 -
      nb * 2.5}, ${1 + nb * 3})`;
  };

  getStyles = () => {
    const { transitionDuration } = this.state;

    return {
      transitionDuration: `${transitionDuration}ms`,
      transitionTimingFunction: this.getCubicBezier()
    };
  };

  updateValue = event => {
    const {
      target: { id, value }
    } = event;

    this.setState({
      [id]: value
    });
  };

  render() {
    return (
      <div className="App">
        <p>
          pause:
          <input
            type="range"
            min={1}
            max={10}
            step={0.5}
            id="pause"
            onChange={this.updateValue}
            value={this.state.pause}
          />
        </p>
        <p>
          ease:
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            id="ease"
            onChange={this.updateValue}
            value={this.state.ease}
          />
        </p>
        <p>
          bounce:
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            id="bounce"
            onChange={this.updateValue}
            value={this.state.bounce}
          />
        </p>
        <p>
          transitionDuration:
          <input
            type="range"
            min={0}
            max={5000}
            id="transitionDuration"
            onChange={this.updateValue}
            value={this.state.transitionDuration}
          />
        </p>
        <Shape
          className={this.state.isTransitioned ? "play" : ""}
          onTransitionEnd={this.togglePlay}
          style={this.getStyles()}
        />
      </div>
    );
  }
}

export default App;
