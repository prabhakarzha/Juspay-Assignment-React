import { useState } from "react";
import { Search, X } from "lucide-react";
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
    <div className="flex flex-col">
      {/* Header */}
      <header className="bg-[#0f0f0f] text-gray-300 border-b border-gray-700 flex items-center justify-between h-[68px] px-4 md:px-7 relative z-40 mr-14 md:mr-0">
        {/* Left: Breadcrumb */}
        <div className="flex items-center gap-2 text-sm truncate">
          <img
            src={IconSet}
            alt="icon"
            className="w-[17.5px] h-[16.87px] object-contain"
          />
          <img
            src={star}
            alt="star"
            className="w-[17.5px] h-[16.87px] object-contain hidden md:block"
          />
          <span className="text-gray-400 sm:inline">Dashboards</span>
          <span className="md:inline hidden">/</span>
          <span className="text-white hidden md:block font-medium">
            Default
          </span>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Mobile Search Toggle */}
          <button
            className="sm:hidden p-2 text-gray-400"
            onClick={() => setMobileSearch(!mobileSearch)}
          >
            {mobileSearch ? <X size={18} /> : <Search size={18} />}
          </button>

          {/* Search Box */}
          <div
            className={`
              absolute top-full left-0 w-full px-4 py-2 bg-[#0f0f0f] border-b border-gray-700
              sm:relative sm:top-0 sm:left-0 sm:w-auto sm:p-0 sm:bg-transparent sm:border-0
              ${mobileSearch ? "block" : "hidden sm:block"}
            `}
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
              <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-gray-500 hidden sm:block">
                ⌘/
              </span>
            </div>
          </div>

          {/* Icons (hide when mobile search open) */}
          <div
            className={`flex items-center gap-3 sm:gap-4 ${
              mobileSearch ? "hidden" : ""
            }`}
          >
            {icons.map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`icon-${i}`}
                className={`w-5 h-5 cursor-pointer object-contain ${
                  img == Icon2 ? "hidden md:block" : "block"
                }`}
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
