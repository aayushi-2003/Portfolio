import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Experience = () => {
  const internships = [
    {
      company: "Excellon Software",
      title: "Summer Intern",
      duration: "May 2024 – July 2024",
      description: `Worked on modules for the company’s B2B SaaS Dealer Management System and applied user research methodologies,
      created user flows, wireframes and high fidelity designs from user stories.`,
      keySkills: ["Figma", "Wireframing", "UX Research", "UX Product Design"],
    },
    {
      company: "Rablo.in",
      title: "UI/UX Design Intern",
      duration: "Aug 2023 – Dec 2023",
      description: `Conducted end-to-end UI/UX workflow, from ideation to high-fidelity designs and coordinated developer handoffs. Established a robust design system, improved usability and aesthetics of 4+ modules for their Internship Platform.
`,
      keySkills: ["Figma", "Wireframing", "Interaction Design", "UX Research", "Design Documentation"],
    },
  ];

  return (
    <div id="experience" className="section h-full px-10 gap-2 md:gap-10 flex flex-col md:flex-row items-center justify-center">

      <div className="flex flex-col justify-center items-center md:items-start gap-2 md:gap-8 mb-6 md:mb-10">
        <h2 className="text-[24px] md:text-[36px] lg:text-[50px] xl:text-[60px] font-heading">
          Internships
        </h2>
        <span className="h-[2px] md:h-1 w-[12rem] md:w-[10rem]   bg-gradient-to-r from-purple_light via-purple-400 to-pink-600 rounded-md"></span>
      </div>

      <div className="flex flex-col gap-10">
        {internships.map((internship, index) => (
          <motion.div
          variants={fadeIn('left', 0.3)} 
          initial="hidden" whileInView={'show'} 
          viewport={{once:false, amount: 0.3}} 
          transition={{ delay: index * 0.1 }}
          key={index}
            className="relative shadow-lg rounded-xl p-[2px] bg-site max-w-2xl mx-auto"
          >
            <div className="bg-[#192957] rounded-xl p-6">
                <div className="flex justify-between">
                    <div>  
                        <h3 className="text-[18px] md:text-xl font-semibold text-white text-nowrap mr-4">
                        {internship.company}
                        </h3>
                        <p className="text-sm text-gray-200">{internship.title}</p>
                    </div>
                    <p className="text-xs leading-[30px] text-gray-200">{internship.duration}</p>
                </div>
                    <p className="mt-3 leading-loose text-[12px] md:text-sm text-blue-100/60">
                    {internship.description}
                    </p>
                <div className="mt-3 text-sm text-gray-200">
                <ul className="flex flex-wrap text-sm text-purple-300/80 gap-y-1 md:gap-y-2 gap-x-2 md:gap-x-4 mt-3 md:mt-6 lg:mt-8">
                    {internship.keySkills.map((tool, index) => (
                        <li key={index} className="mr-4">{tool}</li>
                    ))}
                </ul>
                </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
