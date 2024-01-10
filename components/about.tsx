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
        <span className="font-medium">I&apos;m Luan Faber, a Software Developer passionate about creating cool stuff that works. I&apos;m all about bringing ideas to life through code and innovation. 

🚀 I recently graduated from a 5-year Software Developer program, diving into everything from web development to database management and snagging some amazing hands-on experience along the way.

🏆 One of the highlights? Being part of the team behind the award-winning app, Files, recognized at the Microsoft Store App Awards 2022. Pretty stoked about that achievement!

🛠️ Speaking of projects, I&apos;ve tinkered with a range of cool stuff – from crafting a comprehensive school application integrating scheduling and authentication to building a self-driving miniature car and even creating a device that reads heart rhythms. Yep, it&apos;s been a wild ride!

💡 What gets me buzzing? Collaborating with amazing folks! I&apos;ve worked closely with senior developers and testers, tackling bugs, implementing new features, and boosting user experiences.

🎓 Education-wise, I&apos;ve got a mix of hands-on learning and formal certifications under my belt, diving into cybersecurity at Harvard University, advanced SQL from Udemy and Data technician specialized in programming at Technical Education Copenhagen.

🤖 Tech-wise, I&apos;ve delved into various frameworks and environments like React, Angular, Node.js, and more. And hey, I speak a few languages too – not just programming ones! English, Danish, Spanish, and Portuguese.

👨‍💻 Always keen to chat about teamwork, structured approaches, and making things happen! Hit me up if you&apos;re into cool tech and creative problem-solving.</span>{" "} 
      </p>
      </div>
      <p>

      Open to discuss on potential{" "}
        <span className="font-medium">collaborations</span>, exciting projects, or any professional opportunities.
  
      </p>
    </motion.section>
  );
}
