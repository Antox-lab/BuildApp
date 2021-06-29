import { React, Component } from "react";

export default class PrintList extends Component {
  dateFormat(value) {
    if (value >= 0 && value < 10) {
      return "0" + value;
    } else {
      return value;
    }
  }

  render() {
    let date = new Date();
    let dateTime = `${date.getFullYear()}:${this.dateFormat(
      date.getMonth()
    )}:${this.dateFormat(date.getDate())} at ${this.dateFormat(
      date.getHours()
    )}:${this.dateFormat(date.getMinutes())}:${this.dateFormat(
      date.getSeconds()
    )}`;
    return (
      <section className={this.props.setClassName}>
        <div className="printClass">
          <div className="printSection">
            <h1>Price list for {dateTime}</h1>
            <h2>Positions count: {this.props.totalCount}</h2>
            <h2>Total price: {this.props.totalPrice} ₴</h2>
            <hr />
          </div>
          <div className="printSection printButtons">
            <div
              style={{ width: "30%", fontWeight: "bold", fontSize: "1.2rem" }}
            >
              Name
            </div>
            <div
              style={{ width: "30%", fontWeight: "bold", fontSize: "1.2rem" }}
            >
              Discription
            </div>
            <div
              style={{ width: "15%", fontWeight: "bold", fontSize: "1.2rem" }}
            >
              Price
            </div>
            <div
              style={{ width: "10%", fontWeight: "bold", fontSize: "1.2rem" }}
            >
              Count
            </div>
            <div
              style={{ width: "15%", fontWeight: "bold", fontSize: "1.2rem" }}
            >
              Total price
            </div>
          </div>
          <div className="printSection">
            {this.props.onData.map((item) => {
              return (
                <div className="printSection printButtons" key={item.id}>
                  <div style={{ width: "30%" }}>
                    <h2>{item.name}</h2>
                  </div>
                  <div style={{ width: "30%" }}>
                    <h2>{item.discription} </h2>
                  </div>
                  <div style={{ width: "15%" }}>
                    <h2>{item.price} ₴</h2>
                  </div>
                  <div style={{ width: "10%" }}>
                    <h2>{item.count} </h2>
                  </div>
                  <div style={{ width: "15%" }}>
                    <h2>{item.total} ₴</h2>
                  </div>
                </div>
              );
            })}
            <hr />
          </div>
          <div className="printSection printButtons">
            <input
              className="formButton formButtonAdd"
              type="button"
              value="Print"
              onClick={() => {
                window.print();
                this.props.onPrintShow();
              }}
            />
            <input
              className="formButton formButtonClose"
              type="button"
              value="Close"
              onClick={this.props.onPrintShow}
            />
          </div>

          <hr />
        </div>
      </section>
    );
  }
}
