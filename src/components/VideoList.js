import React, { useEffect, useState } from "react";
import { VIDEO_LIST_API, VIDEO_RECOMMENDATION_API } from "../constants";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

function VideoList() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideosList();
  }, []);
  const getVideosList = async () => {
    const response = await fetch(VIDEO_RECOMMENDATION_API(""));
    const data = await response.json();
    console.log("videos data", data);
    setVideos(data.items);
  };
  return (
    <div className="flex flex-wrap">
      {videos.map((v) => (
        <Link  key={v.id} className="flex lg:w-1/4 w-full flex-col p-2 cursor-pointer shadow-sm" to={"/watch?v=" + v.id}>
          <VideoCard data={v} />
        </Link>
      ))}
    </div>
  );
}

export default VideoList;
