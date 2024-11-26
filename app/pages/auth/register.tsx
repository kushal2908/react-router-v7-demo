import { Form, NavLink } from "react-router";
import { Route } from "./+types/register";

type Props = {};

export function meta({}: Route.MetaArgs) {
  return [{ title: "Register | New React Router App" }, { name: "description", content: "Welcome to React Router!" }];
}

export default function Register({}: Props) {
  return (
    <div className="h-[calc(100vh-64px)] flex items-center justify-center">
      <div className="w-[320px] min-h-200px] bg-white p-4 border border-gray-300 rounded-md shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">Register</h2>
        <Form action="/auth/register" method="post" className="mb-4">
          <input
            type="text"
            className="w-full p-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-xs"
            placeholder="Username"
            name="username"
          />
          <input
            type="password"
            className="w-full p-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-xs"
            placeholder="Password"
            name="password"
          />
          <button type="submit" className="w-full bg-teal-500 p-2 rounded-md text-white hover:bg-teal-600 text-sm">
            Register
          </button>
        </Form>

        <p className="text-sm text-center">
          Already have an account?{" "}
          <NavLink to="/auth/login" className="font-medium text-blue-500">
            Login
          </NavLink>{" "}
        </p>
      </div>
    </div>
  );
}
