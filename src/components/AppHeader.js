import { useDispatch } from "react-redux";

import { togglePanel } from "../slices/sidebarSlice";


const AppHeader = () => {
  const dispatch = useDispatch();


  const onMenuClick = () => {
    dispatch(togglePanel());
  };

  return (
    <div className="flex h-16 py-5 px-3 bg-white shadow-lg justify-between items-center">
      <div className="flex grow-[1]">
        {/* hamburger icon */}
        <svg
          onClick={onMenuClick}
          className="w-12 h-5 cursor-pointer"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="100"
          height="100"
          viewBox="0 0 50 50"
        >
          <path d="M 3 9 A 1.0001 1.0001 0 1 0 3 11 L 47 11 A 1.0001 1.0001 0 1 0 47 9 L 3 9 z M 3 24 A 1.0001 1.0001 0 1 0 3 26 L 47 26 A 1.0001 1.0001 0 1 0 47 24 L 3 24 z M 3 39 A 1.0001 1.0001 0 1 0 3 41 L 47 41 A 1.0001 1.0001 0 1 0 47 39 L 3 39 z"></path>
        </svg>
        <img
          className="w-20 h-5"
          src="https://vectorseek.com/wp-content/uploads/2021/01/YouTube-Logo-Vector.png"
          alt="logo"
        />
      </div>
      <div className="flex grow-[3] items-center">
        <input
          className="w-1/2 h-10 px-4 border rounded-l-full border-gray-300"
          type="text"
          placeholder="Search"
        />
        <button
          className="px-6 py-1 h-10 bg-gray-100 rounded-r-full items-center"
          type="button"
        >
          <svg
            className="w-6 h-8"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 50 50"
          >
            <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
          </svg>
        </button>
      </div>
      <div className="flex grow-0 h-8">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/70/User_icon_BLACK-01.png"
          alt="Logged_In_User"
        ></img>
      </div>
    </div>
  );
};
export default AppHeader;
