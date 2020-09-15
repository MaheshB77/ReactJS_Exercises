import React, { Component } from "react";
import "./Coin.css";

export default class Coin extends Component {
  static defaultProps = {
    head: `https://upload.wikimedia.org/wikipedia/commons/c/cd/S_Half_Dollar_Obverse_2016.jpg`,
    tail: `https://www.marshu.com/articles/images-website/articles/presidents-on-coins/half-dollar-coin-tail.jpg`,
  };
  render() {
    return (
      <div className="Coin">
        <img
          src={this.props.face == 0 ? this.props.head : this.props.tail}
          alt="head"
        />
      </div>
    );
  }
}
