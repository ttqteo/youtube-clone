import React from "react";
import SortOutlinedIcon from "@material-ui/icons/SortOutlined";
import "./WatchVideoComment.css";
import CommentCard from "./CommentCard";

const comment = {
  userAvatar:
    "https://yt3.ggpht.com/yti/APfAmoHy7l1paxe8PZqCDTZ9ctAOL9RRDS2HKSJPzmplsrE=s48-c-k-c0x00ffffff-no-rj",
  userName: "Trần Tú Quang",
  commentedAt: "3 months ago",
  comment:
    "I'm pretty glad that there's also a few of mac's unreleased songs in this playlist. Good job with the playlist!",
  like: "15",
};

export default function WatchVideoComment() {
  return (
    <div className="comment-wrapper">
      <div className="state-wrapper">
        <span className="text">5 Comments</span>
        <div className="state-sort">
          <SortOutlinedIcon className="icon" />
          <span className="text">SORT BY</span>
        </div>
      </div>
      <div>
        <CommentCard
          userAvatar={comment.userAvatar}
          userName={comment.userName}
          commentedAt={comment.commentedAt}
          comment={comment.comment}
          like={comment.like}
        />
        <CommentCard
          userAvatar={comment.userAvatar}
          userName={comment.userName}
          commentedAt={comment.commentedAt}
          comment={comment.comment}
          like={comment.like}
        />
        <CommentCard
          userAvatar={comment.userAvatar}
          userName={comment.userName}
          commentedAt={comment.commentedAt}
          comment={comment.comment}
          like={comment.like}
        />
        <CommentCard
          userAvatar={comment.userAvatar}
          userName={comment.userName}
          commentedAt={comment.commentedAt}
          comment={comment.comment}
          like={comment.like}
        />
        <CommentCard
          userName={comment.userName}
          commentedAt={comment.commentedAt}
          comment={comment.comment}
          like={comment.like}
        />
      </div>
    </div>
  );
}
