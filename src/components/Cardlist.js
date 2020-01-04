import React, { Component } from "react";
import Card from "./Card";

class Cardlist extends Component {
  render() {
    return this.props.robots.map((user, i) => {
      return <Card key={i} user={user} />;
    });
  }
}

export default Cardlist;
