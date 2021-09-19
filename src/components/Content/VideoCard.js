import React from "react";
import "./VideoCard.css";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import { Link } from "react-router-dom";

export default function VideoCard({ type, video }) {
  return (
    <Link to="/watch">
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
            <Link to="/channel">
              <div className={`user-info-wrapper ${type}`}>
                <img src={video.userAvatar} className={`userAvatar ${type}`} />
                <span className={`user-channel ${type}`}>{video.channel}</span>
              </div>
            </Link>
            <span className={`video-caption ${type}`}>{video.caption}</span>
          </div>
          <div className={`video-center ${type}`}>
            <span className={`video-title ${type}`}>{video.title}</span>
            <div>
              <Link to="/channel">
                <span className={`video-channel ${type}`}>{video.channel}</span>
              </Link>
            </div>
            <span className={`video-views ${type}`}>
              {video.views} • {video.date}
            </span>
          </div>
          <div className={`video-option-icon ${type}`}>
            <MoreVertIcon />
          </div>
        </div>
      </div>
    </Link>
  );
}
