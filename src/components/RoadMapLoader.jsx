
"use client";

import dynamic from "next/dynamic";

const RoadMap = dynamic(() => import("./RoadMap"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[480px] items-center justify-center bg-slate-100 text-slate-500">
      Loading map...
    </div>
  ),
});

export default function RoadMapLoader() {
  return <RoadMap />;
}

