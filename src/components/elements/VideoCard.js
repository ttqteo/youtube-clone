import React from "react";
import "./VideoCard.css";
import { channel } from "../api";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import { Link } from "react-router-dom";
import HomeModal from "../modals/HomeModal";

const handleClickOption = (e) => {
  e.preventDefault();
  const left = e.target.getBoundingClientRect().left - 160;
  const top = e.target.getBoundingClientRect().top + 32;
  const modal = e.target.closest(".video-card").querySelector(".home-modal");
  modal.style.top = top + "px";
  modal.style.left = left + "px";
  const state = modal.classList.contains("disabled");
  document.querySelectorAll(".home-modal").forEach((value) => {
    if (!value.classList.contains("disabled"))
      value.classList.toggle("disabled");
  });
  modal.classList.toggle("disabled", !state);
  document.body.classList.toggle("modal-open");
};

export default function VideoCard({ type, video }) {
  const channelVideo = channel.find(
    (value) => value.channelID === video.channelID
  );

  return (
    <Link to={`/watch/${video.link}`}>
      <div className={`video-card ${type}`}>
        <div className={`thumbnail__wrapper ${type}`}>
          <img src={video.thumbnail} className={`thumbnail ${type}`} />
          <span className={`timestamp ${type}`}>{video.timestamp}</span>
          <div className={`play-btn ${type}`}>
            <PlayArrowIcon fontSize="inherit" />
          </div>
          <div className={`function-btn ${type}`}>
            <div className={`function-btn-icon ${type}`}>
              <AccessTimeIcon />
            </div>
            <div className={`function-btn-icon ${type}`}>
              <PlaylistAddIcon />
            </div>
          </div>
        </div>
        <div className={`video-info ${type}`}>
          <div>
            <Link to={`/channel/${channelVideo.channelID}`}>
              <div className={`user-info-wrapper ${type}`}>
                <img
                  src={channelVideo.avatar}
                  className={`userAvatar ${type}`}
                />
                <span className={`user-channel ${type}`}>
                  {channelVideo.name}
                </span>
              </div>
            </Link>
            <span className={`video-caption ${type}`}>{video.caption}</span>
          </div>
          <div className={`video-center ${type}`}>
            <span className={`video-title ${type}`}>{video.title}</span>
            <div>
              <Link to={`/channel/${channelVideo.channelID}`}>
                <span className={`video-channel ${type}`}>
                  {channelVideo.name}
                </span>
              </Link>
            </div>
            <span className={`video-views ${type}`}>
              {video.views} • {video.date}
            </span>
          </div>
          <div
            className={`video-option-icon btn-click ${type}`}
            onClick={(e) => handleClickOption(e)}
          >
            <MoreVertIcon />
          </div>
        </div>
        <HomeModal />
      </div>
    </Link>
  );
}
