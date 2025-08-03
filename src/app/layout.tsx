import "~/styles/globals.css";

import { Geist } from "next/font/google";
import { type Metadata } from "next";
import { SessionProvider } from "next-auth/react";
import { TRPCReactProvider } from "~/trpc/react";
import { ThemeSwitchProvider } from "~/components/common/providers/theme-provider";
import { WaitlistContextProvider } from "~/contexts/WaitlistContext";
import { Toaster } from "sonner";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

export const metadata: Metadata = {
  title: "Earlyfor.me - Build your waitlists within few clicks.",
  description: "The Fastest Way to Build and Launch Waitlists.",
  keywords: [
    "multi-tenant",
    "saas",
    "waitlists",
    "developer",
    "full-stack",
    "react",
    "nextjs",
    "typescript",
    "webdevelopment",
  ],
  metadataBase: new URL("https://earlyfor.me"), 
  openGraph: {
    title: "Earlyfor.me - Build your waitlists within few clicks.",
    description: "The Fastest Way to Build and Launch Waitlists.",
    url: "https://earlyfor.me",
    siteName: "Earlyfor.me",
    images: [
      {
        url: "https://earlyfor.me/meta/main.png", 
        width: 1200,
        height: 630,
        alt: "Earlyfor.me",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Earlyfor.me - Build your waitlists within few clicks.",
    description: "The Fastest Way to Build and Launch Waitlists.",
    creator: "@iam_enginner",
    images: ["https://earlyfor.me/meta/main.png"],
  },
  alternates: {
    canonical: "https://earlyfor.me",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${geist.variable}`}>
      <body className="selection:bg-orange-600">
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
