"use client";
import { usePathname } from "next/navigation";
import { useMemo } from "react";

export function usePage() {
  const pathname = usePathname();

  const pageTitle = useMemo(() => {
    if (!pathname) return "Home";

    const segments = pathname.split("/").filter(Boolean);
    const lastSegment = segments[segments.length - 1] || "home";

    const formatted =
      lastSegment.charAt(0).toUpperCase() + lastSegment.slice(1).replace(/-/g, " ");

    return formatted;
  }, [pathname]);

  return pageTitle;
}
