"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  const textcolumns = {
    textAlign: 'justify' as const,

  };

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <div style={textcolumns}>

      
      <p className="mb-3">
        Recently graduated with a degree in{" "}
        <span className="font-medium">Data technician specialized in programming</span>{" "} over a 5-year academic journey. 
        Alongside my education, I immersed myself in various online courses, one notable being from{" "}
        <span className="font-medium">Harvard University</span>.{" "}
        <span className="font-medium">Contributed for a successful project, </span> it being the award-winning app at the Microsoft Store App Awards in 2022.
        I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, MySQL, TypeScript and NextAuth. 
        </span>
        I am also familiar with .NET, C# and C++. I am always looking to
        learn new technologies. 

        <span className="font-medium">{" "}When I&apos;m not coding</span>, I enjoy shooting in the gun range, practicing swordsmanship,
        playing video games and watching movies. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and culture</span>. I also enjoy travelling into non-visited places.
        
        
        
      
      </p>
      </div>
      <p>

      Open to discuss on potential{" "}
        <span className="font-medium">collaborations</span>, exciting projects, or any professional opportunities.
  
      </p>
    </motion.section>
  );
}
