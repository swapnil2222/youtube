import React, { useState } from "react";
import { timeAgo } from "../utils/videosUtils";
import { BsBell } from "react-icons/bs";

function VideoWatchInfo({ data }) {
  const { snippet, statistics } = data;
  const { title, channelTitle, publishedAt, description } = snippet;
  const { viewCount } = statistics;
  const postedAt = timeAgo(publishedAt);
  const [readMore, setReadMore] = useState(false);

  let formatter = Intl.NumberFormat("en", { notation: "compact" });
  const formatedViewsCount = formatter.format(viewCount);
  const handleReadMore = ()=> {
    setReadMore(true)
  }

  return (
    <div className="watch-info flex flex-col p-2">
      <div className="text-xl font-bold whitespace-pre-wrap">{title}</div>
      <div className="flex w-full justify-between items-center space-x-4 my-2">
        {/* first column */}
        <div className="flex flex-col">
          <span className="flex text-lg font-bold">{channelTitle}</span>
          <span className="flex">4.3M Subscribers</span>
        </div>
        <div className="flex">
          <button
            type="button"
            className="rounded-full bg-white px-6 py-2  text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 hover:bg-gray-50"
          >
            Join
          </button>
          <button
            type="button"
            className="mx-2 flex items-center rounded-full bg-gray-100 px-6 py-2  text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 hover:bg-gray-50"
          >
            <BsBell size={"1.2em"} className="mx-1" />
            Subscribe
          </button>
        </div>
        <div className="flex">
          <button
            type="button"
            className="mx-1 flex items-center rounded-full bg-gray-100 px-6 py-2  text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 hover:bg-gray-50"
          >
            <BsBell size={"1.2em"} className="mx-1" />
            70K
          </button>
          <button
            type="button"
            className="mx-1 flex items-center rounded-full bg-gray-100 px-6 py-2  text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 hover:bg-gray-50"
          >
            <BsBell size={"1.2em"} className="mx-1" />
            Share
          </button>
          <button
            type="button"
            className="mx-1 flex items-center rounded-full bg-gray-100 px-6 py-2  text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 hover:bg-gray-50"
          >
            <BsBell size={"1.2em"} className="mx-1" />
            Download
          </button>
          <button
            type="button"
            className="mx-1 flex items-center rounded-full bg-gray-100 px-6 py-2  text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 hover:bg-gray-50"
          >
            &#x2022;&#x2022;&#x2022;
          </button>
        </div>
      </div>

      <div className="watch-description flex flex-col w-full relative bg-gray-100 rounded-lg p-3 whitespace-pre-line">
        <ul className="flex text-sm space-x-1">
          <li className="font-semibold text-base">
            {formatedViewsCount} views &#x2022;
          </li>
          <li className="font-semibold text-base">{postedAt}</li>
        </ul>
        {readMore ? (
          <div className="flex"> {description}</div>
        ) : (
          <div className="flex">
            <span className="truncate"> {description}</span>
            <span className="flex font-bold cursor-pointer" onClick={handleReadMore}>
              ...more
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

export default VideoWatchInfo;
