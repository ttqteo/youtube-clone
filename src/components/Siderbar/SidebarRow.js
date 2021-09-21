import React from "react";
import "./SidebarRow.css";

export default function SidebarRow({ Icon, Name, selected, type }) {
  return (
    <div className={`sidebarRow ${selected ? "selected" : ""} ${type}`}>
      <Icon className="icon" />
      <span>{Name}</span>
    </div>
  );
}
