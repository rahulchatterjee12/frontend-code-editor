"use client";

import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { usePathname } from "next/navigation";

const urlToSkip = ["/signup", "/login"];

const Layout = ({ children }) => {
  const path = usePathname();

  if (urlToSkip.includes(path))
    return <div className="mt-[5px]">{children}</div>;
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        {children}
      </div>
    </>
  );
};

export default Layout;
