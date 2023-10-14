import React from "react";
import { timeAgo } from "../utils/videosUtils";
import { CiMenuKebab } from "react-icons/ci";

function RecommendedVideoCard({ data }) {
  if (!data) return null;
  const { snippet, statistics } = data;
  const { thumbnails } = snippet;
  const { title, channelTitle, publishedAt } = snippet;
  const { viewCount } = statistics;
  let formatter = Intl.NumberFormat("en", { notation: "compact" });
  const formatedViewsCount = formatter.format(viewCount);
  const postedAt = timeAgo(publishedAt);
  return (
    <div className="flex space-x-2 my-2">
      <img
        className="flex w-[168px] h-[94px] rounded-xl"
        src={thumbnails.medium.url}
        alt="video thumbnail"
      ></img>
      <div className="flex flex-col text-ellipses overflow-hidden">
        <div className="flex font-bold whitespace-pre-wrap text-base text-sm ">{title}</div>
        <div className="flex text-sm">{channelTitle}</div>
        <div className="flex text-sm">
          <span className="flex">{formatedViewsCount} views &#x2022;</span>
          <span className="flex mx-1"> {postedAt}</span>
        </div>
      </div>
      <div className="flex">
        <CiMenuKebab size={'1.5em'} />
      </div>
    </div>
  );
}

export default RecommendedVideoCard;
