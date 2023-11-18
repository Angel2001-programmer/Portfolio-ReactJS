import React, { Fragment } from "react";
import "./card.css";
const card = props  => {
  return  (<div className="child">
{props.children}
  </div>);
};

export default card;
