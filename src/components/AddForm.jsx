import { React, Component } from "react";
import mCategory from "../data/category.json";
import build_materials from "../data/build_materials.json";
import build_mix from "../data/build_mix.json";
import build_chemical from "../data/build_chemical.json";
import listData from "../data/listData.json";

export default class AddForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sub: false,
      subtarget: null,
      mat: false,
      mattarget: null,
      count: 1,
    };
    this.onClose = this.onClose.bind(this);
    this.onCategory = this.onCategory.bind(this);
    this.onSubCategory = this.onSubCategory.bind(this);
    this.onAdd = this.onAdd.bind(this);
    this.onCountChange = this.onCountChange.bind(this);
  }

  onClose() {
    this.setState({
      sub: false,
      subtarget: null,
      mat: false,
      mattarget: null,
      count: 1,
    });
    this.props.onSet();
  }

  onAdd(name, id, delId, discription, price, count, imageUrl) {
    listData.push({
      name,
      id,
      delId: Math.random(),
      discription,
      price,
      count,
      total: price * count,
      imgName: this.state.imgName,
      imageUrl,
    });
    this.onClose();
  }

  onCountChange(e) {
    this.setState({
      count: Number(e.target.value),
    });
  }

  onCategory(e) {
    switch (e.target.id) {
      case "build_materials": {
        this.setState({
          sub: true,
          subtarget: build_materials,
          imgName: "./img/bricks.png",
        });
        break;
      }
      case "build_mix": {
        this.setState({
          sub: true,
          subtarget: build_mix,
          imgName: "./img/bag.png",
        });
        break;
      }
      case "build_chemical": {
        this.setState({
          sub: true,
          subtarget: build_chemical,
          imgName: "./img/chemi.png",
        });
        break;
      }
      default:
        this.setState({
          sub: false,
          subtarget: null,
        });
    }
  }

  onSubCategory(e) {
    this.setState({
      mat: true,
      mattarget: e.target.id,
    });
  }

  render() {
    const listArray = mCategory;
    return (
      <section className={this.props.setClassName}>
        <form className="formClass">
          <div className="formSubSection">
            {listArray.map((item, key) => {
              return (
                <input
                  className="menuListButton"
                  type="button"
                  value={item.value}
                  key={key}
                  id={item.name}
                  onClick={this.onCategory}
                />
              );
            })}
          </div>
          <div className="formSubSection">
            {this.state.sub ? (
              this.state.subtarget.map((item, key) => {
                return (
                  <input
                    className="menuListButton"
                    type="button"
                    value={item.value}
                    key={key}
                    id={item.name}
                    onClick={this.onSubCategory}
                  />
                );
              })
            ) : (
              <></>
            )}
          </div>

          <div className="formSubSection">
            {this.state.mat ? (
              // eslint-disable-next-line array-callback-return
              this.state.subtarget.map((item, key) => {
                if (item.name === this.state.mattarget) {
                  return (
                    <div className="priceData" key={key}>
                      <h1>{item.value}</h1>
                      <hr />
                      <img className="priceImg" src={item.img} alt="non" />
                      <h2>Params: {item.width}</h2>
                      <h2>Price: {item.price} grn</h2>
                      <label htmlFor="count">Count: </label>
                      <input
                        className="menuInput"
                        type="number"
                        min="1"
                        max="10000"
                        onChange={this.onCountChange}
                        id="count"
                        value={this.state.count}
                      />
                      <input
                        className="formButton formButtonAdd"
                        type="button"
                        value="Add"
                        onClick={() => {
                          this.onAdd(
                            item.value,
                            item.name,
                            item.delId,
                            item.width,
                            item.price,
                            this.state.count,
                            item.img
                          );
                        }}
                      />
                    </div>
                  );
                }
              })
            ) : (
              <></>
            )}
          </div>

          <div className="formSubSection">
            <input
              className="formButton formButtonClose"
              type="button"
              value="Close"
              onClick={this.onClose}
            />
          </div>
        </form>
      </section>
    );
  }
}
