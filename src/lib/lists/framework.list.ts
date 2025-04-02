import { SiExpress, SiHono, SiNextdotjs, SiReact } from "react-icons/si";

export const FRAMEWORK_LIST = [
  {
    id: 1,
    name: "React",
    description: "React is a JavaScript library for building user interfaces.",
    icon: SiReact,
    color: "#61DAFB",
  },
  {
    id: 2,
    name: "Next",
    description:
      "Next.js is a React framework for server-rendered applications.",
    icon: SiNextdotjs,
    color: "#ffff",
  },
  {
    id: 3,
    name: "Express",
    description:
      "Express is a fast, unopinionated, minimalist web framework for Node.js.",
    icon: SiExpress,
    color: "#ffff",
  },
  {
    id: 4,
    name: "Hono",
    description:
      "Hono is a high-performance web framework for the Edge and Cloud environments.",
    icon: SiHono,
    color: "#FF5733",
  },
];
