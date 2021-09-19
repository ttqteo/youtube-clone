import React from "react";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@material-ui/icons/ThumbDownOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import PlaylistAddOutlinedIcon from "@material-ui/icons/PlaylistAddOutlined";
import MoreHorizOutlinedIcon from "@material-ui/icons/MoreHorizOutlined";
import "./WatchVideoCard.css";
import { Col, Row } from "antd";
import { video } from "../api";
import { Link } from "react-router-dom";

export default function WatchVideoCard() {
  return (
    <div>
      <div className="watch-video-card-wrapper">
        <div className="watch-video-play">
          <iframe
            width="1280"
            height="720"
            src={`https://www.youtube.com/embed/${video.link}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </div>
        <div className="watch-video-title-wrapper">
          <span className="watch-video-hashtag">{video.hashtag}</span>
          <br />
          <span className="watch-video-title">{video.title}</span>
        </div>
        <div className="watch-video-react">
          <span className="watch-video-react-left">
            {video.views} • {video.date}
          </span>
          <div className="watch-video-react-right">
            <div className="like-wrapper">
              <div className="icon-wrapper">
                <ThumbUpOutlinedIcon className="icon" />
                <span className="text">661K</span>
              </div>
              <div className="icon-wrapper">
                <ThumbDownOutlinedIcon className="icon" />
                <span className="text">2.3K</span>
              </div>
            </div>
            <div className="icon-wrapper">
              <ShareOutlinedIcon className="icon" />
              <span className="text">SHARE</span>
            </div>
            <div className="icon-wrapper">
              <PlaylistAddOutlinedIcon className="icon" />
              <span className="text">SAVE</span>
            </div>
            <div className="icon-wrapper" style={{ marginRight: "0" }}>
              <MoreHorizOutlinedIcon className="icon" />
            </div>
          </div>
        </div>
      </div>
      <div className="watch-video-info">
        <Row>
          <Col flex="64px">
            <Link to="/channel">
              <img src={video.userAvatar} style={{ borderRadius: "50%" }} />
            </Link>
          </Col>
          <Col flex="auto" style={{ margin: "auto" }}>
            <div className="channel-wrapper">
              <Link to="/channel" className="channel-name">
                {video.channel}
              </Link>
              <span className="channel-sub">
                {video.subscriber} subscribers
              </span>
            </div>
          </Col>
        </Row>
        <div className="watch-video-caption">
          <span>{video.caption}</span>
        </div>
      </div>
    </div>
  );
}
