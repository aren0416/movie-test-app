import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

const Navigation = () => {
  return (
    <div className="nav">
      <Link to="/">home</Link>
      <Link to="/about">About</Link>
    </div>
  );
};

export default Navigation;
