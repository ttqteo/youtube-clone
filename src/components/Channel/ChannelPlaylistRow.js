import React from "react";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import ArrowForwardIosOutlinedIcon from "@material-ui/icons/ArrowForwardIosOutlined";
import ArrowBackIosOutlinedIcon from "@material-ui/icons/ArrowBackIosOutlined";
import "./ChannelPlaylistRow.css";
import VideoCard from "../elements/VideoCard";
import { videos } from "../api";
import { Col, Row } from "antd";

export default function ChannelPlaylistRow({ name, dsc, index, playlist }) {
  const playlistVideos = playlist.videos;
  let countVideo = playlistVideos.length - 6;
  const handleClickNextArrow = (e) => {
    const index = e.target
      .closest(".channel-row_playlist-wrapper")
      .getAttribute("data-index");
    const playlistWidth = document.querySelectorAll(".channel-row__playlist")[
      index
    ];
    document
      .querySelectorAll(".channel-row__icon-back")
      [index].classList.toggle("disabled", false);
    countVideo -= 6;
    if (countVideo < 0)
      document
        .querySelectorAll(".channel-row__icon-next")
        [index].classList.toggle("disabled", true);
    playlistWidth.scrollLeft += 1284;
  };

  const handleClickBackArrow = (e) => {
    const index = e.target
      .closest(".channel-row_playlist-wrapper")
      .getAttribute("data-index");
    const playlistWidth = document.querySelectorAll(".channel-row__playlist")[
      index
    ];
    countVideo += 6;
    playlistWidth.scrollLeft -= 1284;
    if (countVideo >= playlistVideos.length - 6) {
      document
        .querySelectorAll(".channel-row__icon-next")
        [index].classList.toggle("disabled", false);
      document
        .querySelectorAll(".channel-row__icon-back")
        [index].classList.toggle("disabled", true);
    }
  };
  return (
    <div style={{ padding: "12px 0" }}>
      <div style={{ display: "flex", alignItems: "center", margin: "4px 0" }}>
        <span
          style={{ fontSize: "16px", fontWeight: "500", cursor: "no-drop" }}
        >
          {name}
        </span>
        <div className="channel__play-all-btn">
          <PlayArrowIcon />
          <span>PLAY ALL</span>
        </div>
      </div>
      <span>{dsc}</span>
      <div
        style={{ position: "relative" }}
        className="channel-row_playlist-wrapper"
        data-index={index}
      >
        <div
          className="channel-row__icon-back disabled"
          onClick={(e) => handleClickBackArrow(e)}
        >
          <ArrowBackIosOutlinedIcon fontSize="inherit" />
        </div>
        <Row
          style={{ marginTop: "16px" }}
          wrap={false}
          gutter={4}
          className="channel-row__playlist"
        >
          {playlistVideos.map((video, index) => (
            <Col xl={4} md={8} xs={12} key={index}>
              <VideoCard
                type="channel"
                video={videos.find((value) => value.link === video)}
              />
            </Col>
          ))}
        </Row>
        {playlistVideos.length > "6" && (
          <div
            className="channel-row__icon-next"
            onClick={(e) => handleClickNextArrow(e)}
          >
            <ArrowForwardIosOutlinedIcon fontSize="inherit" />
          </div>
        )}
      </div>
    </div>
  );
}
