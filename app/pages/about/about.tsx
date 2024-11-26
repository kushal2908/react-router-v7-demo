import { Route } from "./+types/about";

export function meta({}: Route.MetaArgs) {
  return [{ title: "About | New React Router App" }, { name: "description", content: "Welcome to React Router!" }];
}
type Props = {};

export default function About({}: Props) {
  return (
    <div className="mt-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
      <p>
        Welcome to <code className="font-bold">Lumen Explorers</code> , a collective of curious minds dedicated to
        uncovering the hidden wonders of the world. Whether it's the unexplored corners of nature, forgotten tales of
        history, or the latest advancements in technology, we dive deep to bring fascinating insights to light. Our
        mission is simple: to inspire awe and spark curiosity. Through engaging stories, research-backed content, and
        creative exploration, we aim to connect people with the extraordinary elements of our everyday world. Founded by
        enthusiasts with diverse backgrounds—from science and art to storytelling and design—we believe that every
        perspective has a place in shaping the way we see the world. Join us on this journey of discovery, and let’s
        explore the magic in the mundane, one story at a time.
      </p>
    </div>
  );
}
