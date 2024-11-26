import { Route } from "./+types";

export function meta({}: Route.MetaArgs) {
  return [{ title: "New React Router App" }, { name: "description", content: "Welcome to React Router!" }];
}

export default function Index() {
  return (
    <>
      <p className="text-2xl ">This is index page</p>
    </>
  );
}
