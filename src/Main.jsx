import { React, Component } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AddForm from "./components/AddForm";
import ItemChild from "./components/ItemChild";
import PrintList from "./components/PrintList";
import Calculation from "./components/Calculation";
import listData from "./data/listData.json";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
      dataReload: true,
      print: false,
      calc: false,
    };
    this.setOn = this.setOn.bind(this);
    this.setDeletingItems = this.setDeletingItems.bind(this);
    this.onPrintShow = this.onPrintShow.bind(this);
    this.onCalcShow = this.onCalcShow.bind(this);
  }

  setOn() {
    this.setState({
      active: !this.state.active,
    });
  }

  setDeletingItems(id) {
    let position = 0;
    listData.forEach((item, key) => {
      if (item.delId === id) {
        position = key;
      }
    });
    listData.splice(position, 1);
    this.setState({
      dataReload: !this.state.dataReload,
    });
  }

  onPrintShow() {
    this.setState({
      print: !this.state.print,
    });
  }

  onCalcShow() {
    this.setState({
      calc: !this.state.calc,
    });
  }

  total = 0;

  render() {
    this.total = 0;

    return (
      <>
        <Header
          onSet={this.setOn}
          onPrintShow={this.onPrintShow}
          onCalcShow={this.onCalcShow}
        />
        <section className="childSection">
          {listData.map((item, key) => {
            this.total = this.total + item.total;
            return (
              <ItemChild
                key={key}
                id={key}
                delId={item.delId}
                title={item.name}
                discription={item.discription}
                price={item.price}
                count={item.count}
                total={item.total}
                imgName={item.imgName}
                imageUrl={item.imageUrl}
                setDeletingItems={this.setDeletingItems}
              />
            );
          })}
        </section>

        <AddForm
          setClassName={this.state.active ? "formSection" : "notActive"}
          onSet={this.setOn}
        />
        <PrintList
          setClassName={this.state.print ? "formSection" : "notActive"}
          onPrintShow={this.onPrintShow}
          onData={listData}
          totalCount={listData.length}
          totalPrice={this.total.toFixed(2)}
        />
        <Calculation
          setClassName={this.state.calc ? "formSection" : "notActive"}
          onCalcShow={this.onCalcShow}
        />
        <Footer
          totalCount={listData.length}
          totalPrice={this.total.toFixed(2)}
        />
      </>
    );
  }
}
