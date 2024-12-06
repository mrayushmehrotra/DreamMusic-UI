import React from "react";
import SearchComponent from "./SearchComponent";
const Header = () => {
  return (
    <div className="  font-[poppins] p-6 font-semibold ml-5 flex items-center justify-between">
      <nav className="flex space-x-6 text-white">
        <a href="#" className="hover:underline">
          Music
        </a>
        <a href="#" className="hover:underline">
          Podcast
        </a>
        <a href="#" className="hover:underline">
          Live
        </a>
        <a href="#" className="hover:underline">
          Radio
        </a>
      </nav>
      <SearchComponent  />
    </div>
  );
};

export default Header;
