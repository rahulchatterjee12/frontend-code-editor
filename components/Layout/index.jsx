"use client";

import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { useParams, usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const Layout = ({ children }) => {
  const path = usePathname();
  console.log(path);
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
