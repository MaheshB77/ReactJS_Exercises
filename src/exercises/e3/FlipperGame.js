/* Exercise 3 :-
  By clicking on "Flip me!" button
  coin will be flipped and total number
  of flips, total heads, total tails will
  also be displayed!
*/

import React, { Component } from "react";
import Coin from "./Coin";

export default class FlipperGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      heads: 0,
      tails: 0,
      totalFlips: 0,
      curr: 0,
    };
  }

  flip = (e) => {
    let rand = Math.floor(Math.random() * 2);

    // Updating heads or tails
    if (rand === 0) {
      this.setState((st) => {
        return { heads: st.heads + 1, curr: 0, totalFlips: st.totalFlips + 1 };
      });
    } else {
      this.setState((st) => {
        return { tails: st.tails + 1, curr: 1, totalFlips: st.totalFlips + 1 };
      });
    }
  };

  render() {
    return (
      <div>
        <h1>Let's flip a coin!</h1>
        {this.state.totalFlips !== 0 && <Coin face={this.state.curr} />}
        <button onClick={this.flip}>Flip Me!</button>
        <h3>
          Out of {this.state.totalFlips} we have {this.state.heads} heads and{" "}
          {this.state.tails} tails
        </h3>
      </div>
    );
  }
}
