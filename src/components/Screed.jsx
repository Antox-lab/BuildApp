import { React, Component } from "react";

export default class Screed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      length: 0,
      width: 0,
      height: 0,
    };
    this.lengthChange = this.lengthChange.bind(this);
    this.widthChange = this.widthChange.bind(this);
    this.heightChange = this.heightChange.bind(this);
    this.onCalc = this.onCalc.bind(this);
    this.setResults = this.setResults.bind(this);
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

  onCalc(length, width, height) {
    const screedKoeff = 15;
    let dValue = screedKoeff * height;
    let sValue = length * width;
    let rValue = (dValue * sValue).toFixed(3);
    return rValue;
  }

  setResults() {
    const mass = this.onCalc(
      this.state.length,
      this.state.width,
      this.state.height
    );
    let count = (mass / 25).toFixed(1);
    return (
      <>
        <h2>Total mass: {mass} kg</h2>
        <h2>Total bags: {count}</h2>
      </>
    );
  }

  render() {
    return (
      <>
        <h2 style={{ fontWeight: "bold", color: "#34a1da" }}>
          Material: Screed
        </h2>
        <h2>Space lenght, m</h2>
        <input type="text" onChange={this.lengthChange}></input>
        <h2>Space width, m</h2>
        <input type="text" onChange={this.widthChange}></input>
        <h2>Screed`s height, sm</h2>
        <input type="text" onChange={this.heightChange}></input>
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
