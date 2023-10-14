import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function AppSideBar() {
  const isMenuOpen = useSelector((state) => state.sidebar.isPanelOpen);
  if (!isMenuOpen) return null;
  return (
    <div className="w-[15vw] flex flex-col p-4 shadow-lg bg-white overflow-scroll">
      <ul className="flex flex-col my-2 border-b-2 pb-2 text-center">
        <Link to="/">
          <li className="font-serif py-2 cursor-pointer hover:bg-gray-100 text-base">
            Home
          </li>
        </Link>
        <li className="font-serif py-2 cursor-pointer hover:bg-gray-100 text-base">
          Shorts
        </li>
        <li className="font-serif py-2 cursor-pointer hover:bg-gray-100 text-base">
          Subscription
        </li>
      </ul>

      <ul className="flex flex-col my-2 border-b-2 pb-2 text-center">
        <li className="font-serif py-2 cursor-pointer hover:bg-gray-100 text-base">
          Library
        </li>
        <li className="font-serif py-2 cursor-pointer hover:bg-gray-100 text-base">
          History
        </li>
        <li className="font-serif py-2 cursor-pointer hover:bg-gray-100 text-base">
          Watch Later
        </li>
        <li className="font-serif py-2 cursor-pointer hover:bg-gray-100 text-base">
          Liked Videos
        </li>
      </ul>
      <h1 className="font-serif font-bold">Subscriptions</h1>
      <ul className="flex flex-col my-2 border-b-2 pb-2 text-center">
        <li className="font-serif py-2 cursor-pointer hover:bg-gray-100 text-base">
          Fit Tuber
        </li>
        <li className="font-serif py-2 cursor-pointer hover:bg-gray-100 text-base">
          The Viral Fever
        </li>
        <li className="font-serif py-2 cursor-pointer hover:bg-gray-100 text-base">
          Saurav Sinha
        </li>
        <li className="font-serif py-2 cursor-pointer hover:bg-gray-100 text-base">
          Pranjal Kamra
        </li>
      </ul>
      <h1 className="font-serif font-bold">Explore</h1>
      <ul className="flex flex-col my-2 border-b-2 pb-2 text-center">
        <li className="font-serif py-2 cursor-pointer hover:bg-gray-100 text-base">
          Trending
        </li>
        <li className="font-serif py-2 cursor-pointer hover:bg-gray-100 text-base">
          Shopping
        </li>
        <li className="font-serif py-2 cursor-pointer hover:bg-gray-100 text-base">
          Music
        </li>
        <li className="font-serif py-2 cursor-pointer hover:bg-gray-100 text-base">
          Films
        </li>
        <li className="font-serif py-2 cursor-pointer hover:bg-gray-100 text-base">
          Live
        </li>
        <li className="font-serif py-2 cursor-pointer hover:bg-gray-100 text-base">
          Gaming
        </li>
        <li className="font-serif py-2 cursor-pointer hover:bg-gray-100 text-base">
          News
        </li>
        <li className="font-serif py-2 cursor-pointer hover:bg-gray-100 text-base">
          Sport
        </li>
      </ul>
    </div>
  );
}

export default AppSideBar;
