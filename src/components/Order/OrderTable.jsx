import { useState } from "react";
import PlusIcon from "../../assets/PlusIcon.png";
import SettingsIcon from "../../assets/SettingsIcon.png";
import SortIcon from "../../assets/SortIcon.png";
import { Search } from "lucide-react";

import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import img5 from "../../assets/img5.png";

export default function OrderTable() {
  const [mobileSearch, setMobileSearch] = useState(false);

  const rows = [
    {
      id: "#CM9801",
      image: img1,
      project: "Landing Page",
      address: "Meadow Lane Oakland",
      date: "Just now",
      status: { label: "In Progress", color: "text-blue-400" },
    },
    {
      id: "#CM9802",
      image: img2,
      project: "CRM Admin pages",
      address: "Larry San Francisco",
      date: "A minute ago",
      status: { label: "Complete", color: "text-green-400" },
    },
    {
      id: "#CM9803",
      image: img3,
      project: "Client Project",
      address: "Bagwell Avenue Ocala",
      date: "1 hour ago",
      status: { label: "Pending", color: "text-teal-400" },
    },
    {
      id: "#CM9804",
      image: img4,
      project: "Admin Dashboard",
      address: "Washburn Baton Rouge",
      date: "Yesterday",
      status: { label: "Approved", color: "text-yellow-400" },
    },
    {
      id: "#CM9805",
      image: img5,
      project: "App Landing Page",
      address: "Nest Lane Olivette",
      date: "Feb 2, 2023",
      status: { label: "Rejected", color: "text-red-400" },
    },
  ];

  return (
    <div className="bg-[#111111] text-white p-6 rounded-lg shadow-md">
      {/* Header */}
      <h2 className="text-lg font-semibold mb-4">Order List</h2>

      {/* Top Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between border border-gray-700 rounded-md px-3 py-2 mb-5 space-y-2 sm:space-y-0">
        <div className="flex items-center space-x-3">
          <button className="p-2 bg-gray-800 rounded-md hover:bg-gray-700">
            <img src={PlusIcon} alt="Add" className="w-5 h-5" />
          </button>
          <button className="p-2 bg-gray-800 rounded-md hover:bg-gray-700">
            <img src={SettingsIcon} alt="Settings" className="w-5 h-5" />
          </button>
          <button className="p-2 bg-gray-800 rounded-md hover:bg-gray-700">
            <img src={SortIcon} alt="Sort" className="w-5 h-5" />
          </button>
        </div>

        {/* Search box always visible */}
        <div className="w-full sm:w-auto">
          <div className="relative">
            <Search
              size={16}
              className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500"
            />
            <input
              type="text"
              placeholder="Search"
              className="bg-[#1a1a1a] text-sm text-gray-300 rounded px-8 py-1 w-full sm:w-40 focus:outline-none border border-gray-700"
            />
          </div>
        </div>
      </div>

      {/* Table (responsive scroll) */}
      <div className="overflow-x-auto">
        <table className="w-full border-separate border-spacing-y-2 text-sm">
          <thead className="text-gray-400">
            <tr>
              {/* Header checkbox */}
              <th className="text-left px-3 py-2">
                <input type="checkbox" />
              </th>
              <th className="text-left px-3 py-2">Order ID</th>
              <th className="text-left px-3 py-2">Image</th>
              <th className="text-left px-3 py-2">Project</th>
              <th className="text-left px-3 py-2">Address</th>
              <th className="text-left px-3 py-2">Date</th>
              <th className="text-left px-3 py-2">Status</th>
            </tr>
          </thead>

          <tbody>
            {[...rows, ...rows].map((row, idx) => (
              <tr key={idx} className="bg-[#1c1c1c] hover:bg-[#222] rounded-lg">
                {/* Checkbox column */}
                <td className="px-3 py-2">
                  {idx < rows.length ? (
                    row.id === "#CM9804" ? (
                      <input type="checkbox" checked readOnly />
                    ) : row.id === "#CM9805" ? (
                      <input type="checkbox" />
                    ) : (
                      <input type="checkbox" />
                    )
                  ) : null}
                </td>

                {/* Order ID */}
                <td className="px-3 py-2">{row.id}</td>

                {/* Image */}
                <td className="px-3 py-2">
                  <img
                    src={row.image}
                    alt={row.project}
                    className="w-12 h-12 rounded-md object-cover"
                  />
                </td>

                {/* Project */}
                <td className="px-3 py-2">{row.project}</td>

                {/* Address */}
                <td className="px-3 py-2">{row.address}</td>

                {/* Date */}
                <td className="px-3 py-2 flex items-center space-x-2">
                  <span>📅</span> <span>{row.date}</span>
                </td>

                {/* Status */}
                <td className="px-3 py-2">
                  <span
                    className={`flex items-center space-x-1 ${row.status.color}`}
                  >
                    <span className="w-2 h-2 rounded-full bg-current"></span>
                    <span>{row.status.label}</span>
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination (static UI) */}
      <div className="flex justify-end items-center mt-6 space-x-2 text-sm">
        <button className="px-3 py-1 rounded-md bg-[#1c1c1c] hover:bg-[#222]">
          {"<"}
        </button>
        {[1, 2, 3, 4, 5].map((num) => (
          <button
            key={num}
            className={`px-3 py-1 rounded-md ${
              num === 1
                ? "bg-white text-black font-semibold"
                : "bg-[#1c1c1c] hover:bg-[#222]"
            }`}
          >
            {num}
          </button>
        ))}
        <button className="px-3 py-1 rounded-md bg-[#1c1c1c] hover:bg-[#222]">
          {">"}
        </button>
      </div>
    </div>
  );
}
