"use client";

import dynamic from "next/dynamic";
import React, { useState, useMemo } from "react";
import * as Icons from "lucide-react";
import { Input } from "~/components/ui/input";

// Optional: only run this component on client
const NoSSRWrapper = dynamic(() => Promise.resolve(() => {
  const [search, setSearch] = useState("");

  const iconEntries = useMemo(() => {
    return Object.entries(Icons).filter(
      ([name, Icon]) =>
        typeof name === "string" &&
        typeof Icon === "function" &&
        name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <Input
        placeholder="Search for icons..."
        className="w-80 my-2"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="grid grid-cols-4 gap-4 w-full p-4">
        {iconEntries.map(([name, Icon]) => (
          <div key={name} className="flex flex-col items-center text-center">
            {typeof Icon === "function" && <Icon className="w-6 h-6" />}
            <p className="text-xs mt-1">{String(name).replace(/([A-Z])/g, " $1")}</p>
          </div>
        ))}
      </div>
    </div>
  );
}), { ssr: false });

export default NoSSRWrapper;
