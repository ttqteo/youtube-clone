import React from "react";
import Sidebar from "../Siderbar/Sidebar";
import ContentChannel from "./ContentChannel";

export default function Channel() {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <ContentChannel />
    </div>
  );
}
