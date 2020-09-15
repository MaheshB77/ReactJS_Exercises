/* Exercise 4 :-
  There are three input fields for Height,
  Width and color, if you give valid CSS
  units (for height and widht give unit in px)
  then according to the size box will be created,
  which also has remove button below it, on clicking
  "remove me" button Box will be removed.
*/

import React, { Component } from "react";
import ColorBox from "./ColorBox";
import { v4 as uuid } from "uuid";
import "./BoxList.css";

export default class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allBoxes: [],
      height: "",
      width: "",
      color: "",
    };
  }

  //   Form related methods
  handleChange = (evt) => {
    let element = evt.target.id;
    this.setState({ [element]: evt.target.value });
  };

  renderAllBoxes = () => {
    return this.state.allBoxes.map((box) => {
      return (
        <ColorBox
          ht={box.ht}
          wd={box.wd}
          clr={box.color}
          key={box.id}
          id={box.id}
          removeBox={this.removeColorBox}
        />
      );
    });
  };

  addColorBox = (evt) => {
    evt.preventDefault();
    let newColorBox = {
      ht: this.state.height,
      wd: this.state.width,
      color: this.state.color,
      id: uuid(),
    };
    this.state.height = "";
    this.state.width = "";
    this.state.color = "";
    this.setState({ allBoxes: [...this.state.allBoxes, newColorBox] });
  };

  removeColorBox = (id) => {
    this.setState({
      allBoxes: this.state.allBoxes.filter((box) => box.id !== id),
    });
  };
  render() {
    return (
      <div className="BoxList">
        <form className="BoxList-form" onSubmit={this.addColorBox}>
          <label htmlFor="height">Height : </label>
          <input
            type="text"
            name="height"
            id="height"
            value={this.state.height}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="width">Width : </label>
          <input
            type="text"
            name="width"
            id="width"
            value={this.state.width}
            onChange={this.handleChange}
          />
          <br />
          <label htmlFor="color">Color : </label>
          <input
            type="text"
            name="color"
            id="color"
            value={this.state.color}
            onChange={this.handleChange}
          />
          <br />
          <button type="submit">Create color box</button>
        </form>
        <div>{this.renderAllBoxes()}</div>
      </div>
    );
  }
}
