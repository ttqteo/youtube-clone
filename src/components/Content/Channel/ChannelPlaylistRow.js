import React from "react";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import "./ChannelPlaylistRow.css";
import VideoCard from "../VideoCard";
import { videos, channel } from "../api";
import { Col, Row } from "antd";

export default function ChannelPlaylistRow({ name, dsc }) {
  return (
    <div style={{ padding: "24px 0 20px" }}>
      <div style={{ display: "flex", alignItems: "center", margin: "4px 0" }}>
        <span
          style={{ fontSize: "16px", fontWeight: "500", cursor: "pointer" }}
        >
          {name}
        </span>
        <div className="channel__play-all-btn">
          <PlayArrowIcon />
          <span>PLAY ALL</span>
        </div>
      </div>
      <span style={{ color: "#606060" }}>{dsc}</span>
      <Row style={{ marginTop: "16px" }}>
        {videos.map((video, index) => (
          <Col span={4} key={index}>
            <VideoCard type="channel" video={video} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
