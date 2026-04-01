import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

export function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col font-inter bg-[#F8F9FA]">
      <Navbar />
      <main className="flex-1 pt-[76px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
