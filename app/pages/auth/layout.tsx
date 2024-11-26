import React from "react";
import { NavLink, Outlet } from "react-router";

type Props = {};

export default function layout({}: Props) {
  return (
    <main>
      <nav className="py-4 bg-white border-b border-b-gray-200">
        <div className="container mx-auto flex justify-between items-center">
          <div>
            <NavLink to="/" className="font-bold text-gray-800 hover:underline">
              <img
                src="https://reactrouter.com/_brand/React%20Router%20Brand%20Assets/React%20Router%20Lockup/Light.png"
                alt="logo"
                className="h-5 object-contain"
              />
            </NavLink>
          </div>
        </div>
      </nav>
      <Outlet />
    </main>
  );
}
