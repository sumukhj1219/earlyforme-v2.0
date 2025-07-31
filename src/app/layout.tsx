import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import { SessionProvider } from "next-auth/react"
import { TRPCReactProvider } from "~/trpc/react";
import { ThemeSwitchProvider } from "~/components/common/providers/theme-provider";
import { WaitlistContextProvider } from "~/contexts/WaitlistContext";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Earlyfor.me",
  description: "The Fastest Way to Build and Launch Waitlists.",
  icons: [{ rel: "icon", url: "/meta/logo.png" }],
  openGraph: {
    title: "Earlyfor.me – Build your waitlists within few clicks.",
    description: "The Fastest Way to Build and Launch Waitlists.",
    url: "https://www.earlyfor.me",
    siteName: "Earlyfor.me",
    images: [
      {
        url: "https://www.earlyfor.me/meta/og.png",
        width: 1200,
        height: 630,
        alt: "Earlyfor.me – Build your waitlists within few clicks.",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Earlyfor.me – Build your waitlists within few clicks.",
    description: "The Fastest Way to Build and Launch Waitlists.",
    images: ["https://www.earlyfor.me/meta/og.png"],
    site: "@earlyforme", // optional if you have a Twitter handle
  },
};


const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body className=" selection:bg-orange-600">
        <SessionProvider>
          <ThemeSwitchProvider>
            <WaitlistContextProvider>
              <TRPCReactProvider>
                {children}
                <Toaster />
              </TRPCReactProvider>
            </WaitlistContextProvider>
          </ThemeSwitchProvider>
        </SessionProvider>

      </body>
    </html>
  );
}
