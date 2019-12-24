import React from "react";
import "./card-list.styles.css";

//Functional approach to creating react components
export const CardList = props => {
  return <div className="card-list">{props.children}</div>;
};
