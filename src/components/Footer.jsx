import { React, Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div>
          <h2>Positions count:</h2>
          <h2>Total price:</h2>
        </div>
        <div>
          <h2 className="footerStatistic">{this.props.totalCount}</h2>
          <h2 className="footerStatistic">{this.props.totalPrice} ₴</h2>
        </div>
      </footer>
    );
  }
}
