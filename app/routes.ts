import { type RouteConfig, index, route, layout } from "@react-router/dev/routes";

export default [
  // App
  layout("./layout.tsx", [
    index("pages/index/index.tsx"),
    route("about", "pages/about/about.tsx"),
    route("blogs", "pages/blogs/index.tsx"),
    route("blogs/:id", "pages/blogs/blog.tsx"),
  ]),

  // Auth
  layout("pages/auth/layout.tsx", [
    route("auth/login", "pages/auth/login.tsx"),
    route("auth/register", "pages/auth/register.tsx"),
  ]),
] satisfies RouteConfig;
