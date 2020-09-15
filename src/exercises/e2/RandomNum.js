/* Exercise 2 :-
  Clicking the button will generate random number
  between 1 to 10, if we get 7 number then instead
  of button "You Win!" will be shown.
*/
import React, { Component } from "react";
import "./RandomNum.css";

export default class RandomNum extends Component {
  constructor(props) {
    super(props);
    this.state = {
      randNum: 1,
      btnOrWinner: (
        <button className="RandomNum-button" onClick={this.setRandom}>
          Random Number
        </button>
      ),
    };
  }

  setRandom = (e) => {
    let rand = Math.ceil(Math.random() * 10);
    this.setState({ randNum: rand });
    if (rand === 7) {
      this.setState({ btnOrWinner: <h1>YOU WIN!!!</h1> });
    }
  };

  render() {
    return (
      <div className="RandomNum">
        <h1>Ranodom number is : {this.state.randNum}</h1>
        {this.state.btnOrWinner}
      </div>
    );
  }
}
