import React from "react";
import { Card } from "../card/card.component";
import "./card-list.styles.css";

//Functional approach to creating react components
//Component Expects monsters objects which is passed as props form App.js
export const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map(monster => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};
