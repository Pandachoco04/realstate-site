// src/Trends.js
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", idx: 98 },
  { month: "Feb", idx: 101 },
  { month: "Mar", idx: 104 },
  { month: "Apr", idx: 108 },
  { month: "May", idx: 112 },
  { month: "Jun", idx: 115 },
  { month: "Jul", idx: 118 },
  { month: "Aug", idx: 121 },
  { month: "Sep", idx: 125 },
];

export default function Trends() {
  return (
    <section
      id="trends"
      className="max-w-7xl mx-auto px-6 py-16"
      data-aos="fade-up"
    >
      <h2 className="text-3xl font-bold text-gray-800 dark:text-gray-100 mb-10 text-center">
        Market Trends
      </h2>

      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow p-5">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-gray-100">
              Metro Property Index
            </h3>
            <p className="text-sm text-slate-500 dark:text-gray-400">
              Last 9 months • sample data
            </p>
          </div>
        </div>

        <div style={{ width: "100%", height: 260 }}>
          <ResponsiveContainer>
            <LineChart
              data={data}
              margin={{ top: 10, right: 20, left: -10, bottom: 0 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis domain={[90, 130]} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="idx"
                stroke="#4f46e5"
                strokeWidth={3}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}
