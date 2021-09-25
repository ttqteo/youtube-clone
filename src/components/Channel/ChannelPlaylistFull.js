import { Col, Row } from "antd";
import React from "react";
import { playlists, videos } from "../api";
import "./ChannelPlaylistFull.css";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";

export default function ChannelPlaylistFull({ channelId }) {
  return (
    <div>
      <div
        style={{ display: "flex", alignItems: "center", margin: "4px 0 8px" }}
      >
        <span style={{ fontSize: "16px" }}>Created playlist</span>
      </div>
      <div style={{ position: "relative" }}>
        <Row style={{ marginTop: "16px" }} gutter={4}>
          {playlists.map((playlist, index) => (
            <Col md={8} xs={12} xl={4} key={index}>
              {playlist.channelId === channelId && (
                <div className="playlist-card">
                  <div className="playlist-card__thumbnail">
                    <img
                      src={
                        videos.find(
                          (video) => video.link === playlist.videos[0]
                        ).thumbnail
                      }
                    />
                    <div className="playlist-card__quantity">
                      <span>{playlist.videos.length}</span>
                      <PlaylistPlayIcon fontSize="medium" />
                    </div>
                    <div className="playlist-card__hover">
                      <PlayArrowIcon />
                      <span style={{ marginLeft: "8px" }}>PLAY ALL</span>
                    </div>
                  </div>
                  <div className="playlist-card__info">
                    <span>{playlist.name}</span>
                  </div>
                  <span className="playlist-card__view">
                    VIEW FULL PLAYLIST
                  </span>
                </div>
              )}
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
