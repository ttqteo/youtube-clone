import React from "react";
import ModalRow from "./ModalRow";
import PlaylistPlayOutlinedIcon from "@material-ui/icons/PlaylistPlayOutlined";
import WatchLaterOutlinedIcon from "@material-ui/icons/WatchLaterOutlined";
import PlaylistAddOutlinedIcon from "@material-ui/icons/PlaylistAddOutlined";
import FlagOutlinedIcon from "@material-ui/icons/FlagOutlined";
import "./HomeModal.css";

export default function HomeModal() {
  return (
    <div className="home-modal disabled">
      <ModalRow Icon={PlaylistPlayOutlinedIcon} Name="Add to Queue" />
      <ModalRow Icon={WatchLaterOutlinedIcon} Name="Watch Later" />
      <ModalRow Icon={PlaylistAddOutlinedIcon} Name="Save to Playlist" />
      <div className="line" />
      <ModalRow Icon={FlagOutlinedIcon} Name="Report" />
    </div>
  );
}
