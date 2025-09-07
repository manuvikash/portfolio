import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SpotlightProvider from "./components/SpotlightProvider";
import { APP_CONFIG } from "./lib/constants";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: APP_CONFIG.TITLE.DEFAULT,
    template: APP_CONFIG.TITLE.TEMPLATE,
  },
  description: APP_CONFIG.DESCRIPTION,
  metadataBase: new URL(APP_CONFIG.URL),
  openGraph: {
    title: APP_CONFIG.TITLE.DEFAULT,
    description: APP_CONFIG.DESCRIPTION,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: APP_CONFIG.TITLE.DEFAULT,
    description: APP_CONFIG.DESCRIPTION,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <SpotlightProvider />
        {children}
      </body>
    </html>
  );
}
