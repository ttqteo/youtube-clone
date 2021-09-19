import { Col, Row } from "antd";
import React from "react";
import "./Video.css";
import VideoCard from "../VideoCard";
import { videos } from "../api";

export default function Video() {
  return (
    <div className="video">
      <h1 className="recommend-title">Recommend</h1>
      <Row gutter={16}>
        {videos.map((video, index) => (
          <Col span={6} key={index}>
            <VideoCard type="home" video={video} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
