import React from "react";
import { timeAgo } from "../utils/videosUtils";

function VideoInfo({ data }) {
  const { snippet, statistics } = data;
  const { title, channelTitle, publishedAt } = snippet;
  const { viewCount } = statistics;
  const postedAt = timeAgo(publishedAt);

  let formatter = Intl.NumberFormat("en", { notation: "compact" });
  const formatedViewsCount = formatter.format(viewCount);
  
  return (
    <div className="info p-2">
      <div className="font-bold whitespace-pre-wrap">{title}</div>
      <div className="text-gray-600">{channelTitle}</div>
      <ul className="flex space-x-1">
        <li className="text-gray-600">{formatedViewsCount} views &#x2022;</li>
        <li className="text-gray-600">{postedAt}</li>
      </ul>
    </div>
  );
}

export default VideoInfo;
