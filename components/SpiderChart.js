import React from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
  PolarRadiusAxis,
} from "recharts";

const data = [
  { category: "Process Identification", value: 4 },
  { category: "Data Availability", value: 2 },
  { category: "Technology Readiness", value: 2 },
  { category: "Talent & Culture", value: 3 },
  { category: "Regulatory Compliance", value: 5 },
];

const SpiderChart = () => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <defs>
          <linearGradient id="fillGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#007BE5" stopOpacity={0.6} />
            <stop offset="100%" stopColor="#00E582" stopOpacity={0.6} />
          </linearGradient>

          <linearGradient id="strokeGradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#007BE5" />
            <stop offset="100%" stopColor="#00E582" />
          </linearGradient>
        </defs>

        <PolarGrid strokeDasharray="6 2" />
        <PolarAngleAxis
          dataKey="category"
          tick={({ payload, x, y }) => {
            const angle = payload.coordinate;
            const isLeftSide = angle < -90;

            return (
              <text
                x={x}
                y={y}
                textAnchor={isLeftSide ? "end" : "start"}
                fontSize={12}
                fill="#32597B"
              >
                {payload.value.split(" ").map((word, index) => (
                  <tspan
                    x={x}
                    dx={isLeftSide ? -15 : 15}
                    dy={index === 0 ? -10 : 14}
                    key={index}
                  >
                    {word}
                  </tspan>
                ))}
              </text>
            );
          }}
        />
        <PolarRadiusAxis
          domain={[0, 5]}
          tickCount={6}
          tick={false}
          axisLine={false}
        />

        <Radar
          name="Score"
          dataKey="value"
          stroke="url(#strokeGradient)"
          strokeWidth={2}
          fill="url(#fillGradient)"
          fillOpacity={0.6}
        />
      </RadarChart>
    </ResponsiveContainer>
  );
};

export default SpiderChart;
