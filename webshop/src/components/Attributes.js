import SingleAttribute from "./SingleAttribute";

import React, { Component } from "react";

class Attributes extends Component {
  render() {
    //console.log(this.props.selectedAttributes);

    if (this.props.attributes !== undefined) {
      const atributeList = this.props.attributes.map((singleAtribute) => (
        <SingleAttribute
          attributes={singleAtribute}
          selectedAttributes={this.props.selectedAttributes}
          itemid={this.props.itemid}
          minicart={this.props.minicart}
        />
      ));

      return <div>{atributeList}</div>;
    }

    return <div></div>;
  }
}

export default Attributes;
