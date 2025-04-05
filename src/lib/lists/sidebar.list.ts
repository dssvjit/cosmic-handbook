import HonoMD from "@/markdown/hono/index.hono";
import ExpressMD from "@/markdown/express/index.express";
import PrismaMD from "@/markdown/prisma/index.prisma";
import HtmlMD from "@/markdown/html/index.html";
import CssMD from "@/markdown/css/index.css";
import ReactMD from "@/markdown/react/index.react";
import DockerMD from "@/markdown/docker/index.docker";

import {
  SiExpress,
  SiHtml5,
  SiPrisma,
  SiHono,
  SiCss3,
  SiNextdotjs,
  SiDocker,
  SiGraphql,
} from "react-icons/si";

export const UPPER_SIDEBAR_LIST = [
  {
    id: 1,
    topic: "MEET-NXTGEN",
    subTopic: [
      {
        id: 1,
        topic: "What is Nxtgen?",
        href: "what-is-nxtgen",
      },
      {
        id: 2,
        topic: "Want to join?",
        href: "want-to-join",
      },
      {
        id: 3,
        topic: "Want to contribute?",
        href: "want-to-contribute",
      },
    ],
  },
  {
    id: 2,
    topic: "GUIDES",
    subTopic: [
      {
        id: 1,
        topic: "Full Stack Development",
        href: "full-stack-development",
      },
      {
        id: 2,
        topic: "Frontend Development",
        href: "frontend-development",
      },
      {
        id: 3,
        topic: "Backend Development",
        href: "backend-development",
      },
      {
        id: 4,
        topic: "DevOps",
        href: "devops",
      },
      {
        id: 5,
        topic: "Blockchain",
        href: "blockchain",
      },
    ],
  },
];

