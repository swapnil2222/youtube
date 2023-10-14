import React, { useEffect, useState } from "react";
import { VIDEO_CATEGORIES_API } from "../constants";

function AppCategories() {
    const [categories, setCategories] = useState([]);
  useEffect(() => {
    getVideoCategories();
  }, []);

  const getVideoCategories = async () => {
    const response = await fetch(VIDEO_CATEGORIES_API);
    const data = await response.json();
    console.log("data", data);
    const list = data.items.map((item)=> item.snippet.title)
    setCategories(list);
  };

  return (
    <div className="flex overflow-x-auto">
      {categories.map((c, index) => (
        <button
          className="w-full whitespace-nowrap my-2 mx-2 px-3 py-2 bg-gray-100 rounded-md font-normal hover:bg-gray-200"
          key={index}
        >
          {c}
        </button>
      ))}
    </div>
  );
}

export default AppCategories;
