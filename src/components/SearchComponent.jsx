import React from "react";
import { AiOutlineSearch } from "react-icons/ai"; // Using a search icon from react-icons

const Searchbar = () => {
  return (
    <div className="flex z-20 items-center bg-[#2C0000] text-white rounded-full w-[400px] h-[50px] px-4">
      <input
        className="bg-transparent text-white w-full h-full outline-none placeholder-gray-500 "
        type="text"
        placeholder="Michael Jackson"
      />

      <AiOutlineSearch className="text-white text-2xl" />
    </div>
  );
};

export default Searchbar;
