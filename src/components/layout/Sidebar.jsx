import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // बाकी icons वैसे ही रहेंगे
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

  const favoriteLinks = [{ label: "Overview" }, { label: "Projects" }];

  const dashboardLinks = [
    { label: "Default", image: dashboardImages[0], to: "/" }, // ✅ fixed
    { label: "eCommerce", image: dashboardImages[1], to: "/ecommerce" },
    { label: "Projects", image: dashboardImages[2], to: "/projects" },
    {
      label: "Online Courses",
      image: dashboardImages[3],
      to: "/online-courses",
    },
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
        to={to || "#"}
        className="hover:bg-gray-800 rounded p-2 flex items-center gap-2"
      >
        {isFavorite && (
          <span className="w-2 h-2 rounded-full bg-gray-500"></span>
        )}

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
        className="md:hidden p-2 text-gray-300 fixed top-4 left-4 z-[1000] bg-gray-800 rounded"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`
          bg-[#0f0f0f] h-full p-5 w-45
          fixed top-0 left-0 z-[999]
          transform transition-transform duration-300
          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}
          md:static md:translate-x-0
        `}
      >
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
            {renderLinks(favoriteLinks, true)}
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

            <div className="ml-6 flex flex-col gap-1">
              {profileLinks.map(({ label, to }) => (
                <Link
                  key={label}
                  to={to || "#"}
                  className="hover:bg-gray-800 rounded p-2"
                >
                  {label}
                </Link>
              ))}
            </div>

            {renderLinks(pageLinks)}
          </nav>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
