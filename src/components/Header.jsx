import React from "react";

const Header = () => {
  return (
    <div className=" bg-[#520000] p-4 flex items-center justify-between">
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
      <input
        type="text"
        placeholder="Search"
        className="rounded-full px-4 py-2 bg-gray-800 text-white outline-none"
      />
    </div>
  );
};

export default Header;
