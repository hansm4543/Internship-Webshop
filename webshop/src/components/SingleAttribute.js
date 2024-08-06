import React, { Component } from "react";
import "./attributes.css";

class SingleAttribute extends Component {
  render() {
    if (this.props.attributes !== undefined) {
      function test(element, index, props) {
        if (props.selectedAttributes !== undefined) {
          for (let i = 0; i < props.selectedAttributes.length; i++) {
            if (element.displayValue === props.selectedAttributes[i].value) {
              return true;
            }
          }
          return false;
        } else {
          if (index === 0) {
            return true;
          } else {
            return false;
          }
        }
      }

      const atributeTextList = this.props.attributes.items.map(
        (element, index) => (
          <div>
            <input
              defaultChecked={test(element, index, this.props)}
              type="radio"
              id={element.value}
              name={
                this.props.minicart === false
                  ? this.props.itemid + this.props.attributes.name
                  : this.props.itemid + this.props.attributes.name + "2"
              }
              value={element.displayValue}
            />
            <label for={element.value}>{element.displayValue}</label>
          </div>
        )
      );

      const atributeSwatchList = this.props.attributes.items.map(
        (element, index) => (
          <ul>
            <li>
              <label>
                <input
                  defaultChecked={test(element, index, this.props)}
                  id={element.value}
                  type="radio"
                  name={this.props.itemid + this.props.attributes.name}
                  value={element.displayValue}
                ></input>
                <span
                  class="swatch"
                  style={{
                    backgroundColor: element.displayValue,
                  }}
                ></span>{" "}
                {element.displayValue}
              </label>
            </li>
          </ul>
        )
      );

      if (this.props.attributes.type === "text") {
        return (
          <div className="Attributes">
            <p>Please select {this.props.attributes.name}:</p>
            {atributeTextList}
          </div>
        );
      } else if (this.props.attributes.type === "swatch") {
        return (
          <div class="colors Attributes">
            <br />
            <p>Please select {this.props.attributes.name}:</p>
            {atributeSwatchList}
          </div>
        );
      }
    }

    return (
      <div>
        <label for="options">Something went wrong with options:</label>
      </div>
    );
  }
}

export default SingleAttribute;
