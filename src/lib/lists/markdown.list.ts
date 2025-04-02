import HonoMD from "@/markdown/hono/index.hono";
import ExpressMD from "@/markdown/express/index.express";
import PrismaMD from "@/markdown/prisma/index.prisma";
import solidityMD from "@/markdown/solidity/index.solidity";

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
  {
    id: 3,
    topic: "Express",
    subtopic: [
      {
        id: 1,
        title: "Get started with Express",
        href: "get-started-with-express",
        markdown: ExpressMD.ExpressM1,
      },
      {
        id: 2,
        title: "Express HTTP Guide",
        href: "express-http-guide",
        markdown: ExpressMD.ExpressM2,
      },
      {
        id: 3,
        title: "Express Routing Guide",
        href: "express-routing-guide",
        markdown: ExpressMD.ExpressM3,
      },
      {
        id: 4,
        title: "Express Middleware Guide",
        href: "express-middleware-guide",
        markdown: ExpressMD.ExpressM4,
      },
      {
        id: 5,
        title: "Express Requent & Response Handling",
        href: "express-request-response-handling",
        markdown: ExpressMD.ExpressM5,
      },
      {
        id: 6,
        title: "Express TypeScript Initialization",
        href: "express-typescript-initialization",
        markdown: ExpressMD.ExpressM6,
      },
    ],
  },
  {
    id: 4,
    topic: "Prisma",
    subtopic: [
      {
        id: 1,
        title: "Get started with Prisma",
        href: "get-started-with-prisma",
        markdown: PrismaMD.PrismaM1,
      },
      {
        id: 2,
        title: "Defining Prisma Schema",
        href: "defining-prisma-schema",
        markdown: PrismaMD.PrismaM2,
      },
      {
        id: 3,
        title: "Crud Operations with Prisma",
        href: "crud-operations",
        markdown: PrismaMD.PrismaM3,
      },
      {
        id: 4,
        title: "Database Migrations with Prisma",
        href: "database-migrations-with-prisma",
        markdown: PrismaMD.PrismaM4,
      },
      {
        id: 5,
        title: "Advance Querying with Prisma",
        href: "advance-querying-with-prisma",
        markdown: PrismaMD.PrismaM5,
      },
      {
        id: 6,
        title: "TypeScript Initialization with Prisma",
        href: "typescript-initialization-with-prisma",
        markdown: PrismaMD.PrismaM6,
      },
    ],
  },
  {
    id: 5,
    topic: "Solidity",
    subtopic: [
      {
        id: 1,
        title: "Get started with Solidity",
        href: "get-started-with-solidity",
        markdown: solidityMD.SolidityM1,
      }
    ],
  },
];
