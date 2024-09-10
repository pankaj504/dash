import React from "react";
import "./chart.css";

import userData from "../../demoData.js";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
const Chart = ({ title, data, dataKey, grid = true}) => {
  return (
    <div className="chart">
      <h3>{title}</h3>
      <ResponsiveContainer aspect={4 / 1}>
        <LineChart data={data}>
        {grid &&  <CartesianGrid strokeDasharray="2 2" />}
          <XAxis dataKey="month" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey={dataKey}
            stroke="#c83c00"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey={dataKey} stroke="#7C41F5" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
