"use client";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WeatherWidget from "@/components/WeatherWidget";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>{children}</main>
      <Footer />
      <WeatherWidget />
    </div>
  );
}
