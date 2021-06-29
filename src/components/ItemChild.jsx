import { React, Component } from "react";
import ShowImage from "./ShowImage";

export default class ItemChild extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
    };
    this.onImageShow = this.onImageShow.bind(this);
  }

  onImageShow() {
    this.setState({
      show: !this.state.show,
    });
  }

  render() {
    return (
      <div className="childBlock">
        <div className="iconBlock" style={{ width: "10%" }}>
          <img src={this.props.imgName} alt="bag" />
        </div>
        <div style={{ width: "65%" }}>
          <h1 className="childTitle" onClick={this.onImageShow}>
            {this.props.title}
          </h1>
          <h2>{this.props.discription}</h2>
        </div>
        <div style={{ width: "20%" }}>
          <h2 className="childTotal">Price: {this.props.price} ₴</h2>
          <h2 className="childTotal">Count: {this.props.count}</h2>
          <h2 className="childTotal">Total: {this.props.total}</h2>
        </div>
        <div className="iconBlock" style={{ width: "5%" }}>
          <img
            className="deleteIcon"
            onClick={() => {
              this.props.setDeletingItems(this.props.delId);
            }}
            src="./img/trash.png"
            alt="trash"
          />
        </div>
        <ShowImage
          setClassName={this.state.show ? "formSection" : "notActive"}
          onSet={this.setOn}
          imageUrl={this.props.imageUrl}
          onImageShow={this.onImageShow}
        />
      </div>
    );
  }
}
