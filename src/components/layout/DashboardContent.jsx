import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  Legend,
  PieChart,
  CartesianGrid,
  Pie,
  Cell,
} from "recharts";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

const barData = [
  { name: "Jan", actual: 18, projection: 22 },
  { name: "Feb", actual: 20, projection: 25 },
  { name: "Mar", actual: 19, projection: 21 },
  { name: "Apr", actual: 22, projection: 27 },
  { name: "May", actual: 15, projection: 19 },
  { name: "Jun", actual: 21, projection: 24 },
];

const lineData = [
  { name: "Jan", current: 12, previous: 20 },
  { name: "Feb", current: 18, previous: 15 },
  { name: "Mar", current: 10, previous: 12 },
  { name: "Apr", current: 14, previous: 18 },
  { name: "May", current: 20, previous: 22 },
  { name: "Jun", current: 25, previous: 21 },
];

const stats = [
  {
    title: "Customers",
    value: "3,781",
    change: "+11.01%",
    up: true,
    highlight: true,
  },
  { title: "Orders", value: "1,219", change: "-0.03%", up: false },
  { title: "Revenue", value: "$695", change: "+15.03%", up: true },
  { title: "Growth", value: "30.1%", change: "+6.08%", up: true },
];

const locations = [
  { city: "New York", value: 72, max: 100 },
  { city: "San Francisco", value: 39, max: 100 },
  { city: "Sydney", value: 25, max: 100 },
  { city: "Singapore", value: 61, max: 100 },
];

const products = [
  {
    name: "ASOS Ridley High Waist",
    price: "$79.49",
    qty: 82,
    amount: "$6,518.18",
  },
  {
    name: "Marco Lightweight Shirt",
    price: "$128.50",
    qty: 37,
    amount: "$4,754.50",
  },
  { name: "Half Sleeve Shirt", price: "$39.99", qty: 64, amount: "$2,559.36" },
  {
    name: "Lightweight Jacket",
    price: "$20.00",
    qty: 184,
    amount: "$3,680.00",
  },
  { name: "Marco Shoes", price: "$79.49", qty: 64, amount: "$1,965.81" },
];

const pieData = [
  { name: "Direct", value: 300.56, color: "#a5b4fc" },
  { name: "Affiliate", value: 135.18, color: "#86efac" },
  { name: "Sponsored", value: 154.02, color: "#c4b5fd" },
  { name: "E-mail", value: 48.96, color: "#93c5fd" },
];

// Custom Tooltip for PieChart
const CustomTooltips = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const total = pieData.reduce((a, b) => a + b.value, 0);
    const percent = ((payload[0].value / total) * 100).toFixed(1);
    return (
      <div className="bg-black text-white px-2 py-1 rounded text-xs">
        {percent}%
      </div>
    );
  }
  return null;
};

