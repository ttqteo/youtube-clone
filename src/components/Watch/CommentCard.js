import { Col, Row, Avatar } from "antd";
import React from "react";
import ThumbUpOutlinedIcon from "@material-ui/icons/ThumbUpOutlined";
import ThumbDownOutlinedIcon from "@material-ui/icons/ThumbDownOutlined";
import MoreVertOutlinedIcon from "@material-ui/icons/MoreVertOutlined";
import "./CommentCard.css";

export default function CommentCard({
  userAvatar,
  userName,
  commentedAt,
  comment,
  like,
}) {
  return (
    <div className="comment-row-wrapper">
      <Row>
        <Col flex="52px">
          <Avatar src={userAvatar}>
            {" "}
            {userAvatar ? "" : userName.charAt(0).toUpperCase()}
          </Avatar>
        </Col>
        <Col flex="auto">
          <div className="comment-wrapper">
            <span className="user-name">{userName}</span>
            <span className="comment-time"> {commentedAt}</span>
            <br />
            <span>{comment}</span>
          </div>
          <div className="comment-react">
            <div className="wrapper">
              <ThumbUpOutlinedIcon className="icon" />
              <span>{like}</span>
            </div>
            <div className="wrapper">
              <ThumbDownOutlinedIcon className="icon" />
            </div>
          </div>
        </Col>
        <Col flex="32px">
          <MoreVertOutlinedIcon className="icon-option" />
        </Col>
      </Row>
    </div>
  );
}
