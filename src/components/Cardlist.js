import React from "react";
import Card from "./Card";

const Cardlist = props => {
  return props.robots.map((user, i) => <Card key={i} user={user} />);
};

export default Cardlist;
