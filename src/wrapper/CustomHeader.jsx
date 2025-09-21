import { useState } from "react";
import { Search, X } from "lucide-react";
import star from "../assets/Star.png";
import IconSet from "../assets/IconSet.png";
import Icon1 from "../assets/Icon1.png";
import Icon2 from "../assets/Icon2.png";
import Icon3 from "../assets/Icon3.png";

const CustomHeader = () => {
  const [mobileSearch, setMobileSearch] = useState(false);
  const icons = [Icon1, Icon2, Icon3, IconSet];

  return (
    <header className="bg-[#0f0f0f] text-gray-300 border-b border-gray-700 flex items-center justify-between h-[60px] px-4 md:px-7 relative z-50">
      {/* Left: Breadcrumb */}
      <div className="flex items-center gap-2 text-sm truncate">
        {/* Mobile: Only show icons */}
        <img src={IconSet} alt="icon" className="w-[18px] h-[18px]" />
        <img src={star} alt="star" className="w-[18px] h-[18px]" />

        {/* Hide breadcrumb text on small screens */}
        <div className="hidden sm:flex items-center gap-1">
          <span className="text-gray-400">Dashboards</span>
          <span>/</span>
          <span className="text-white font-medium">Default</span>
        </div>
      </div>

      {/* Right: Actions */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Mobile Search Toggle */}
        <button
          className="sm:hidden p-2 text-gray-400"
          onClick={() => setMobileSearch(!mobileSearch)}
        >
          {mobileSearch ? <X size={20} /> : <Search size={20} />}
        </button>

        {/* Search box */}
        <div
          className={`absolute left-0 top-full w-full px-4 sm:relative sm:top-0 sm:left-0 sm:w-auto transition-all duration-300 ${
            mobileSearch ? "block" : "hidden sm:block"
          }`}
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
            <span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-gray-500 hidden sm:inline">
              ⌘/
            </span>
          </div>
        </div>

        {/* Icons */}
        <div
          className={`flex items-center gap-3 sm:gap-4 ${
            mobileSearch ? "hidden" : "flex"
          }`}
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
  );
};

export default CustomHeader;
