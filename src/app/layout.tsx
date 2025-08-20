import type { Metadata } from "next";
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
  title: "Yasaswini's Archive",
  description: "Everything I've ever done",
};

function Header() {
  return (
    <header className="w-full py-4 px-6 shadow-md bg-white flex justify-between items-center sticky top-0 z-50">
      <h1 className="text-xl font-bold">Yasaswini’s Archive</h1>
      <nav className="flex gap-6 text-sm">
        <a href="/" className="hover:underline">Home</a>
        <a href="/projects" className="hover:underline">Projects</a>
        <a href="/skills" className="hover:underline">Skills</a>
        <a href="/contact" className="hover:underline">Contact</a>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer className="w-full py-6 px-6 mt-12 border-t text-center text-sm text-gray-500">
      © {new Date().getFullYear()} Yasaswini Devi. All rights reserved.
    </footer>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900`}
      >
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-1 container mx-auto px-6 py-10">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}