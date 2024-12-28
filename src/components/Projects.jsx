import React from "react";
import AnimatedTabs from "./AnimatedTabs";

const Projects = () => {
    return (
      <div id="projects" className="section flex items-center justify-center h-auto">
        <div className="mx-auto">
            <div className="col flex flex-col items-center justify-center gap-10 ">
              <div className="flex flex-col justify-center items-center gap-4 md:gap-10">
                <h2 className="text-[24px] md:text-[36px] lg:text-[50px] xl:text-[60px] font-heading ">My Projects</h2>
                <span className="h-[2px] md:h-1 w-[12rem] md:w-[10rem]  bg-gradient-to-r from-purple_light via-purple-400 to-pink-600 rounded-md"></span>
              </div>
              <AnimatedTabs/>
            </div>
        </div>
      </div>
    );
  }
  
  export default Projects;