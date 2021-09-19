import { Col, Row } from "antd";
import React from "react";
import "./Video.css";
import VideoCard from "../VideoCard";

const videos = [
  {
    thumbnail:
      "https://i.ytimg.com/vi/m7QIYQ8agJY/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCa6ONQbKlTG88uqprFnm7I4zI62w",
    title: "[playlist] George with an empty room.",
    views: "152.8K views",
    date: "Sep 10, 2021",
    userAvatar:
      "https://yt3.ggpht.com/ytc/AKedOLS2cOY7-dwxUQ92fs3hb5vkXIh-GQjpTxbp7aXWQQ=s48-c-k-c0x00ffffff-no-rj",
    timestamp: "1:06:42",
    channel: "LEEPLAY",
  },
  {
    thumbnail:
      "https://i.ytimg.com/vi/odJcn2UtHFo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDPPDmxbeUGBzV_w7bR3cxeZue2Tw",
    title: "[playlist] A song that will make your night special.",
    views: "350K views",
    date: "Jul 14, 2021",
    userAvatar:
      "https://yt3.ggpht.com/AaWeqf5xfg0yR_e5ZLz2ldRaDs4k4VcJw7yZnmtpRnzoi4Fd50tcJDaiHu3LVDR6ZCTvcVxbtw=s48-c-k-c0x00ffffff-no-rj",
    timestamp: "50:26",
    channel: "may i choose a song for u?",
  },
  {
    thumbnail:
      "https://i.ytimg.com/vi/GMGBmQvvpHo/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDCVQcXJnkrmvElQ31g0T2ZWwPlqg",
    title: "[playlist] summer smell",
    views: "274.7K views",
    date: "Jul 25, 2021",
    userAvatar:
      "https://yt3.ggpht.com/ytc/AKedOLS2cOY7-dwxUQ92fs3hb5vkXIh-GQjpTxbp7aXWQQ=s48-c-k-c0x00ffffff-no-rj",
    timestamp: "51:44",
    channel: "LEEPLAY",
  },
  {
    thumbnail:
      "https://i.ytimg.com/vi/PpGzmXkq60U/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLA_n3M7b6pDf5F1rX9bIu1TcYN32g",
    title: "[playlist]  칠링백에 와인 담아 시원하게 한강 피크닉 중",
    views: "152.8K views",
    date: "Sep 10, 2021",
    userAvatar:
      "https://yt3.ggpht.com/ytc/AKedOLS2cOY7-dwxUQ92fs3hb5vkXIh-GQjpTxbp7aXWQQ=s48-c-k-c0x00ffffff-no-rj",
    timestamp: "46:35",
    channel: "LEEPLAY",
  },
  {
    thumbnail:
      "https://i.ytimg.com/vi/FjHGZj2IjBk/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBpOkQk_C8SpCwFpdHxrE5yMGKgrg",
    title:
      "[Study Sleep Relax 💖] Meditation - Monoman .beautiful comment section peaceful relaxing soothing",
    views: "57.6M views",
    date: "Jan 22, 2019",
    userAvatar:
      "https://yt3.ggpht.com/THmTU_rJJeRBQYrmxV5tWzg2qcWlbQlbjxZPWpr25MWOt8h7ZpLwk-hAlUkBqmYA54aNRMsVGw=s48-c-k-c0x00ffffff-no-rj",
    timestamp: "1:13:55",
    channel: "The Hanoi Chamomile",
  },
  {
    thumbnail:
      "https://i.ytimg.com/vi/w0YTXODO-dk/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDHilF9ATBN2O4xbRwpK8Tf2ej7UQ",
    title: "Mac Ayres와 플랫화이트가 맛있는 카페 (playlist)",
    views: "365K views",
    date: "Jun 9, 2021",
    userAvatar:
      "https://yt3.ggpht.com/ytc/AKedOLS2cOY7-dwxUQ92fs3hb5vkXIh-GQjpTxbp7aXWQQ=s48-c-k-c0x00ffffff-no-rj",
    timestamp: "1:18:50",
    channel: "LEEPLAY",
  },
  {
    thumbnail:
      "https://i.ytimg.com/vi/m7QIYQ8agJY/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCa6ONQbKlTG88uqprFnm7I4zI62w",
    title: "[playlist] George with an empty room.",
    views: "152.8K views",
    date: "Sep 10, 2021",
    userAvatar:
      "https://yt3.ggpht.com/ytc/AKedOLS2cOY7-dwxUQ92fs3hb5vkXIh-GQjpTxbp7aXWQQ=s48-c-k-c0x00ffffff-no-rj",
    timestamp: "1:06:42",
    channel: "LEEPLAY",
  },
  {
    thumbnail:
      "https://i.ytimg.com/vi/m7QIYQ8agJY/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCa6ONQbKlTG88uqprFnm7I4zI62w",
    title: "[playlist] George with an empty room.",
    views: "152.8K views",
    date: "Sep 10, 2021",
    userAvatar:
      "https://yt3.ggpht.com/ytc/AKedOLS2cOY7-dwxUQ92fs3hb5vkXIh-GQjpTxbp7aXWQQ=s48-c-k-c0x00ffffff-no-rj",
    timestamp: "1:06:42",
    channel: "LEEPLAY",
  },
  {
    thumbnail:
      "https://i.ytimg.com/vi/FjHGZj2IjBk/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBpOkQk_C8SpCwFpdHxrE5yMGKgrg",
    title:
      "[Study Sleep Relax 💖] Meditation - Monoman .beautiful comment section peaceful relaxing soothing",
    views: "57.6M views",
    date: "Jan 22, 2019",
    userAvatar:
      "https://yt3.ggpht.com/THmTU_rJJeRBQYrmxV5tWzg2qcWlbQlbjxZPWpr25MWOt8h7ZpLwk-hAlUkBqmYA54aNRMsVGw=s48-c-k-c0x00ffffff-no-rj",
    timestamp: "1:13:55",
    channel: "The Hanoi Chamomile",
  },
  {
    thumbnail:
      "https://i.ytimg.com/vi/w0YTXODO-dk/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDHilF9ATBN2O4xbRwpK8Tf2ej7UQ",
    title: "Mac Ayres와 플랫화이트가 맛있는 카페 (playlist)",
    views: "365K views",
    date: "Jun 9, 2021",
    userAvatar:
      "https://yt3.ggpht.com/ytc/AKedOLS2cOY7-dwxUQ92fs3hb5vkXIh-GQjpTxbp7aXWQQ=s48-c-k-c0x00ffffff-no-rj",
    timestamp: "1:18:50",
    channel: "LEEPLAY",
  },
  {
    thumbnail:
      "https://i.ytimg.com/vi/FjHGZj2IjBk/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBpOkQk_C8SpCwFpdHxrE5yMGKgrg",
    title:
      "[Study Sleep Relax 💖] Meditation - Monoman .beautiful comment section peaceful relaxing soothing",
    views: "57.6M views",
    date: "Jan 22, 2019",
    userAvatar:
      "https://yt3.ggpht.com/THmTU_rJJeRBQYrmxV5tWzg2qcWlbQlbjxZPWpr25MWOt8h7ZpLwk-hAlUkBqmYA54aNRMsVGw=s48-c-k-c0x00ffffff-no-rj",
    timestamp: "1:13:55",
    channel: "The Hanoi Chamomile",
  },
  {
    thumbnail:
      "https://i.ytimg.com/vi/w0YTXODO-dk/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDHilF9ATBN2O4xbRwpK8Tf2ej7UQ",
    title: "Mac Ayres와 플랫화이트가 맛있는 카페 (playlist)",
    views: "365K views",
    date: "Jun 9, 2021",
    userAvatar:
      "https://yt3.ggpht.com/ytc/AKedOLS2cOY7-dwxUQ92fs3hb5vkXIh-GQjpTxbp7aXWQQ=s48-c-k-c0x00ffffff-no-rj",
    timestamp: "1:18:50",
    channel: "LEEPLAY",
  },
  {
    thumbnail:
      "https://i.ytimg.com/vi/FjHGZj2IjBk/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBpOkQk_C8SpCwFpdHxrE5yMGKgrg",
    title:
      "[Study Sleep Relax 💖] Meditation - Monoman .beautiful comment section peaceful relaxing soothing",
    views: "57.6M views",
    date: "Jan 22, 2019",
    userAvatar:
      "https://yt3.ggpht.com/THmTU_rJJeRBQYrmxV5tWzg2qcWlbQlbjxZPWpr25MWOt8h7ZpLwk-hAlUkBqmYA54aNRMsVGw=s48-c-k-c0x00ffffff-no-rj",
    timestamp: "1:13:55",
    channel: "The Hanoi Chamomile",
  },
  {
    thumbnail:
      "https://i.ytimg.com/vi/w0YTXODO-dk/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDHilF9ATBN2O4xbRwpK8Tf2ej7UQ",
    title: "Mac Ayres와 플랫화이트가 맛있는 카페 (playlist)",
    views: "365K views",
    date: "Jun 9, 2021",
    userAvatar:
      "https://yt3.ggpht.com/ytc/AKedOLS2cOY7-dwxUQ92fs3hb5vkXIh-GQjpTxbp7aXWQQ=s48-c-k-c0x00ffffff-no-rj",
    timestamp: "1:18:50",
    channel: "LEEPLAY",
  },
  {
    thumbnail:
      "https://i.ytimg.com/vi/FjHGZj2IjBk/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBpOkQk_C8SpCwFpdHxrE5yMGKgrg",
    title:
      "[Study Sleep Relax 💖] Meditation - Monoman .beautiful comment section peaceful relaxing soothing",
    views: "57.6M views",
    date: "Jan 22, 2019",
    userAvatar:
      "https://yt3.ggpht.com/THmTU_rJJeRBQYrmxV5tWzg2qcWlbQlbjxZPWpr25MWOt8h7ZpLwk-hAlUkBqmYA54aNRMsVGw=s48-c-k-c0x00ffffff-no-rj",
    timestamp: "1:13:55",
    channel: "The Hanoi Chamomile",
  },
  {
    thumbnail:
      "https://i.ytimg.com/vi/w0YTXODO-dk/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDHilF9ATBN2O4xbRwpK8Tf2ej7UQ",
    title: "Mac Ayres와 플랫화이트가 맛있는 카페 (playlist)",
    views: "365K views",
    date: "Jun 9, 2021",
    userAvatar:
      "https://yt3.ggpht.com/ytc/AKedOLS2cOY7-dwxUQ92fs3hb5vkXIh-GQjpTxbp7aXWQQ=s48-c-k-c0x00ffffff-no-rj",
    timestamp: "1:18:50",
    channel: "LEEPLAY",
  },
];

export default function Video() {
  return (
    <div className="video">
      <h1 className="recommend-title">Recommend</h1>
      <Row gutter={16}>
        {videos.map((video, index) => (
          <Col span={6} key={index}>
            <VideoCard type="home" video={video} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
