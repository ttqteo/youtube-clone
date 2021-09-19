import React from "react";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import MicOutlinedIcon from "@material-ui/icons/MicOutlined";
import VideoCallOutlinedIcon from "@material-ui/icons/VideoCallOutlined";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import ClearIcon from "@material-ui/icons/Clear";
import { Input, Avatar } from "antd";
import "./Header.css";
import { Link, useHistory } from "react-router-dom";
import "antd/dist/antd.css";

const handleSidebar = () => {
  document.querySelector(".sidebar").classList.toggle("min");
  document.querySelector(".sidebar__full").classList.toggle("disabled");
  document.querySelector(".sidebar__min").classList.toggle("disabled");
};

export default function Header() {
  let history = useHistory();
  const handleOnSearch = (value, e) => {
    if (value) history.push(`/search/${value}`);
  };
  return (
    <div className="header">
      <div className="header__left">
        <div className="icon" onClick={handleSidebar}>
          <MenuOutlinedIcon />
        </div>
        <Link to="/">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/2560px-YouTube_Logo_2017.svg.png"
            alt="Youtube Homepage"
          />
        </Link>
      </div>
      <div className="header__center">
        <Input.Search
          placeholder="Search"
          allowClear
          onSearch={handleOnSearch}
        />
        <MicOutlinedIcon className="icon" />
      </div>
      <div className="header__right">
        <VideoCallOutlinedIcon className="icon" />
        <Brightness4Icon fontSize="small" className="icon" />
        <NotificationsNoneOutlinedIcon className="icon" />
        <Link to="/channel">
          <Avatar
            className="user"
            size="small"
            icon={<PersonOutlineOutlinedIcon fontSize="small" />}
          />
        </Link>
      </div>
    </div>
  );
}
