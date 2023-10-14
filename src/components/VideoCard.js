import React from "react";

import VideoInfo from "./VideoInfo";

function VideoCard({ data }) {
  if (!data) return null;

  const { snippet } = data;
  const { thumbnails } = snippet;

  return (
    <div className="flex w-full flex-col">
      <img
        className="rounded-xl"
        src={thumbnails.medium.url}
        alt="video thumbnail"
      ></img>
      <VideoInfo data={data} />
    </div>
  );
}

export default VideoCard;
