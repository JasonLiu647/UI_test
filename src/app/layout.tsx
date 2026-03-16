import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "The Daily Chronicle — Wizarding World News",
    template: "%s | The Daily Chronicle",
  },
  description:
    "The wizarding world's most trusted source for magical news, enchantments, potions, creature reports, and Ministry affairs. Est. 1743.",
  keywords: [
    "wizarding news",
    "magic",
    "enchantments",
    "potions",
    "magical creatures",
    "ministry of magic",
  ],
  authors: [{ name: "The Daily Chronicle" }],
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "The Daily Chronicle",
    title: "The Daily Chronicle — Wizarding World News",
    description: "The wizarding world's most trusted source for magical news.",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Daily Chronicle",
    description: "The wizarding world's most trusted source for magical news.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistMono.variable} antialiased dark-parchment-bg min-h-screen flex flex-col`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
