import React from "react";
import "./ModalRow.css";

export default function ModalRow({ Icon, Name }) {
  return (
    <div className="modal-row" onClick={(e) => e.preventDefault()}>
      <Icon className="icon" fontSize="inherit" />
      <span>{Name}</span>
    </div>
  );
}
