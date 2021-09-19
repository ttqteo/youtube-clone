import React from "react";
import "./Category.css";

export default function Category() {
  return (
    <div className="category" style={{ backgroundColor: "#FFF" }}>
      <div className="item selected">All</div>
      <div className="item">Live</div>
      <div className="item">Music</div>
      <div className="item">Rhythm & Blues</div>
    </div>
  );
}
