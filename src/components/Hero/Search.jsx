import React, { useState } from "react";

function Search() {
  const [openSelect, setOpenSelect] = useState(false);

  const handleOpen = () => {
    setOpenSelect((open) => !open);
  };
  return (
    <form className="relative max-w-5xl w-full mt-28">
      <label htmlFor="search">
        <span className="visually-hidden">Search Marts</span>
      </label>

      <input
        type="text"
        name="search"
        id="search"
        className="w-full py-3.5 rounded-[0.625rem] md:py-5 "
      />

      <div
        className="select absolute top-4 left-2 w-32 md:left-[4.43rem] md:top-[24px]  md:w-44"
        onClick={handleOpen}
      >
        <div className="select-header font-roboto font-light text-base md:text-xl text-black">
          Select Category
        </div>
        <ul
          className={` w-full space-y-2 py-4 mt-4 shadow-md shadow-gray-700 bg-white transition-opacity duration-500 ${
            !openSelect ? "opacity-0" : "opacity-100"
          }`}
        >
          <li className="pl-3.5">Mango</li>
          <li className="pl-3.5">Yam</li>
          <li className="pl-3.5">Banana</li>
        </ul>
        <button
          type="button"
          className="absolute top-1.5 left-28 ml-1 -mt-px md:left-[150px] md:ml-0"
        >
          <svg
            width="20"
            height="16"
            viewBox="0 0 30 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={`transition-rotate duration-500 ${
              openSelect ? "rotate-180" : "rotate-0"
            }`}
          >
            <path
              d="M1 1L15 15L29 1"
              stroke="black"
              strokeOpacity="0.7"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <button
        type="submit"
        className="absolute top-1/2 right-5 -translate-y-1/2"
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 34 34"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.9527 21.9793C27.0103 19.1713 27.9318 15.6897 27.533 12.2313C27.1342 8.77281 25.4445 5.59248 22.8018 3.32656C20.1591 1.06063 16.7585 -0.123792 13.2802 0.0102522C9.80188 0.144297 6.50243 1.58692 4.04195 4.04951C1.58147 6.5121 0.14141 9.81304 0.00987351 13.2919C-0.121663 16.7708 1.06503 20.1711 3.33252 22.8125C5.60002 25.4539 8.78111 27.1416 12.2394 27.538C15.6976 27.9344 19.178 27.0102 21.9842 24.9504H21.9821C22.0458 25.0354 22.1138 25.1162 22.1903 25.1948L30.3713 33.3769C30.7697 33.7757 31.3102 33.9998 31.8739 34C32.4376 34.0002 32.9782 33.7764 33.377 33.3779C33.7757 32.9795 33.9998 32.4389 34 31.8751C34.0002 31.3113 33.7765 30.7706 33.378 30.3718L25.1971 22.1897C25.1211 22.1128 25.0394 22.0418 24.9527 21.9772V21.9793ZM25.5009 13.81C25.5009 15.345 25.1987 16.8649 24.6113 18.2831C24.024 19.7012 23.1631 20.9898 22.0779 22.0752C20.9926 23.1605 19.7043 24.0215 18.2863 24.6089C16.8684 25.1964 15.3487 25.4987 13.8139 25.4987C12.2791 25.4987 10.7594 25.1964 9.34144 24.6089C7.92351 24.0215 6.63513 23.1605 5.54989 22.0752C4.46464 20.9898 3.60378 19.7012 3.01645 18.2831C2.42912 16.8649 2.12683 15.345 2.12683 13.81C2.12683 10.71 3.35814 7.73688 5.54989 5.54483C7.74164 3.35277 10.7143 2.12128 13.8139 2.12128C16.9135 2.12128 19.8861 3.35277 22.0779 5.54483C24.2696 7.73688 25.5009 10.71 25.5009 13.81Z"
            fill="black"
            fillOpacity="0.8"
          />
        </svg>
      </button>
    </form>
  );
}

export default Search;
