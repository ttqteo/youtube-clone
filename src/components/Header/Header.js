import React, { useEffect, useState } from "react";
import MenuOutlinedIcon from "@material-ui/icons/MenuOutlined";
import ClearIcon from "@material-ui/icons/Clear";
import SearchIcon from "@material-ui/icons/Search";
import MicOutlinedIcon from "@material-ui/icons/MicOutlined";
import VideoCallOutlinedIcon from "@material-ui/icons/VideoCallOutlined";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import Brightness4Icon from "@material-ui/icons/Brightness4";
import { Avatar } from "antd";
import "./Header.css";
import { Link, useHistory } from "react-router-dom";
import "antd/dist/antd.css";
import logo from "./youtube-logo.png";
import logoDark from "./youtube-logo-dark.png";

const handleSidebar = (e) => {
  if (e.target.closest(".App").querySelector(".watch")) {
    document.querySelector(".sidebar").classList.toggle("hide");
  } else {
    document.querySelector(".sidebar").classList.toggle("min");
    document.querySelector(".sidebar__full").classList.toggle("disabled");
    document.querySelector(".sidebar__min").classList.toggle("disabled");
  }
};

const handleMode = () => {
  var curTheme = document.documentElement.getAttribute("data-theme");
  if (curTheme === "dark") {
    document
      .querySelector(".header__left .logo")
      .setAttribute("src", `${logo}`);
    curTheme = null;
  } else {
    curTheme = "dark";
    document
      .querySelector(".header__left .logo")
      .setAttribute("src", `${logoDark}`);
  }
  document.documentElement.setAttribute("data-theme", curTheme);
};

export default function Header() {
  let history = useHistory();
  const [inputSearch, setInputSearch] = useState("");
  const handleOnSearch = () => {
    if (inputSearch) history.push(`/search/${inputSearch}`);
  };
  useEffect(() => {
    const clearBtn = document.querySelector(
      ".header__center .input-search .icon-clear"
    );
    if (inputSearch === "") clearBtn.classList.toggle("disabled", true);
    else clearBtn.classList.toggle("disabled", false);
  }, [inputSearch]);
  return (
    <div className="header__wrapper">
      <div className="header">
        <div className="header__left">
          <div
            style={{
              width: "72px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div className="icon btn-click" onClick={(e) => handleSidebar(e)}>
              <MenuOutlinedIcon />
            </div>
          </div>
          <Link to="/">
            <img src={logo} className="logo" />
          </Link>
        </div>
        <div className="header__center">
          <div className="input-search">
            <input
              type="text"
              placeholder="Search"
              value={inputSearch}
              onChange={(e) => setInputSearch(e.target.value)}
              onKeyUp={(e) => e.key === "Enter" && handleOnSearch()}
            />
            <ClearIcon
              className="icon-clear disabled"
              onClick={() => {
                setInputSearch("");
                document.querySelector(".input-search input").focus();
              }}
            />
          </div>
          <div className="icon-search" onClick={handleOnSearch}>
            <SearchIcon />
          </div>
          <MicOutlinedIcon className="icon" style={{ cursor: "no-drop" }} />
        </div>
        <div className="header__right">
          <SearchIcon className="icon" />
          <VideoCallOutlinedIcon
            className="icon"
            style={{ cursor: "no-drop" }}
          />
          <Brightness4Icon
            fontSize="small"
            className="icon"
            onClick={handleMode}
          />
          <NotificationsNoneOutlinedIcon
            className="icon"
            style={{ cursor: "no-drop" }}
          />
          <Link to="/channel/001">
            <Avatar
              className="user"
              size="small"
              src="https://yt3.ggpht.com/ytc/AKedOLRIec7gUC89wc0OGstCraoIatVagBJHOpLW-n5QrQ=s176-c-k-c0x00ffffff-no-rj-mo"
              icon={<PersonOutlineOutlinedIcon fontSize="small" />}
            />
          </Link>
        </div>
      </div>
    </div>
  );
}
