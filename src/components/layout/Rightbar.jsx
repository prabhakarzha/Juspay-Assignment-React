import { useState } from "react";
import { Bell, UserPlus, Bug, X, Menu } from "lucide-react";
import user1 from "../../assets/user1.png";
import user2 from "../../assets/user2.png";
import user3 from "../../assets/user3.png";
import user4 from "../../assets/user4.png";
import user5 from "../../assets/user5.png";
import user6 from "../../assets/user6.png";

import actimg1 from "../../assets/actimg1.png";
import actimg2 from "../../assets/actimg2.png";
import actimg3 from "../../assets/actimg3.png";
import actimg4 from "../../assets/actimg4.png";
import actimg5 from "../../assets/actimg5.png";

import notif1 from "../../assets/notif1.png";
import notif2 from "../../assets/notif2.png";
import notif3 from "../../assets/notif3.png";

const RightBar = () => {
  const contactImages = [user1, user2, user3, user4, user5, user6];
  const activityImages = [actimg1, actimg2, actimg3, actimg4, actimg5];
  const notifImages = [notif1, notif2, notif1, notif3];

  const [mobileOpen, setMobileOpen] = useState(false);

  const notifications = [
    {
      message: "You have a bug that needs...",
      time: "Just now",
      icon: <Bug size={16} className="text-red-400" />,
    },
    {
      message: "New user registered",
      time: "59 minutes ago",
      icon: <UserPlus size={16} className="text-green-400" />,
    },
    {
      message: "You have a bug that needs...",
      time: "12 hours ago",
      icon: <Bug size={16} className="text-yellow-400" />,
    },
    {
      message: "Andi Lane subscribed to you",
      time: "Today, 11:59 AM",
      icon: <Bell size={16} className="text-purple-400" />,
    },
  ];

  const activities = [
    {
      name: "Natali Craig",
      action: "You have a bug that needs...",
      time: "Just now",
    },
    {
      name: "Drew Cano",
      action: "Released a new version",
      time: "59 minutes ago",
    },
    { name: "Orlando Diggs", action: "Submitted a bug", time: "12 hours ago" },
    {
      name: "Andi Lane",
      action: "Modified a data in Page X",
      time: "Today, 11:59 AM",
    },
    {
      name: "Kate Morrison",
      action: "Deleted a page in Project X",
      time: "Feb 2, 2023",
    },
  ];

  const contacts = [
    "Natali Craig",
    "Drew Cano",
    "Orlando Diggs",
    "Andi Lane",
    "Kate Morrison",
    "Koray Okumus",
  ];

  const renderSection = (title, items, renderItem) => (
    <div>
      <h3 className="text-sm font-semibold text-gray-400 mb-3">{title}</h3>
      <div className="flex flex-col gap-3">{items.map(renderItem)}</div>
    </div>
  );

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="md:hidden fixed top-4 right-4 z-50 p-3 bg-gray-800 rounded-full shadow-lg text-gray-300"
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <aside className="bg-[#0f0f0f] h-full p-5 flex flex-col gap-6">
        {renderSection("Notifications", notifications, (item, i) => (
          <div key={i} className="flex items-start gap-2">
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center overflow-hidden"
              style={{ background: "var(--Primary-Blue, #E3F5FF)" }}
            >
              <img
                src={notifImages[i % notifImages.length]}
                alt={item.message}
                className="w-6 h-6 object-contain"
              />
            </div>
            <div>
              <p className="text-sm">{item.message}</p>
              <span className="text-xs text-gray-500">{item.time}</span>
            </div>
          </div>
        ))}

        {renderSection("Activities", activities, (item, i) => (
          <div key={i} className="flex items-start gap-2">
            <img
              src={activityImages[i % activityImages.length]}
              alt={item.name}
              className="w-8 h-8 rounded-full"
            />
            <div>
              <p className="text-sm">{item.action}</p>
              <span className="text-xs text-gray-500">{item.time}</span>
            </div>
          </div>
        ))}

        {renderSection("Contacts", contacts, (name, i) => (
          <div key={i} className="flex items-center gap-3">
            <img
              src={contactImages[i % contactImages.length]}
              alt={name}
              className="w-8 h-8 rounded-full"
            />
            <span className="text-sm">{name}</span>
          </div>
        ))}
      </aside>
    </>
  );
};

export default RightBar;
