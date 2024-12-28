import {TypeAnimation} from 'react-type-animation';
import {motion} from 'framer-motion';
import {fadeIn} from '../variants';
import {AiOutlineRight} from 'react-icons/ai';
import Aayushi from '../assets/Aayushi-full.jpg';

const Home = () => {
  const resumeURL = 'https://drive.google.com/file/d/15-9aEtt0JkMqWo-9TNPqBgV5UzJbvWXf/view?usp=sharing';
  const githubURL = 'https://github.com/aayushi-2003';
    return (
      <section id="home" className="py-12 flex md:py-16 lg:py-0 items-center relative md:h-[85vh] ">
        <div className="lg:container px-[40px] mx-auto z-20 ">
          <div className="flex flex-col md:flex-row items-center space-y-10 md:space-y-0">
          {/* Name and headings */}
          <div className="space-y-6 md:space-y-8 flex-1 text-center md:text-left flex flex-col items-center md:items-start">
            <motion.div variants={fadeIn('up', 0.4)} initial="hidden" whileInView={'show'} viewport={{once:false, amount: 0.7}} className="text-[20px] md:text-[18px] lg:text-[26px] xl:text-[26px] uppercase leading-[1] font-semibold ">
              <span className="">I am a </span>
              <TypeAnimation sequence={[
                'CSE Student', 2000,
                'UI/UX Designer', 2000,
                'ML Enthusiast', 2000,
                'Frontend Developer', 2000,
              ]} speed={50} className="bg-gradient-to-r from-purple_light via-purple-400 to-pink-600 bg-clip-text text-transparent leading-none" wrapper="span" repeat={Infinity}/>
            </motion.div>
            {/* Name */}
            <motion.h1 variants={fadeIn('up', 0.3)} initial="hidden" whileInView={'show'} viewport={{once:false, amount: 0.7}} className="text-[30px] md:text-[36px] font-semibold leading-[0.8] lg:text-[44px] xl:text-[80px] font-heading">
              Aayushi <span>Sinha</span>
            </motion.h1>


              <motion.p variants={fadeIn('up', 0.5)} initial="hidden" whileInView={'show'} viewport={{once:false, amount: 0.7}} className="mb-8  mx-auto lg:mx-0 text-[14px] xl:text-[16px] md:leading-6 lg:leading-7 text-blue-100/60 tracking-wide">
              I’m a 4th-year Computer Science student at IIIT Dharwad, passionate about transforming ideas into impactful designs and projects. A quick learner, always ready to explore and grow.
              </motion.p>

              {/* Buttons/links */}
              <motion.div variants={fadeIn('up', 0.6)} initial="hidden" whileInView={'show'} viewport={{once:false, amount: 0.7}} className="flex max-w-max gap-x-3 md:gap-x-6 items-center mb-12 lg:mx-0 flex-row gap-y-5 ">
              <a href={githubURL}><button className="btn btn-lg cursor-pointer">GitHub Profile</button></a>
                <a href={resumeURL} target="_blank" rel="noreferrer" className="flex items-center hover:border-[2px] btn-lg hover:border-purple_light hover:rounded-full  ">
                  View My Resume 
                  <span className="md:ml-2 mb-1"><AiOutlineRight/></span>
                </a>
              </motion.div>

          </div>

          {/* image/svg */}
          <motion.div variants={fadeIn('down', 0.5)} initial="hidden" whileInView={'show'} className="flex flex-1 max-w-[220px]  lg:max-w-[402px] relative h-[480px] justify-end items-center group "> 
            <div className="h-fit relative z-20">
              <div className='bg-blue-400 backdrop-blur-md bg-opacity-20  rounded-xl m-[16px] bg-gradient-to-r from-purple-500/90 via-blue-400/90 to-blue-500/80 h-[220px] lg:h-[300px] w-full absolute z-[-10] group-hover:m-0 transition-all ease-in-out duration-150'></div>
              <img src={Aayushi} className="h-[220px] lg:h-[300px] w-fit rounded-xl z-10" alt='Aayushi'/>
            </div>
          </motion.div>
          </div>
        </div>

      </section>
    );
  }
  
  export default Home;