export default function DashboardContent() {
  return (
    <div className="space-y-6">
      {/* Top row: stats + bar chart */}
      <h2 className="text-lg font-Inter p-2">eCommerce</h2>

      <div className="grid grid-cols-12 gap-6 items-start h-auto md:h-[252px]">
        {/* Stats */}
        <div className="col-span-12 md:col-span-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-2 gap-4 p-5">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className={`rounded-[12px] p-4 flex flex-col justify-between shadow-md ${
                  idx === 0 || idx === 3
                    ? "bg-[#E3F5FF] text-gray-900"
                    : "bg-[#1c1c1c] border border-gray-700 text-white"
                }`}
              >
                <div className="text-xs font-medium">{stat.title}</div>
                <div className="flex items-center justify-between mt-2">
                  <div className="text-lg sm:text-2xl font-extrabold">
                    {stat.value}
                  </div>
                  <div
                    className={`flex items-center text-xs sm:text-sm ${
                      stat.up ? "text-green-400" : "text-red-200"
                    }`}
                  >
                    <span>{stat.change}</span>
                    {stat.up ? (
                      <ArrowUpRight className="w-4 h-4 ml-1" />
                    ) : (
                      <ArrowDownRight className="w-4 h-4 ml-1" />
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bar Chart */}
        <div className="col-span-12 md:col-span-6 p-5">
          <div className="w-full bg-[#1c1c1c] border border-gray-700 rounded-[12px] p-4 shadow-md">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-white font-semibold">
                Projections vs Actuals
              </h2>
            </div>
            <div className="h-[200px] md:h-[125px] flex items-end pb-4">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={barData}
                  barSize={20}
                  barCategoryGap={30}
                  margin={{ top: 0, right: 10, left: 0, bottom: 0 }}
                >
                  <CartesianGrid
                    stroke="#374151"
                    strokeWidth={0.5}
                    vertical={false}
                  />
                  <XAxis
                    dataKey="name"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "#9ca3af", fontSize: 12 }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    ticks={[0, 10, 20, 30]}
                    domain={[0, 30]}
                    tick={{ fill: "#9ca3af", fontSize: 12 }}
                    tickFormatter={(v) => `${v}M`}
                  />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#111827",
                      border: "none",
                      borderRadius: "6px",
                    }}
                    labelStyle={{ color: "#fff" }}
                    formatter={(value) => `${value}M`}
                    cursor={{ fill: "transparent" }}
                  />
                  <Bar
                    dataKey="actual"
                    stackId="a"
                    fill="#93c5fd"
                    radius={[4, 4, 0, 0]}
                  />
                  <Bar
                    dataKey="projection"
                    stackId="a"
                    fill="#64748b"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>

      {/* Revenue row */}
      <div className="grid grid-cols-12 gap-6 p-5">
        {/* Line Chart */}
        <div className="col-span-12 md:col-span-9 bg-[#1c1c1c] border border-gray-700 rounded-[12px] p-4 shadow-md">
          <div className="flex items-center space-x-6 mb-4 text-white">
            <h2 className="font-semibold">Revenue</h2>
          </div>
          <div className="h-[200px] md:h-[220px]">
            <ResponsiveContainer width="100%">
              <LineChart data={lineData}>
                <XAxis dataKey="name" stroke="#aaa" />
                <YAxis
                  stroke="#aaa"
                  domain={[0, 30]}
                  ticks={[0, 10, 20, 30]}
                  tickFormatter={(v) => `${v}M`}
                />
                <Legend />
                <Line
                  type="monotone"
                  dataKey="current"
                  stroke="#60a5fa"
                  strokeWidth={2}
                  dot={false}
                />
                <Line
                  type="monotone"
                  dataKey="previous"
                  stroke="#a5b4fc"
                  strokeWidth={2}
                  strokeDasharray="6 6"
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Location */}
        <div className="col-span-12 md:col-span-3 bg-[#1c1c1c] border border-gray-700 text-white rounded-[12px] p-4 shadow-md">
          <h2 className="text-sm font-semibold mb-3 whitespace-nowrap">
            Revenue by Location
          </h2>
          <div className="relative w-full h-32 mb-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
              alt="World Map"
              className="w-full h-full object-cover opacity-70"
            />
          </div>
          <div className="space-y-3">
            {locations.map((loc, idx) => (
              <div key={idx}>
                <div className="flex justify-between text-sm">
                  <span>{loc.city}</span>
                  <span>{loc.value}K</span>
                </div>
                <div className="w-full h-1 bg-gray-700 rounded-full mt-1">
                  <div
                    className="h-1 bg-gray-300 rounded-full"
                    style={{ width: `${(loc.value / loc.max) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Products + Pie */}
      <div className="grid grid-cols-12 gap-6 p-5">
        {/* Products */}
        <div className="col-span-12 md:col-span-9 bg-[#1c1c1c] border border-gray-700 text-white rounded-[12px] p-4 shadow-md">
          <h2 className="text-sm font-semibold mb-3">Top Selling Products</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-xs sm:text-sm text-left">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="pb-2 font-medium">Name</th>
                  <th className="pb-2 font-medium">Price</th>
                  <th className="pb-2 font-medium">Quantity</th>
                  <th className="pb-2 font-medium">Amount</th>
                </tr>
              </thead>
              <tbody>
                {products.map((p, idx) => (
                  <tr
                    key={idx}
                    className="border-b border-gray-800 last:border-none"
                  >
                    <td className="py-2">{p.name}</td>
                    <td className="py-2">{p.price}</td>
                    <td className="py-2">{p.qty}</td>
                    <td className="py-2">{p.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pie */}
        <div className="col-span-12 md:col-span-3 bg-[#1c1c1c] border border-gray-700 text-white rounded-[12px] p-4 shadow-md">
          <h2 className="text-sm font-semibold mb-3">Total Sales</h2>
          <div className="flex justify-center">
            <PieChart width={130} height={130}>
              <Pie
                data={pieData}
                innerRadius={40}
                outerRadius={60}
                paddingAngle={4}
                dataKey="value"
              >
                {pieData.map((entry, idx) => (
                  <Cell key={idx} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltips />} />
            </PieChart>
          </div>
          <div className="mt-4 space-y-2 text-xs">
            {pieData.map((item, idx) => (
              <div key={idx} className="flex justify-between">
                <span className="flex items-center">
                  <span
                    className="w-2 h-2 rounded-full mr-2"
                    style={{ backgroundColor: item.color }}
                  />
                  {item.name}
                </span>
                <span>${item.value.toFixed(2)}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
