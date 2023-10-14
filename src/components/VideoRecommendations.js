import React, { useEffect, useState } from "react";
import { VIDEO_RECOMMENDATION_API } from "../constants";
import { useDispatch, useSelector } from "react-redux";
import { setNextPageToken } from "../slices/videoSlice";
import RecommendedVideoCard from "./RecommendedVideoCard";
import { Link } from "react-router-dom";

function VideoRecommendations() {
  const [pageToken, setpageToken] = useState("");
  const [recommendations, setRecommendations] = useState([]);
  const dispatch = useDispatch();
  const pageTokenFromStore = useSelector((store) => store.video.nextPageToken);
  console.log("pageTokenFromStore", pageTokenFromStore);
  useEffect(() => {
    getVideoRecommendations();
  }, []);

  useEffect(() => {
    dispatch(setNextPageToken(pageToken));
  }, [pageToken]);

  const getVideoRecommendations = async () => {
    const response = await fetch(VIDEO_RECOMMENDATION_API(pageTokenFromStore));
    const data = await response.json();
    if (data.nextPageToken) {
      setpageToken(data.nextPageToken);
    }
    setRecommendations(data.items);
  };

  return (
    <div className="flex flex-col px-2">
      {recommendations.map((r) => (
        <Link key={r.id} className="cursor-pointer" to={"/watch?v=" + r.id}>
          <RecommendedVideoCard  data={r} />
        </Link>
      ))}
    </div>
  );
}

export default VideoRecommendations;
