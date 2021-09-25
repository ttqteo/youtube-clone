import React from "react";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@material-ui/icons/ThumbDownOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import PlaylistAddOutlinedIcon from "@material-ui/icons/PlaylistAddOutlined";
import MoreHorizOutlinedIcon from "@material-ui/icons/MoreHorizOutlined";
import "./WatchVideoCard.css";
import { Col, Row } from "antd";
import { channel, videos } from "../api";
import { Link } from "react-router-dom";

export default function WatchVideoCard({ videoLink }) {
  const curVideo = videos.find((video) => video.link === videoLink);
  const curChannel = channel.find(
    (channel) => channel.channelID === curVideo.channelID
  );
  return (
    <div className="watch-video__card">
      <div className="watch-video-card-wrapper">
        <div className="watch-video-play">
          <iframe
            className="watch-video-play-embbed"
            src={`https://www.youtube.com/embed/${videoLink}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          />
        </div>
        <div className="watch-video-title-wrapper">
          <span className="watch-video-hashtag">{curVideo.hashtag}</span>
          <br />
          <span className="watch-video-title">{curVideo.title}</span>
        </div>
        <div className="watch-video-react">
          <span className="watch-video-react-left">
            {curVideo.views} • {curVideo.date}
          </span>
          <div className="watch-video-react-right">
            <div className="like-wrapper">
              <div className="icon-wrapper">
                <ThumbUpOutlinedIcon className="icon" />
                <span className="text">{curVideo.like}</span>
              </div>
              <div className="icon-wrapper">
                <ThumbDownOutlinedIcon className="icon" />
                <span className="text">{curVideo.dislike}</span>
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
      <div className="line" />
      <div className="watch-video-info">
        <Row>
          <Col flex="64px">
            <Link to={`/channel/${curChannel.channelID}`}>
              <img
                src={curChannel.avatar}
                style={{ borderRadius: "50%", width: "48px" }}
              />
            </Link>
          </Col>
          <Col flex="auto" style={{ margin: "auto" }}>
            <div className="channel-wrapper">
              <Link
                to={`/channel/${curChannel.channelID}`}
                className="channel-name"
              >
                {curChannel.name}
              </Link>
              <span className="channel-sub">
                {curChannel.subscriber} subscribers
              </span>
            </div>
          </Col>
        </Row>
        <div className="watch-video-caption">
          <span>{curVideo.caption}</span>
        </div>
        <div className="line" />
      </div>
    </div>
  );
}
