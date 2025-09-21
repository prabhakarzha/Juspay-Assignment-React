import { Link } from "react-router-dom";
import { useState } from "react";
import {
  LayoutDashboard,
  ShoppingBag,
  Folder,
  BookOpen,
  User,
  Star,
  Clock,
  UserCircle,
  Briefcase,
  File,
  Share2,
  Menu,
  X,
} from "lucide-react"; // icons
import Byewind from "../../assets/ByeWind.png";
import Account from "../../assets/Account.png";
import corporate from "../../assets/corporate.png";
import blog from "../../assets/blog.png";
import social from "../../assets/social.png";
import RightArrow from "../../assets/RightArrow.png";
import ArrowLineDown from "../../assets/ArrowLineDown.png";
import IdentificationBadge from "../../assets/IdentificationBadge.png";

import Default from "../../assets/Default.png";
import ecommerce from "../../assets/ecommerce.png";
import projects from "../../assets/projects.png";
import onlinecourse from "../../assets/onlinecourse.png";

const Sidebar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pageImages = [Account, corporate, blog, social];
  const dashboardImages = [Default, ecommerce, projects, onlinecourse];

  // Menu sections
  const favoriteLinks = [{ label: "Overview" }, { label: "Projects" }];

  const dashboardLinks = [
    { label: "Default", image: dashboardImages[0] },
    { label: "eCommerce", image: dashboardImages[1] },
    { label: "Projects", image: dashboardImages[2] },
    { label: "Online Courses", image: dashboardImages[3] },
  ];

  const pageLinks = [
    { label: "Account", image: pageImages[0] },
    { label: "Corporate", image: pageImages[1] },
    { label: "Blog", image: pageImages[2] },
    { label: "Social", image: pageImages[3] },
  ];

  const profileLinks = [
    { label: "Overview" },
    { label: "Projects" },
    { label: "Campaigns" },
    { label: "Documents" },
    { label: "Followers" },
  ];

  const renderLinks = (links, isFavorite = false) =>
    links.map(({ label, to, icon, image }) => (
      <Link
        key={label}
        to={to}
        className="hover:bg-gray-800 rounded p-2 flex items-center gap-2"
      >
        {/* Grey dot for Favorites only */}
        {isFavorite && (
          <span className="w-2 h-2 rounded-full bg-gray-500"></span>
        )}

        {/* Right Arrow (invisible placeholder for Default) */}
        {image &&
          (label === "Default" ? (
            <span className="w-3 h-3 opacity-0"></span>
          ) : (
            <img
              src={RightArrow}
              alt="arrow"
              className="w-3 h-3 object-contain opacity-70"
            />
          ))}

        {/* Main Icon/Image */}
        {image ? (
          <img src={image} alt={label} className="w-4 h-4 object-contain" />
        ) : (
          icon
        )}

        {label}
      </Link>
    ));

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="md:hidden p-2 text-gray-300 fixed top-4 left-4 z-50 bg-gray-800 rounded"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <aside className="bg-[#0f0f0f]h-full p-5 ">
        <div className="flex items-center gap-2 mb-6">
          <img src={Byewind} />
          <h1 className="text-lg font-semibold text-white">ByeWind</h1>
        </div>

        {/* Favorites */}
        <div className="mb-6">
          <p className="text-xs text-gray-500 mb-4">
            Favorites <span className="pl-12">Recently</span>
          </p>
          <nav className="flex flex-col gap-1">
            {renderLinks(favoriteLinks, true)}{" "}
            {/* 👈 Pass true for favorites */}
          </nav>
        </div>

        {/* Dashboards */}
        <div className="mb-6">
          <p className="text-xs text-gray-500 mb-2">Dashboards</p>
          <nav className="flex flex-col gap-1">
            {renderLinks(dashboardLinks)}
          </nav>
        </div>

        {/* Pages */}
        <div className="flex-1">
          <p className="text-xs text-gray-500 mb-2">Pages</p>
          <nav className="flex flex-col gap-1">
            {/* Static User Profile with 2 images */}
            <div className="hover:bg-gray-800 rounded p-2 flex items-center gap-2">
              <img
                src={ArrowLineDown}
                alt="arrow"
                className="w-3 h-3 object-contain"
              />
              <img
                src={IdentificationBadge}
                alt="profile"
                className="w-4 h-4 object-contain"
              />
              User Profile
            </div>

            {/* Always visible profileLinks */}
            <div className="ml-6 flex flex-col gap-1">
              {profileLinks.map(({ label, to }) => (
                <Link
                  key={label}
                  to={to}
                  className="hover:bg-gray-800 rounded p-2"
                >
                  {label}
                </Link>
              ))}
            </div>

            {/* Page Links */}
            {renderLinks(pageLinks)}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
