import React from "react";

const Sidebar = () => {
  // TODO Fix UI Malfunction in future
  return (
    <div className="bg-black scale-105 text-white h-screen w-1/4 p-6 flex flex-col justify-between md:w-1/5 sm:w-full">
      <div>
        {/* Logo Section with Gap */}
        <div className="flex gap-x-6 mb-10">
          <img className="w-12 h-12" src="/music.png" alt="Music Icon" />
          <h1 className="text-3xl font-bold">
            <span className="text-[#EE2B2B]">Dream</span>
            Music
          </h1>
        </div>

        {/* Menu Items */}
        <ul className="mt-6">
          <p className="mb-2 text-base text-gray-400">MENU</p>
          <li className="mb-6 flex items-center gap-6">
            <img className="w-6 h-6" src="/home_icon.png" alt="home_logo" />
            <h1 className="text-base">Home</h1>
          </li>
          <li className="mb-6 flex items-center gap-6">
            <img className="w-6 h-6" src="/graph_up.png" alt="trends_logo" />
            <h1 className="text-base">Trends</h1>
          </li>
          <li className="mb-6 flex items-center gap-6">
            <img className="w-6 h-6" src="/music.png" alt="library_logo" />
            <h1 className="text-base">Library</h1>
          </li>
          <li className="mb-6 flex items-center gap-6">
            <img className="w-6 h-6" src="/compass.png" alt="discover_logo" />
            <h1 className="text-base">Discover</h1>
          </li>
        </ul>
      </div>

      {/* General Section */}
      <div className="mb-12">
        <p className="mb-2 text-base text-gray-400">GENERAL</p>
        <ul>
          <li className="mb-6 flex items-center gap-6">
            <img className="w-6 h-6" src="/setting.png" alt="settings_logo" />
            <h1 className="text-base">Settings</h1>
          </li>

          <li className="mb-6 flex items-center gap-6">
            <img className="w-6 h-6" src="/Logout.png" alt="logout_logo" />
            <h1 className="text-base">Logout</h1>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;

