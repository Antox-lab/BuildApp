import { React, Component } from "react";

export default class GipsPlate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      length: 0,
      width: 0,
      height: 0,
      selected: 3 * 1.2,
      check: true,
      checkValue: "Walls",
      checkImg: "img/wall.png",
    };
    this.lengthChange = this.lengthChange.bind(this);
    this.widthChange = this.widthChange.bind(this);
    this.heightChange = this.heightChange.bind(this);
    this.selectChange = this.selectChange.bind(this);
    this.onCalc = this.onCalc.bind(this);
    this.onCalcFloor = this.onCalcFloor.bind(this);
    this.setResults = this.setResults.bind(this);
    this.onCheckWall = this.onCheckWall.bind(this);
  }

  lengthChange(e) {
    this.setState({
      length: e.target.value,
    });
  }

  widthChange(e) {
    this.setState({
      width: e.target.value,
    });
  }

  heightChange(e) {
    this.setState({
      height: e.target.value,
    });
  }

  selectChange(e) {
    this.setState({
      selected: e.target.value,
    });
  }

  onCalc(length, width, height) {
    let sValue = 2 * (length * height + width * height);
    let rValue = sValue.toFixed(3);
    return rValue;
  }

  onCalcFloor(length, width) {
    let sValue = length * width;
    let rValue = sValue.toFixed(3);
    return rValue;
  }

  setResults() {
    const mass = this.state.check
      ? this.onCalc(this.state.length, this.state.width, this.state.height)
      : this.onCalcFloor(this.state.length, this.state.width);
    let count = (mass / this.state.selected).toFixed(1);
    return (
      <>
        <h2>
          Total area: {mass} m<sup>2</sup>
        </h2>
        <h2>Plats count: {count}</h2>
        <hr />
        <h2 style={{ fontWeight: "bold", color: "red" }}>
          <img style={{ marginRight: "1rem" }} src="img/note.png" alt="note" />
          *excluding openings
        </h2>
      </>
    );
  }

  onCheckWall() {
    this.setState({
      check: !this.state.check,
      checkValue: this.state.check ? "Floor" : "Walls",
      checkImg: this.state.check ? "img/floor.png" : "img/wall.png",
    });
  }

  render() {
    return (
      <>
        <h2 style={{ fontWeight: "bold", color: "#34a1da" }}>
          Material: Gips plate
        </h2>
        <div style={{ display: "flex", alignItems: "center" }}>
          <img
            src={this.state.checkImg}
            alt="img"
            style={{ cursor: "pointer" }}
            onClick={this.onCheckWall}
          />

          <h2 style={{ display: "inline-block", marginLeft: "0.3rem" }}>
            {this.state.checkValue}
          </h2>
        </div>
        <h2>Space lenght, m</h2>
        <input type="text" onChange={this.lengthChange}></input>
        <h2>Space width, m</h2>
        <input type="text" onChange={this.widthChange}></input>
        <h2 style={{ color: this.state.check ? "black" : "silver" }}>
          Space height, m
        </h2>
        <input
          type="text"
          onChange={this.heightChange}
          disabled={!this.state.check}
        ></input>
        <h2>Plate size, mm x mm</h2>
        <select onChange={this.selectChange}>
          <option value={3 * 1.2}>3000x1200</option>
          <option value={2.5 * 1.2}>2500x1200</option>
          <option value={2 * 1.2}>2000x1200</option>
          <option value={1.5 * 0.6}>1500x600</option>
        </select>
        <input
          className="formButton formButtonAdd"
          type="button"
          value="Calc"
          onClick={() => {
            this.props.onResult(this.setResults());
          }}
        />
      </>
    );
  }
}
