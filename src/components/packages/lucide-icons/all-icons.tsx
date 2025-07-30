"use client";

import dynamic from "next/dynamic";
import React, { useState } from "react";
import * as Icons from "lucide-react";
import { Input } from "~/components/ui/input";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "~/components/ui/pagination";

const NoSSRWrapper = dynamic(
  () =>
    Promise.resolve(() => {
      const [search, setSearch] = useState("");
      const [page, setPage] = useState(1);
      const pageSize = 48;

      const filteredIcons = Object.keys(Icons).filter((name) =>
        name.toLowerCase().includes(search.toLowerCase())
      );

      const totalPages = Math.ceil(filteredIcons.length / pageSize);
      const startIndex = (page - 1) * pageSize;
      const paginatedIcons = filteredIcons.slice(
        startIndex,
        startIndex + pageSize
      );

      const goToPrevious = () => {
        if (page > 1) setPage((p) => p - 1);
      };

      const goToNext = () => {
        if (page < totalPages) setPage((p) => p + 1);
      };

      return (
        <div className="flex flex-col items-center justify-center w-full">
          <Input
            placeholder="Search for icons..."
            className="w-80 my-4"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(1); // Reset to page 1 on new search
            }}
          />

          <div className="grid grid-cols-6 gap-4 w-full max-w-screen-xl px-4">
            {paginatedIcons.map((name) => {
              const LucideIcon = Icons[name as keyof typeof Icons];
              return (
                <div key={name} className="flex flex-col items-center text-center">
                  <LucideIcon className="w-8 h-8 p-1.5 bg-muted rounded" />
                </div>
              );
            })}
          </div>

          {totalPages > 1 && (
            <Pagination className="mt-6">
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious className="cursor-pointer" onClick={goToPrevious} />
                </PaginationItem>
                <PaginationItem>
                  <span className="text-sm px-2">
                    Page {page} of {totalPages}
                  </span>
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext className="cursor-pointer" onClick={goToNext} />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          )}
        </div>
      );
    }),
  { ssr: false }
);

export default NoSSRWrapper;
