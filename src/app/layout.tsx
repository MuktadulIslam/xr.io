import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GetInTouch from "@/components/GetInTouch";
import ParticlesBackground from "@/components/ParticlesBackground";
import EventPopup from "@/components/EventPopup";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CraftXR - No-Code VR Development Platform",
  description: "Empower your teaching with immersive VR experiences. Create 3D simulations without coding, train students with realistic VR environments, and leverage AI-powered evaluation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className="relative min-h-screen bg-[#0a0a0a]">
          <Navbar />
          {children}
          <GetInTouch />
          <Footer />
          <ParticlesBackground />
          <EventPopup/>
        </main>
      </body>
    </html>
  );
}
