import {motion} from 'framer-motion';
import {fadeIn} from '../variants';
import Python from '../assets/logos/python.svg?react';
import JavaScript from '../assets/logos/javascript.svg?react';
import Cpp from '../assets/logos/cpp.svg?react';
import TW from '../assets/logos/tailwindcss.svg?react';
import Reactlogo from '../assets/logos/react.svg?react';
import Pandas from '../assets/logos/pandas.svg?react';
import OpenCV from '../assets/logos/opencv.svg?react';
import Numpy from '../assets/logos/numpy.svg?react';
import Tableau from '../assets/logos/tableau.svg?react';
import PowerBI from '../assets/logos/powerbi.svg?react';
import Excel from '../assets/logos/excel.svg?react';
import Figma from '../assets/logos/figma.svg?react';
import Git from '../assets/logos/git.svg?react';
import Sql from '../assets/logos/mysql.svg?react';
import Art from '../assets/logos/art.svg?react';
import clang from '../assets/logos/c.png'
import books from '../assets/logos/books.png'
import guitar from '../assets/logos/guitar.png'
import writing from '../assets/logos/writing.png'
import movies from '../assets/logos/movie.png'


const About = () => {
    return (
      <>
      <div id="about" className="section h-full">
        <div className="lg:container px-[40px] flex justify-between items-center mx-auto lg:space-x-8 md:flex-row flex-col gap-10 lg:gap-16">
          <motion.div variants={fadeIn('down', 0.3)} initial="hidden" whileInView={'show'} 
          className="card-container flex flex-col items-center justify-center order-2 lg:order-1 pl-0 gap-y-4">
            <div className=" bg-blue-400 backdrop-blur-md bg-opacity-20  rounded-xl  text-black flex flex-col items-start justify-center  relative p-[2px]  ">
              <div className="h-fit w-[250px] lg:w-[380px] bg-[#192957] rounded-xl p-6 ">
                <h1 className="mb-1 lg:mb-4 text-[16px] lg:text-[20px]  font-semibold tracking-wider text-white font-heading">My Key Skills</h1>
                <div className="flex flex-col gap-4 font-medium md:leading-8 lg:leading-10 ">
                  <div className=" flex space-x-3 lg:space-x-8">
                    <Python className="h-[32px] w-[32px] ] lg:h-[40px] lg:w-[40px]"/>
                    <img src={clang} className="h-[32px] w-[32px]  lg:h-[40px] lg:w-[40px]" alt='c'/>
                    <Cpp className="h-[32px] w-[32px] lg:h-[40px] lg:w-[40px]"/>
                    <JavaScript className="h-[32px] w-[32px] lg:h-[40px] lg:w-[40px]"/>
                    <Sql className="h-[32px] w-[32px]  lg:h-[44px] lg:w-[44px]"/>
                  </div>
                  <div className="flex space-x-3 lg:space-x-8">
                    <TW className="h-[32px] w-[32px] lg:h-[40px] lg:w-[40px]"/>
                    <Reactlogo className="h-[32px] w-[32px] lg:h-[40px] lg:w-[40px]"/>
                    <Pandas className="h-[32px] w-[32px] lg:h-[40px] lg:w-[40px]"/>
                    <OpenCV className="h-[32px] w-[32px] lg:h-[40px] lg:w-[40px]"/>
                    <Numpy className="h-[32px] w-[32px] lg:h-[40px] lg:w-[40px]"/>
                  </div>
                  <div className="flex space-x-3 lg:space-x-8">
                    <Tableau className="h-[32px] w-[32px] lg:h-[40px] lg:w-[40px]"/>
                    <PowerBI className="h-[32px] w-[32px] lg:h-[40px] lg:w-[40px]"/>
                    <Excel className="h-[32px] w-[32px] lg:h-[40px] lg:w-[40px]"/>
                    <Figma className="h-[32px] w-[32px] lg:h-[40px] lg:w-[40px]"/>
                    <Git className="h-[32px] w-[32px] lg:h-[40px] lg:w-[40px]"/>
                  </div>
                </div>
              </div>
            </div>

            <div className=" bg-blue-400 backdrop-blur-md bg-opacity-20  rounded-xl  text-black flex flex-col items-start justify-center  relative p-[2px] ">
              <div className="h-fit w-[250px] lg:w-[380px] bg-[#192957] rounded-xl p-6 ">
                <h1 className="mb-1 lg:mb-4 text-[16px] lg:text-[20px] font-semibold tracking-wider text-white font-heading">Beyond Code I Love</h1>
                <div className="flex gap-4 font-medium md:leading-8 lg:leading-10 flex-wrap">
                    <div className="bg-white rounded-md px-3 py-2 leading-none text-[14px] lg:text-[16px] flex items-center justify-center space-x-2">
                      <span>Art</span>
                      <Art className="h-[20px] w-[24px]"/>
                    </div>
                    <div className="bg-white rounded-md px-3 py-2 leading-none text-[14px] lg:text-[16px] flex items-center justify-center space-x-2">
                      <span>Reading</span>
                      <img src={books} className="h-[20px] lg:w-[24px]" alt='books'/>                    
                      </div>
                    <div className="bg-white rounded-md px-3 py-2 leading-none text-[14px] lg:text-[16px] flex items-center justify-center space-x-2">
                      <span>Guitar</span>
                      <img src={guitar} className="h-[20px] lg:w-[24px]" alt='guitar'/>                     
                    </div>
                    <div className="bg-white rounded-md px-3 py-2 leading-none text-[14px] lg:text-[16px] flex items-center justify-center space-x-2">
                      <span>Writing</span>
                      <img src={writing} className="h-[20px] lg:w-[24px]" alt='writing'/>                     
                    </div>
                    <div className="bg-white rounded-md px-3 py-2 leading-none text-[14px] lg:text-[16px] flex items-center justify-center space-x-2">
                      <span>Watching movies</span>
                      <img src={movies} className="h-[20px] lg:w-[24px]" alt='movies'/>                     
                    </div>
                </div>
              </div>
              
            </div>
          </motion.div>


          <motion.div variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'}className="about-details flex flex-col items-center md:items-end justify-center  text-right gap-6 lg:gap-16 relative order-1 md:order-2">
            <div className="absolute z-0 -top-10 lg:-top-16 right-[-48px] lg:right-[-30px] xl:right-[-120px] h-24 lg:h-auto w-44 xl:w-auto invisible md:visible">
          </div>
            <div className="flex flex-col justify-center items-center md:items-end gap-4">
            <h1 className="text-[24px] md:text-[36px] lg:text-[50px] xl:text-[60px] z-10 bg-gradient-to-r from-[#C0C0C0] via-[#FFFFFF] to-[#C0C0C0] bg-clip-text text-transparent leading-none font-heading ">
              About Me
            </h1>
            <span className="h-[2px] md:h-1 w-[12rem] md:w-[15rem] bg-gradient-to-r from-purple_light via-purple-400 to-pink-600 rounded-md"></span>
            </div>
            <p className="text-[14px] lg:text-base xl:text-[18px] text-center md:text-justify z-10 lg:leading-normal text-blue-100/60 lg:tracking-wide leading-7">
              Hey there! I'm Aayushi, a passionate learner exploring the realms of <span className="text-blue-300 font-heading">ML, Data Science</span>,
              <span className="text-blue-300 font-heading"> Web Development</span> and <span className="text-blue-300 font-heading">UI/UX Design.</span> <br /><br />
              Growing up, I developed a deep love for stories, whether found in books, movies, or shared through people's experiences. <br /><br />
              As an artist at heart and a tech enthusiast, I find inspiration in these stories, infusing them into my creative process to craft fascinating designs and innovative solutions.
            </p>
          </motion.div>
        </div>
      </div>
      </>
    );
  }
  
  export default About;