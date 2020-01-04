import React from "react";
import "./search-box.styles.css";

//Component Expects placeholder and handle change which is passed as props form App.js
export const SearchBox = ({ placeholder, handleChange }) => {
  return (
    <input
      type="search"
      className="search"
      placeholder={placeholder}
      onChange={handleChange}
    />
  );
};
