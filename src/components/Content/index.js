import React from "react";
import { Row, Col } from "antd";
import Sidebar from "./Siderbar/Sidebar";
import RecommendVideo from "./Home/index";

export default function Content() {
  return (
    <div className="content" style={{ display: "flex" }}>
      <Sidebar />
      <RecommendVideo />
    </div>
  );
}
