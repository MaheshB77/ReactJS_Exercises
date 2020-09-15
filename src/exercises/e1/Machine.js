/* Exercise 1 :- 
  If three props of Machine components matches 
  then machine will show "You Win!!" else it will
  show "You Loose"  and also if no props are passed
  then it will show "Please add some values in the props!"
*/
import React, { Component } from "react";
import "./Machine.css";
export default class Machine extends Component {
  static defaultProps = {
    s1: "No value ",
    s2: "No value ",
    s3: "No value ",
  };
  render() {
    const { s1, s2, s3 } = this.props;
    let result;
    if (s1 === s2 && s2 === s3) {
      result = <p className="Machine-winner">You win!!!!</p>;
    } else {
      result = <p className="Machine-looser">You loose</p>;
    }
    if (s1 === "No value " && s2 === "No value " && s3 === "No value ") {
      result = (
        <p className="Machine-looser">Please add some values in the props!</p>
      );
    }
    return (
      <div className="Machine">
        <h3>
          {s1 + ` : : `}
          {s2 + ` : : `}
          {s3}
        </h3>
        {result}
      </div>
    );
  }
}
