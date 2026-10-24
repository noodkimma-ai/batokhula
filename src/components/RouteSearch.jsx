"use client";

import { useState } from "react";
import { Button, Input } from "antd";
import {
  EnvironmentOutlined,
  SearchOutlined,
  SwapOutlined,
} from "@ant-design/icons";

export default function RouteSearch() {
  const [start, setStart] = useState("");
  const [destination, setDestination] = useState("");

  function handleSearch() {
    if (!start.trim() || !destination.trim()) {
      alert("Please enter both your starting point and destination.");
      return;
    }

    alert(`Searching route from ${start} to ${destination}`);
  }

  function swapLocations() {
    setStart(destination);
    setDestination(start);
  }

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h2 className="text-xl font-bold text-slate-900">
        Find your route
      </h2>

      <p className="mt-2 text-sm text-slate-500">
        Enter your starting point and destination.
      </p>

      <div className="mt-5 flex items-center gap-2">
        <div className="flex-1 space-y-3">
          <Input
            size="large"
            prefix={<EnvironmentOutlined className="text-green-600" />}
            placeholder="Starting point"
            value={start}
            onChange={(event) => setStart(event.target.value)}
          />

          <Input
            size="large"
            prefix={<EnvironmentOutlined className="text-red-500" />}
            placeholder="Destination"
            value={destination}
            onChange={(event) => setDestination(event.target.value)}
          />
        </div>

        <Button
          aria-label="Swap starting point and destination"
          icon={<SwapOutlined />}
          onClick={swapLocations}
        />
      </div>

      <Button
        type="primary"
        block
        size="large"
        icon={<SearchOutlined />}
        className="!mt-5 !h-11 !rounded-xl"
        onClick={handleSearch}
      >
        Search Routes
      </Button>
    </div>
  );
}