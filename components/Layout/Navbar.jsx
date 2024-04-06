"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import getProfile from "@/helper/auth/getProfile";
import Avatar from "@mui/material/Avatar";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import LogoutIcon from "@mui/icons-material/Logout";
import logout from "@/helper/auth/logout";

const Navbar = () => {
  const [profile, setProfile] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getProfile().then((res) => {
      if (res?.status === 200) {
        setProfile(res.data.user);
      }
      setLoading(false);
    });
  }, []);

  return (
    <nav className="bg-gray-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between">
          <div className="flex space-x-4">
            <div>
              <Link
                href="/"
                className="flex items-center py-5 px-2 text-gray-700 hover:text-gray-900"
              >
                <svg
                  className="h-6 w-6 mr-1 text-blue-400"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
                <span className="font-bold">Code Editor</span>
              </Link>
            </div>
          </div>
          {!loading ? (
            <>
              {!profile ? (
                <div className="hidden md:flex items-center space-x-1">
                  <Link href="/login" className="py-5 px-3">
                    Login
                  </Link>
                  <Link
                    href="/signup"
                    className="py-2 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300"
                  >
                    SignUp
                  </Link>
                </div>
              ) : (
                <div className="flex items-center space-x-3">
                  <Avatar>{profile.firstName.charAt(0)}</Avatar>{" "}
                  <p className="text-gray-600">
                    {profile.firstName + " " + profile.lastName}
                  </p>
                  <Button
                    variant="outlined"
                    size="small"
                    startIcon={<LogoutIcon />}
                    onClick={() => {
                      logout().then((res) => {});
                    }}
                  >
                    Logout
                  </Button>
                </div>
              )}
            </>
          ) : (
            <CircularProgress />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
