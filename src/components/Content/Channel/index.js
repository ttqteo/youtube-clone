import React from "react";
import Sidebar from "../Siderbar/Sidebar";
import ContentChannel from "./ContentChannel";

export default function Channel(props) {
  const { channelId } = props.match.params;
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <ContentChannel channelId={channelId} />
    </div>
  );
}
