import { React, Component } from "react";

export default class Header extends Component {
  // constructor(props){
  //   super(props);
  // }
  render() {
    return (
      <header>
        <input
          type="submit"
          className="menuButton"
          value="Add"
          onClick={this.props.onSet}
        />
        <input
          type="submit"
          className="menuButton"
          value="Blank"
          onClick={this.props.onPrintShow}
        />
        <input
          type="submit"
          className="menuButton"
          value="Calculation"
          onClick={this.props.onCalcShow}
        />
      </header>
    );
  }
}
