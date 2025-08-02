"use client";

import React from "react";
import { IconType } from "react-icons";

interface StatsCardProps {
  title: string;
  value: string | number;
  change: string;
  icon: IconType;
  gradient: string;
  iconColor: string;
}

const StatsCard: React.FC<StatsCardProps> = ({
  title,
  value,
  change,
  icon: Icon,
  gradient,
  iconColor,
}) => {
  return (
    <div className={`bg-gradient-to-r ${gradient} rounded-xl p-6 text-white`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium opacity-90">{title}</p>
          <p className="text-3xl font-bold">{value}</p>
          <p className="text-sm opacity-80">{change}</p>
        </div>
        <div
          className={`w-12 h-12 ${iconColor} rounded-lg flex items-center justify-center`}
        >
          <Icon className="text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
