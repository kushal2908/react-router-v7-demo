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
          <div className="flex justify-start items-center gap-4">
            <NavLink to="/about" className="font-medium text-gray-800 hover:text-gray-900">
              About
            </NavLink>
            <NavLink to="/blogs" className="font-medium text-gray-800 hover:text-gray-900">
              Blogs
            </NavLink>
            <NavLink
              to="auth/login"
              className="font-medium bg-teal-500 text-sm px-4 py-1 rounded-md text-white hover:bg-teal-600"
            >
              Login
            </NavLink>
          </div>
        </div>
      </nav>
      <section className="container mx-auto">
        <Outlet />
      </section>
    </main>
  );
}
