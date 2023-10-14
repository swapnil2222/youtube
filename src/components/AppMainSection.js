import React from "react";
import AppCategories from "./AppCategories";
import VideoList from "./VideoList";

function AppMainSection() {
  return (
    <div className="flex flex-col w-full">
      <div className="flex">
        <AppCategories />
      </div>
      <div className="flex">
        <VideoList />
      </div>
    </div>
  );
}

export default AppMainSection;
