import { Col, Row } from "antd";
import React from "react";
import { videos } from "../api";
import VideoCard from "../elements/VideoCard";

export default function WatchRecommend() {
  return (
    <div style={{ margin: "20px 0 0 20px" }}>
      <Row>
        {videos.map((video, index) => (
          <Col xl={24} md={24} xs={24}>
            <VideoCard type="recommend" video={video} key={index} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
