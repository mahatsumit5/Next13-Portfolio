import {
  BiLogoReact,
  BiLogoTrello,
  BiLogoCss3,
  BiLogoJavascript,
  BiLogoNodejs,
  BiLogoRedux,
  BiLogoTailwindCss,
  BiLogoBootstrap,
  BiLogoPostgresql,
} from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { AiFillGithub, AiFillHtml5 } from "react-icons/ai";
import { FiFigma } from "react-icons/fi";
import { SiJira } from "react-icons/si";
import { BiLogoAws } from "react-icons/bi";
import { SiMui, SiPrisma, SiMongodb } from "react-icons/si";
import { v4 } from "uuid";
export const skills = [
  { id: v4(), color: "#3b82f6", icon: BiLogoReact, title: "React" },
  { id: v4(), color: "#facc15", icon: BiLogoCss3, title: "CSS" },
  { id: v4(), color: "#0a0a0a", icon: AiFillGithub, title: "Git" },
  { id: v4(), color: "#f59e0b", icon: AiFillHtml5, title: "HTML" },
  {
    id: v4(),
    color: "#fcd34d",
    icon: BiLogoJavascript,
    title: "JavaScript",
  },
  { id: v4(), color: "#166534", icon: SiMongodb, title: "MongoDb" },
  { id: v4(), color: "#166534", icon: BiLogoNodejs, title: "NodeJs" },
  { id: v4(), color: "#bae6fd", icon: FiFigma, title: "Figma" },
  {
    id: v4(),
    color: "#3b82f6",
    icon: BiLogoRedux,
    title: "Redux Toolkit",
  },
  { id: v4(), color: "#818cf8", icon: SiJira, title: "Jira" },
  { id: v4(), color: "#84cc16", icon: BiLogoAws, title: "AWS" },
  { id: v4(), color: "#6366f1", icon: SiMui, title: "Mui" },
  { id: v4(), color: "#6366f1", icon: BiLogoTrello, title: "Trello" },
  {
    id: v4(),
    color: "#3b82f6",
    icon: BiLogoTailwindCss,
    title: "Tailwind",
  },
  {
    id: v4(),
    color: "#C050E7 ",
    icon: BiLogoBootstrap,
    title: "Bootstrap",
  },
  {
    id: v4(),
    color: "#00008b",
    icon: TbBrandNextjs,
    title: "NEXTJS",
  },
  {
    id: v4(),
    color: "#00008b",
    icon: BiLogoPostgresql,
    title: "Postgresql",
  },
  {
    id: v4(),
    color: "black",
    icon: SiPrisma,
    title: "Prisma",
  },
];
