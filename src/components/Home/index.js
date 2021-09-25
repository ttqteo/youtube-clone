import React, { useEffect, useState } from "react";
import { Col, Row } from "antd";
import VideoCard from "../elements/VideoCard";
import ArrowForwardIosOutlinedIcon from "@material-ui/icons/ArrowForwardIosOutlined";
import ArrowBackIosOutlinedIcon from "@material-ui/icons/ArrowBackIosOutlined";
import { category, videos } from "../api";
import "./Category.css";

export default function Content() {
  const [scrollingLeft, setScrollingLeft] = useState(0);
  useEffect(() => {
    const categoryList = document.querySelector(".category__list");
    categoryList.addEventListener("scroll", (e) => {
      setScrollingLeft(e.target.scrollLeft);
    });
  }, []);
  useEffect(() => {
    const categoryList = document.querySelector(".category__list");
    document
      .querySelector(".category__icon-back")
      .classList.toggle("disabled", scrollingLeft === 0);
    document
      .querySelector(".category__icon-next")
      .classList.toggle(
        "disabled",
        scrollingLeft === categoryList.scrollWidth - categoryList.offsetWidth
      );
  }, [scrollingLeft]);

  const handleClickNext = () => {
    const categoryList = document.querySelector(".category__list");
    categoryList.scrollLeft += 400;
  };
  const handleClickBack = () => {
    const categoryList = document.querySelector(".category__list");
    categoryList.scrollLeft -= 400;
  };

  return (
    <div style={{ minWidth: "calc(100% - 240px)" }}>
      <div className="category">
        <div className="category__icon-back disabled" onClick={handleClickBack}>
          <ArrowBackIosOutlinedIcon />
        </div>
        <div className="category__list">
          {category.map((value, index) => (
            <div className={`item ${index === 0 && "selected"}`} key={index}>
              {value}
            </div>
          ))}
        </div>
        <div className="category__icon-next" onClick={handleClickNext}>
          <ArrowForwardIosOutlinedIcon />
        </div>
      </div>
      <div className="video" style={{ margin: "16px 40px" }}>
        <div
          className="recommend-title"
          style={{ fontSize: "20px", fontWeight: "500", marginBottom: "10px" }}
        >
          Recommend
        </div>
        <Row gutter={16}>
          {videos.map((video, index) => (
            <Col key={index} xl={6} md={12} xs={24}>
              <VideoCard type="home" video={video} />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
