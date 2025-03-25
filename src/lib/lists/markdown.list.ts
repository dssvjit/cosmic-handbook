import HonoMD from "@/markdown/hono/index.hono";

export const MARKDOWN_LIST = [
  {
    id: 1,
    topic: "React",
    subtopic: [
      {
        id: 1,
        title: "Get started with React",
        href: "get-started-with-react",
        markdown: HonoMD.HonoM1,
      },
      {
        id: 2,
        title: "React Routing Guide",
        href: "react-routing-guide",
        markdown: HonoMD.HonoM2,
      },
      {
        id: 3,
        title: "React Middleware Guide",
        href: "react-middleware-guide",
        markdown: HonoMD.HonoM3,
      },
      {
        id: 4,
        title: "React Request & Response Handling",
        href: "react-request-response-handling",
        markdown: HonoMD.HonoM4,
      },
      {
        id: 5,
        title: "React Deployment Guide",
        href: "react-deployment-guide",
        markdown: HonoMD.HonoM5,
      },
    ],
  },
  {
    id: 2,
    topic: "Hono",
    subtopic: [
      {
        id: 1,
        title: "Get started with Hono",
        href: "get-started-with-hono",
        markdown: HonoMD.HonoM1,
      },
      {
        id: 2,
        title: "Hono Routing Guide",
        href: "hono-routing-guide",
        markdown: HonoMD.HonoM2,
      },
      {
        id: 3,
        title: "Hono Middleware Guide",
        href: "hono-middleware-guide",
        markdown: HonoMD.HonoM3,
      },
      {
        id: 4,
        title: "Hono Request & Response Handling",
        href: "hono-request-response-handling",
        markdown: HonoMD.HonoM4,
      },
      {
        id: 5,
        title: "Hono Deployment Guide",
        href: "hono-deployment-guide",
        markdown: HonoMD.HonoM5,
      },
    ],
  },
];
