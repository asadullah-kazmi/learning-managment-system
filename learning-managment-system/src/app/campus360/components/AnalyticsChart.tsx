"use client";

import React from "react";
import { FaChartLine, FaChartBar, FaChartPie } from "react-icons/fa";

interface AnalyticsChartProps {
  title: string;
  type: "line" | "bar" | "pie";
  data: {
    labels: string[];
    values: number[];
  };
  color?: string;
}

const AnalyticsChart: React.FC<AnalyticsChartProps> = ({
  title,
  type,
  data,
  color = "blue",
}) => {
  const maxValue = Math.max(...data.values);
  const total = data.values.reduce((sum, value) => sum + value, 0);

  const renderChart = () => {
    switch (type) {
      case "line":
        return (
          <div className="relative h-32">
            <svg className="w-full h-full" viewBox="0 0 100 40">
              <polyline
                fill="none"
                stroke={`rgb(59, 130, 246)`}
                strokeWidth="2"
                points={data.values
                  .map((value, index) => {
                    const x = (index / (data.values.length - 1)) * 100;
                    const y = 40 - (value / maxValue) * 40;
                    return `${x},${y}`;
                  })
                  .join(" ")}
              />
            </svg>
          </div>
        );

      case "bar":
        return (
          <div className="flex items-end justify-between h-32 space-x-1">
            {data.values.map((value, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div
                  className={`w-full bg-${color}-500 rounded-t`}
                  style={{ height: `${(value / maxValue) * 100}%` }}
                ></div>
                <span className="text-xs text-gray-500 mt-1">
                  {data.labels[index]}
                </span>
              </div>
            ))}
          </div>
        );

      case "pie":
        return (
          <div className="flex items-center justify-center h-32">
            <div className="relative w-24 h-24">
              <svg className="w-full h-full" viewBox="0 0 100 100">
                {data.values.map((value, index) => {
                  const percentage = (value / total) * 100;
                  const startAngle = data.values
                    .slice(0, index)
                    .reduce((sum, val) => sum + (val / total) * 360, 0);
                  const endAngle = startAngle + (percentage / 100) * 360;

                  const x1 = 50 + 40 * Math.cos((startAngle * Math.PI) / 180);
                  const y1 = 50 + 40 * Math.sin((startAngle * Math.PI) / 180);
                  const x2 = 50 + 40 * Math.cos((endAngle * Math.PI) / 180);
                  const y2 = 50 + 40 * Math.sin((endAngle * Math.PI) / 180);

                  const largeArcFlag = percentage > 50 ? 1 : 0;

                  return (
                    <path
                      key={index}
                      d={`M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArcFlag} 1 ${x2} ${y2} Z`}
                      fill={`hsl(${index * 60}, 70%, 60%)`}
                    />
                  );
                })}
              </svg>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  const getIcon = () => {
    switch (type) {
      case "line":
        return <FaChartLine className="text-gray-400" />;
      case "bar":
        return <FaChartBar className="text-gray-400" />;
      case "pie":
        return <FaChartPie className="text-gray-400" />;
      default:
        return <FaChartLine className="text-gray-400" />;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        {getIcon()}
      </div>
      <div className="mb-4">{renderChart()}</div>
      <div className="grid grid-cols-2 gap-4 text-sm">
        {data.labels.map((label, index) => (
          <div key={index} className="flex items-center justify-between">
            <span className="text-gray-600">{label}</span>
            <span className="font-medium text-gray-900">
              {data.values[index]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnalyticsChart;
