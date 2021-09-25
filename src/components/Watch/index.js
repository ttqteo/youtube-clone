import { Col, Row } from "antd";
import React from "react";
import WatchRecommend from "./WatchRecommend";
import WatchVideo from "./WatchVideo";

export default function Watch(props) {
  const { videoLink } = props.match.params;
  return (
    <div className="watch" style={{ maxWidth: "1700px", margin: "auto" }}>
      <Row>
        <Col flex="1280px">
          <WatchVideo videoLink={videoLink} />
        </Col>
        <Col flex="420px">
          <WatchRecommend />
        </Col>
      </Row>
    </div>
  );
}
