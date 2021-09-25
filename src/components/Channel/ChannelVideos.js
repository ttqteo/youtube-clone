import { Col, Row } from "antd";
import React from "react";
import VideoCard from "../elements/VideoCard";

export default function ChannelVideos({ videos }) {
  return (
    <div>
      <div
        style={{ display: "flex", alignItems: "center", margin: "4px 0 8px" }}
      >
        <span style={{ fontSize: "16px" }}>Uploads</span>
      </div>
      <div style={{ position: "relative" }}>
        <Row style={{ marginTop: "16px" }} gutter={4}>
          {videos.map((video, index) => (
            <Col xl={4} md={8} xs={12} key={index}>
              <VideoCard type="channel" video={video} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
