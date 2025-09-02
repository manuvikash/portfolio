import type { Metadata } from "next";
import Link from "next/link";
import Header from "./components/Header";
import { Geist, Geist_Mono } from "next/font/google";
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
    default: "Developer Portfolio — Futuristic",
    template: "%s — Dev Portfolio",
  },
  description: "Minimal, futuristic developer portfolio and blog.",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Developer Portfolio — Futuristic",
    description: "Minimal, futuristic developer portfolio and blog.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Developer Portfolio — Futuristic",
    description: "Minimal, futuristic developer portfolio and blog.",
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
        <div className="page-enter page-enter-active min-h-dvh flex flex-col">
          <Header />
          <main className="flex-1 px-4 sm:px-6">{children}</main>
          <footer className="px-4 sm:px-6 py-5 sm:py-6 text-xs sm:text-sm text-[color:var(--fg-dim)]">
            © {new Date().getFullYear()} • Built with Next.js
          </footer>
        </div>
      </body>
    </html>
  );
}
