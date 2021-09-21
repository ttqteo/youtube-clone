import React from "react";
import { Col, Row } from "antd";
import VideoCard from "../elements/VideoCard";
import { category, videos } from "../api";
import "./Category.css";

export default function Content() {
  return (
    <div style={{ width: "100%" }}>
      <div className="category">
        {category.map((value, index) => (
          <div className={`item ${index === 0 && "selected"}`} key={index}>
            {value}
          </div>
        ))}
      </div>
      <div className="video" style={{ margin: "16px 40px" }}>
        <h1 className="recommend-title" style={{ fontSize: "20px" }}>
          Recommend
        </h1>
        <Row gutter={16}>
          {videos.map((video, index) => (
            <Col span={6} key={index}>
              <VideoCard type="home" video={video} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
