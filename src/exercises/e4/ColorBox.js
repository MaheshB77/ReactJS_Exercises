import React, { Component } from "react";

export default class ColorBox extends Component {
  remove = (evt) => {
    this.props.removeBox(this.props.id);
  };
  render() {
    let ht = this.props.ht;
    let wd = this.props.wd;
    let clr = this.props.clr;
    return (
      <>
        <div className="ColorBox">
          <div
            className="Box"
            style={{ height: ht, width: wd, backgroundColor: clr }}
          ></div>
        </div>
        <button className="ColorBox-button" onClick={this.remove}>
          Remove me
        </button>
      </>
    );
  }
}
