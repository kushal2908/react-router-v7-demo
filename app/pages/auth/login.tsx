import { Form, NavLink, redirect, useFetcher } from "react-router";
import { Route } from "./+types/login";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Login | New React Router App" }, { name: "description", content: "Welcome to React Router!" }];
}

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  const res = await fetch(`https://reqres.in/api/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: formData.get("email"),
      password: formData.get("password"),
    }),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));

  // If success redirect to index page
  if (res?.token) {
    return redirect("/");
  }
  if (res?.error) {
    return { error: res.error };
  }
  return res;
}

export default function Login({ actionData }: Route.ComponentProps) {
  return (
    <div className="h-[calc(100vh-64px)] flex items-center justify-center">
      <div className="w-[320px] min-h-[200px] bg-white p-4 border border-gray-300 rounded-md shadow-lg">
        <h2 className="text-xl font-semibold mb-4 text-gray-900">Login</h2>

        {actionData?.error && <p className="text-red-500 mb-2 text-center">{actionData.error}</p>}
        <Form method="post" className="mb-4">
          <input
            type="text"
            className="w-full p-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-xs"
            placeholder="Email"
            name="email"
            required
          />
          <input
            type="password"
            className="w-full p-2 mb-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 text-xs"
            placeholder="Password"
            name="password"
            required
          />
          <button type="submit" className="w-full bg-teal-500 p-2 rounded-md text-white hover:bg-teal-600 text-sm">
            Login
          </button>
        </Form>

        <p className="text-sm text-center">
          Don't have an account?{" "}
          <NavLink to="/auth/register" className="font-medium text-blue-500">
            Register
          </NavLink>{" "}
        </p>
      </div>
    </div>
  );
}
