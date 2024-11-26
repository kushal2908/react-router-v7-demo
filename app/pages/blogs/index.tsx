import { Link } from "react-router";
import { Route } from "./+types";

export async function loader() {
  let res: any = await fetch("https://jsonplaceholder.typicode.com/posts");
  let blogs = res?.json();
  return blogs;
}

export function meta({}: Route.MetaArgs) {
  return [{ title: "Blogs | New React Router App" }, { name: "description", content: "Blogs description" }];
}

export default function index({ loaderData }: Route.ComponentProps) {
  return (
    <div className="mt-8 mb-4">
      <p className="text-4xl font-bold text-gray-800 mb-4">Blogs</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {loaderData?.map((blog: any) => (
          <Link key={blog.id} to={`/blogs/${blog.id}`}>
            <div className="bg-white min-h-[250px] p-4 border border-gray-300 rounded-md hover:shadow-lg hover:border-teal-200 hover:ring-4 hover:ring-teal-50 transition-all">
              <h2 className="text-lg font-semibold mb-2 text-gray-800">
                {blog.id}
                {". "}
                {blog.title}
              </h2>
              <p className="text-sm text-gray-700">{blog.body}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
