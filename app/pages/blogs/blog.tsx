import { Link } from "react-router";
import { Route } from "./+types";

export async function loader({ params }: Route.LoaderArgs) {
  let res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params?.id}`);
  let blog = res?.json();
  return blog;
}

export function meta({ data }: Route.MetaArgs) {
  return [{ title: `${data.title} | New React Router App` }, { name: "description", content: `${data?.body}` }];
}

export default function blog({ loaderData }: Route.ComponentProps) {
  return (
    <div className="mt-8">
      <div>
        <Link to="/blogs">
          <button className="bg-teal-400 px-4 py-1 rounded-sm text-white text-xs"> &#8592; Go back</button>
        </Link>
        <h1 className="text-4xl font-bold mb-1">{loaderData?.title}</h1>
        <div className="flex justify-start items-center">
          <p className="text-sm text-gray-600">Writer: {loaderData?.userId}</p>
        </div>
      </div>
      <p className="mt-4">{loaderData?.body}</p>
    </div>
  );
}
