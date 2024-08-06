import React, { Component } from "react";

class GiveBackPrice extends Component {
  render() {
    //console.log(this.props.currency)
    if (this.props.currency === "AUD") {
      return (
        <div>
          <p className="price">
            {this.props.symbolAUD} {this.props.priceAUD}
          </p>
        </div>
      );
    } else if (this.props.currency === "RUB") {
      return (
        <div>
          <p className="price">
            {this.props.symbolRUB} {this.props.priceRUB}
          </p>
        </div>
      );
    } else if (this.props.currency === "JPY") {
      return (
        <div>
          <p className="price">
            {this.props.symbolJPY} {this.props.priceJPY}
          </p>
        </div>
      );
    } else if (this.props.currency === "GBP") {
      return (
        <div>
          <p className="price">
            {this.props.symbolGBP} {this.props.priceGBP}
          </p>
        </div>
      );
    } else {
      return (
        <div>
          <p className="price">
            {this.props.symbolUSD} {this.props.priceUSD}
          </p>
        </div>
      );
    }
  }
}

export default GiveBackPrice;
