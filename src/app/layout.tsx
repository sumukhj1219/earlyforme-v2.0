import "~/styles/globals.css";

import { type Metadata } from "next";
import { Geist } from "next/font/google";
import { SessionProvider } from "next-auth/react"
import { TRPCReactProvider } from "~/trpc/react";
import { ThemeSwitchProvider } from "~/components/common/providers/theme-provider";
import { WaitlistContextProvider } from "~/contexts/WaitlistContext";
import { Toaster } from "sonner";
import { generateMetadata } from "~/components/common/meta/meta";
import Head from "next/head";


export const metadata = generateMetadata("/")

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
