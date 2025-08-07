"use client"

import type { Template } from "~/types/template";
import type { WaitlistDetails } from "~/types/waitlist";

export const uploadImage = async (
  e: React.ChangeEvent<HTMLInputElement>,
  setWaitlistDetails: (waitlists: any) => void,
  setTemplate: (waitlists: any) => void
) => {
  const file = e.target.files?.[0];
  if (!file) return;

  setWaitlistDetails((prev:WaitlistDetails) => ({
    ...prev as WaitlistDetails,
    waitlistLogo: URL.createObjectURL(file),
  }));

  setTemplate((prev:Template) => ({
    ...prev as Template,
    waitlistLogo: URL.createObjectURL(file),
  }));

  const getUrlRes = await fetch("/api/upload", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ fileName: file.name }),
  });

  const { url } = await getUrlRes.json();

  const uploadRes = await fetch(url, {
    method: "PUT",
    headers: {
      "Content-Type": file.type,
    },
    body: file,
  });

  if (uploadRes.ok) {
    console.log("✅ Uploaded to R2:", file.name);

    const publicUrl = `https://pub-2115bce7adca49dba7376460f5f52e47.r2.dev/${file.name}`;
    setWaitlistDetails((prev: any) => ({
      ...prev,
      waitlistLogo: publicUrl,
    }));
    setTemplate((prev: any) => ({
      ...prev,
      waitlistLogo: publicUrl,
    }));
  } else {
    console.error("❌ Upload failed");
  }
};