export const LOWER_SIDEBAR_LIST = [
  {
    id: 1,
    topic: "RESOURCE",
    subTopic: [
      {
        id: 1,
        topic: "Html",
        icon: SiHtml5,
        subtopic: [
          {
            id: 1,
            title: "Get started",
            href: "get-started",
            markdown: HtmlMD.HtmlM1,
          },
          {
            id: 2,
            title: "Basic Elements",
            href: "basic-elements",
            markdown: HtmlMD.HtmlM2,
          },
          {
            id: 3,
            title: "Advanced Elements",
            href: "advanced-elements",
            markdown: HtmlMD.HtmlM3,
          },
        ],
      },
      {
        id: 2,
        topic: "CSS",
        icon: SiCss3,
        subtopic: [
          {
            id: 1,
            title: "Getting Started",
            href: "getting-started",
            markdown: CssMD.CssM1,
          },
          {
            id: 2,
            title: "Selectors & Properties",
            href: "selectors-properties",
            markdown: CssMD.CssM2,
          },
          {
            id: 3,
            title: "Box Model & layouts",
            href: "box-model-layouts",
            markdown: CssMD.CssM3,
          },
          {
            id: 4,
            title: "Grid & Responsive Design",
            href: "grid-responsive-design",
            markdown: CssMD.CssM4,
          },
          {
            id: 5,
            title: "Animations & Transitions",
            href: "animations-transitions",
            markdown: CssMD.CssM5,
          },
        ],
      },
      {
        id: 3,
        topic: "Express",
        icon: SiExpress,
        subtopic: [
          {
            id: 1,
            title: "Get started",
            href: "get-started",
            markdown: ExpressMD.ExpressM1,
          },
          {
            id: 2,
            title: "HTTP Guide",
            href: "http-guide",
            markdown: ExpressMD.ExpressM2,
          },
          {
            id: 3,
            title: "Routing Guide",
            href: "routing-guide",
            markdown: ExpressMD.ExpressM3,
          },
          {
            id: 4,
            title: "Middleware Guide",
            href: "middleware-guide",
            markdown: ExpressMD.ExpressM4,
          },
          {
            id: 5,
            title: "Requent & Response",
            href: "request-response",
            markdown: ExpressMD.ExpressM5,
          },
          {
            id: 6,
            title: "TypeScript Initialization",
            href: "typescript-initialization",
            markdown: ExpressMD.ExpressM6,
          },
        ],
      },
      {
        id: 4,
        topic: "Hono",
        icon: SiHono,
        subtopic: [
          {
            id: 1,
            title: "Get started",
            href: "get-started",
            markdown: HonoMD.HonoM1,
          },
          {
            id: 2,
            title: "Routing Guide",
            href: "routing-guide",
            markdown: HonoMD.HonoM2,
          },
          {
            id: 3,
            title: "Middleware Guide",
            href: "middleware-guide",
            markdown: HonoMD.HonoM3,
          },
          {
            id: 4,
            title: "Request & Response",
            href: "request-response",
            markdown: HonoMD.HonoM4,
          },
          {
            id: 5,
            title: "Deployment Guide",
            href: "deployment-guide",
            markdown: HonoMD.HonoM5,
          },
        ],
      },
      {
        id: 4,
        topic: "Prisma",
        icon: SiPrisma,
        subtopic: [
          {
            id: 1,
            title: "Get started",
            href: "get-started",
            markdown: PrismaMD.PrismaM1,
          },
          {
            id: 2,
            title: "Defining Schema",
            href: "defining-schema",
            markdown: PrismaMD.PrismaM2,
          },
          {
            id: 3,
            title: "Crud Operations",
            href: "crud-operations",
            markdown: PrismaMD.PrismaM3,
          },
          {
            id: 4,
            title: "Database Migrations",
            href: "database-migrations",
            markdown: PrismaMD.PrismaM4,
          },
          {
            id: 5,
            title: "Advance Querying",
            href: "advance-querying",
            markdown: PrismaMD.PrismaM5,
          },
          {
            id: 6,
            title: "TypeScript Initialization",
            href: "typescript-initialization",
            markdown: PrismaMD.PrismaM6,
          },
        ],
      },
      {
        id: 5,
        topic: "NextJS",
        icon: SiNextdotjs,
        subtopic: [
          {
            id: 1,
            title: "Get started",
            href: "get-started",
            markdown: null,
          },
          {
            id: 2,
            title: "Routing Guide",
            href: "routing-guide",
            markdown: null,
          },
          {
            id: 3,
            title: "Middleware Guide",
            href: "middleware-guide",
            markdown: null,
          },
          {
            id: 4,
            title: "Request & Response",
            href: "request-response",
            markdown: null,
          },
          {
            id: 5,
            title: "Deployment Guide",
            href: "deployment-guide",
            markdown: null,
          },
        ],
      },
      {
        id: 6,
        topic: "ReactJS",
        icon: SiNextdotjs,
        subtopic: [
          {
            id: 1,
            title: "Get Started",
            href: "get-started",
            markdown: ReactMD.ReactM1,
          },
          {
            id: 2,
            title: "React Props",
            href: "react-props",
            markdown: ReactMD.ReactM2,
          },
          {
            id: 3,
            title: "React State",
            href: "react-state",
            markdown: ReactMD.ReactM3,
          },
          {
            id: 4,
            title: "Events in React",
            href: "events-in-react",
            markdown: ReactMD.ReactM4,
          },
          {
            id: 5,
            title: "Refs and DOM",
            href: "refs-and-dom",
            markdown: ReactMD.ReactM5,
          },
        ],
      },
      {
        id: 7,
        topic: "Docker",
        icon: SiDocker,
        subtopic: [
          {
            id: 1,
            title: "Introduction",
            href: "introduction",
            markdown: DockerMD.DockerM1,
          },
          {
            id: 2,
            title: "Docker Compose",
            href: "docker-compose",
            markdown: DockerMD.DockerM2,
          },
          {
            id: 3,
            title: "Running Services",
            href: "running-services",
            markdown: DockerMD.DockerM3,
          },
          {
            id: 4,
            title: "Making Containers",
            href: "making-containers",
            markdown: DockerMD.DockerM4,
          },
          {
            id: 5,
            title: "Deployment Guide",
            href: "deployment-guide",
            markdown: DockerMD.DockerM5,
          },
        ],
      },
      {
        id: 8,
        topic: "GraphQL",
        icon: SiGraphql,
        subtopic: [
          {
            id: 1,
            title: "Get started",
            href: "get-started",
            markdown: null,
          },
          {
            id: 2,
            title: "Routing Guide",
            href: "routing-guide",
            markdown: null,
          },
          {
            id: 3,
            title: "Middleware Guide",
            href: "middleware-guide",
            markdown: null,
          },
          {
            id: 4,
            title: "Request & Response",
            href: "request-response",
            markdown: null,
          },
          {
            id: 5,
            title: "Deployment Guide",
            href: "deployment-guide",
            markdown: null,
          },
        ],
      },
      {
        id: 9,
        topic: "Firebase",
        icon: SiNextdotjs,
        subtopic: [
          {
            id: 1,
            title: "Get started",
            href: "get-started",
            markdown: null,
          },
          {
            id: 2,
            title: "Routing Guide",
            href: "routing-guide",
            markdown: null,
          },
          {
            id: 3,
            title: "Middleware Guide",
            href: "middleware-guide",
            markdown: null,
          },
          {
            id: 4,
            title: "Request & Response",
            href: "request-response",
            markdown: null,
          },
          {
            id: 5,
            title: "Deployment Guide",
            href: "deployment-guide",
            markdown: null,
          },
        ],
      },
    ],
  },
];
