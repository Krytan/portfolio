import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuShieldCheck,LuGraduationCap,LuSchool } from "react-icons/lu";
import FixissueImg from "@/public/Fixissue.png";
import SmartskoleImg from "@/public/SmartSkole.png";
import TemperatureImg from "@/public/Temperature.png";
import { Graduate } from "next/font/google";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "5 years Software Developer Education",
    location: "TEC, Ballerup 2750",
    description:
      "Started my jorney in a 5 years Software Developer CTE program that covers foundational programming, web development, database management, software engineering. Hands-on projects, industry tools and internship.",
    icon: React.createElement(LuSchool),
    date: "Mar 2018",
  },
  {
    title: "Full-Stack Developer Internship",
    location: "TEC, Ballerup 2750",
    description:
      "While studying I received an internship where I worked on diverse projects given by professionals in the field. Examples include the Train Schedule(DSB API), Administration Security(Blazor), Self-Driving Miniature Car(C++) and many others.",
    icon: React.createElement(CgWorkAlt),
    date: "Jul 2019",
  },
  {
    title: "Cybersecurity: Risk Management Certification",
    location: "Harvard University, Remote",
    description:
      "I decided to take an online course in Cybersecurity, to further enhance my knowledge in the field. During the course, I worked with real-world hacking scenarios to learn affective strategies for avoiding modern threats. in my final exam I made a risk mitigation plan for Sony.",
    icon: React.createElement(LuShieldCheck),
    date: "Jan 2021",
  },
  {
    title: "Software Developer for Files",
    location: "Copenhagen, Remote",
    description:
      "Contributed to Files, the award-winning application avaliable in the Microsoft store, which won in 2022, I collaborated close with their head developer and clients, focusing in fixing bugs and improving the user experience.",
    icon: React.createElement(CgWorkAlt),
    date: "Mar 2023",
  },
  {
    title: "Graduated from the education ",
    location: "TEC, Ballerup 2750",
    description:
      "I graduated as a Data Technician specialized in programming, which is fantastic! It certainly didn't feel like five years. For my final exam, I collaborated with three other developers to create a school application that involved authentication, authorization, encryption, and a fancy schedule.",
    icon: React.createElement(LuGraduationCap),
    date: "Dec 2023",
  },


] as const;

export const projectsData = [
  {
    title: "Files",
    description:
      "Software Developer for Files. My primary focus during my work was to resolve bugs in the application, issued by clients.",
    tags: [".NET", "C#", "C++", "XAML", "UWP", "Agile", "winUI", "fluent"],
    imageUrl: FixissueImg,
  },
  {
    title: "SmartSkole",
    description:
      "Full-stack Developer for SS. worked with front and back end developers to integrate and synchronize the entire system.",
    tags: ["React", "Next", "TS", "MySQL","API", ".NET", "C#", "ESLint"],
    imageUrl: SmartskoleImg,
  },
  {
    title: "Web Thermometer",
    description:
      "Software Developer. Builded a temperature measurement board and used a web server to display the current temperature.",
    tags: ["RTOS", "Arduino", "C", "C++"],
    imageUrl: TemperatureImg,
  },
] as const;

export const skillsData = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Node.js",
  ".NET",
  "C#",
  "C++",
  "C",
  "MySQL",
  "RestAPI",
  "XAML",
  "UWP",
  "Agile Methodologies",
  "Microsoft Azure",
  "Cybersecurity",
  "HTML",
  "CSS/SCSS",
  "Business Intelligence",
  "Blazor",
] as const;
