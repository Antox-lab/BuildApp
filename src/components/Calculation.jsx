import { React, Component } from "react";
import Screed from "./Screed";
import Grunt from "./Grunt";
import GipsPlate from "./GipsPlate";

export default class Calculation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      category: "",
      result: "",
    };
    this.onShowCategory = this.onShowCategory.bind(this);
    this.onResult = this.onResult.bind(this);
  }

  onShowCategory(e) {
    this.setState({
      category: e.target.id,
      result: "",
    });
  }

  onCheckCategory(value) {
    switch (value) {
      case "screed":
        return <Screed onResult={this.onResult} />;
      case "grunt":
        return <Grunt onResult={this.onResult} />;
      case "gips":
        return <GipsPlate onResult={this.onResult} />;
      default:
        return <></>;
    }
  }

  onResult(value) {
    this.setState({
      result: value,
    });
  }

  render() {
    return (
      <section className={this.props.setClassName}>
        <div className="printClass">
          <div className="calculateSection">
            <div className="formSubSection">
              <h1>Materials</h1>
              <input
                className="menuListButton"
                type="button"
                id="screed"
                value="Screed"
                onClick={this.onShowCategory}
              />
              <input
                className="menuListButton"
                type="button"
                id="grunt"
                value="Grunt"
                onClick={this.onShowCategory}
              />
              <input
                className="menuListButton"
                type="button"
                id="gips"
                value="Gips plate"
                onClick={this.onShowCategory}
              />
            </div>
            <div className="formSubSection">
              <h1>Parameters</h1>
              {this.onCheckCategory(this.state.category)}
            </div>
            <div className="formSubSection">
              <h1>Results</h1>
              {this.state.result}
            </div>
          </div>
          <div className="printSection">
            <hr />
          </div>
          <div className="printSection printButtons">
            <input
              className="formButton formButtonClose"
              type="button"
              value="Close"
              onClick={this.props.onCalcShow}
            />
          </div>
        </div>
      </section>
    );
  }
}
