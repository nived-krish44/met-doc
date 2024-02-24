"use client";

import { useState } from "react";

import Sidebar from "./sidebar";

export default function DashLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [projects, setProjects] = useState<any>([]);

  return (
    <div className="flex min-w-screen">
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        projects={projects}
      />
      {children}
    </div>
  );
}
