import { useState } from "react";
import { Search, Sun, RefreshCw, Bell, Grid, X } from "lucide-react";
import star from "../../assets/Star.png";
import IconSet from "../../assets/IconSet.png";
import Icon1 from "../../assets/Icon1.png";

import Icon2 from "../../assets/Icon2.png";

import Icon3 from "../../assets/Icon3.png";

import DashboardContent from "./DashboardContent";

const Header = () => {
  const [mobileSearch, setMobileSearch] = useState(false);
  const icons = [Icon1, Icon2, Icon3, IconSet];

  return (
    <div>
      <header className="bg-[#0f0f0f] text-gray-300 border-b border-gray-700 flex items-center justify-between h-[68px] px-4 md:px-7 relative z-50">
        {/* Left: Breadcrumb */}
        <div className="flex items-center gap-2 text-sm truncate z-50">
          {/* <Grid size={16} className="text-gray-400" /> */}
          <img
            src={IconSet}
            alt="star image"
            className="w-[17.5px] h-[16.87]"
          />
          <img src={star} alt="star image" className="w-[17.5px] h-[16.87]" />

          <span className="text-gray-400 hidden sm:inline">Dashboards</span>
          <span className="hidden sm:inline">/</span>
          <span className="text-white font-medium">Default</span>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2 sm:gap-4 z-50">
          {/* Mobile Search Toggle */}
          <button
            className="sm:hidden p-2 text-gray-400 z-50"
            onClick={() => setMobileSearch(!mobileSearch)}
          >
            {mobileSearch ? <X size={18} /> : <Search size={18} />}
          </button>

          {/* Search box */}
          <div
            className={`absolute top-full left-0 w-full px-4 sm:relative sm:top-0 sm:left-0 sm:w-auto ${
              mobileSearch ? "block" : "hidden sm:block"
            } z-50`}
          >
            <div className="relative">
              <Search
                size={16}
                className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500"
              />
              <input
                type="text"
                placeholder="Search"
                className="bg-[#1a1a1a] text-sm text-gray-300 rounded px-8 py-1 w-full sm:w-32 md:w-40 focus:outline-none border border-gray-700"
              />
              <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-gray-500">
                ⌘/
              </span>
            </div>
          </div>

          {/* Icons */}
          <div
            className={`flex items-center gap-3 sm:gap-4 ${
              mobileSearch ? "hidden" : ""
            } z-50`}
          >
            {icons.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`icon-${i}`}
                className="w-5 h-5 cursor-pointer object-contain"
              />
            ))}
          </div>
        </div>
      </header>
      <DashboardContent />
    </div>
  );
};

export default Header;
