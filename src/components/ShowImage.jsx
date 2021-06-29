import { React, Component } from "react";

export default class ShowImage extends Component {
  render() {
    return (
      <section className={this.props.setClassName}>
        <img
          src={this.props.imageUrl}
          alt="non"
          onClick={this.props.onImageShow}
        />
      </section>
    );
  }
}
