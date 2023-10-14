import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { closePanel } from "../slices/sidebarSlice";
import { useSearchParams } from "react-router-dom";
import { VIDEO_BY_ID_API } from "../constants";
import VideoWatchInfo from "./VideoWatchInfo";
import AppCategories from "./AppCategories";
import VideoRecommendations from "./VideoRecommendations";

function VideoWatch() {
  const dispatch = useDispatch();
  const [params] = useSearchParams();
  const [videoData, setVideoData] = useState(null);
  const videoId = params.get("v");
  const videoUrl = `https://www.youtube.com/embed/${videoId}?si=ntOvBLOpkaH57MnW&`; //autoplay=1

  useEffect(() => {
    dispatch(closePanel());
    getVideoDetail(videoId);
  }, [videoId]);

  const getVideoDetail = async (videoId) => {
    const url = VIDEO_BY_ID_API(videoId);
    const response = await fetch(url);
    const data = await response.json();
    console.log("setVideoData data", data);
    if (data.items && data.items.length > 0) {
      setVideoData(data.items[0]);
    }
  };

  return (
    <div className="flex w-full mx-8 py-6">
      <div className="flex lg:w-[55rem] flex-col">
        <iframe
          className="flex w-full h-[30rem] rounded-xl"
          width="560"
          height="315"
          src={videoUrl}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        {videoData && <VideoWatchInfo data={videoData} />}
      </div>
      <div className="flex flex-col w-[calc(100vw-60rem)] px-4">
        <div className="flex">
          <AppCategories />
        </div>
        <div className="flex">
          <VideoRecommendations /> 
        </div>
      </div>
    </div>
  );
}

export default VideoWatch;
