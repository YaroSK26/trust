"use client";

import Navbar from "../../components/NavBar";
import useFunctions from "../../components/Functions";
import TestAPI from "../../components/TestAPI";
import { Tilt } from "react-tilt";
import ModelCanvas from "../../components/Model";
import Footer from "../../components/Footer";
import { fadeIn, textVariant } from "../../utils/motion";
import { motion } from "framer-motion";
import Link from "next/link";
import { projects } from "../../components/projects";
import Quiz from "../../components/Quiz"
import useLenis from "../../components/lenis";

const Dashboard = () => {
  const { theme, toggleTheme } = useFunctions();
  useLenis();

  return (
    <div className={theme}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <motion.div
        variants={textVariant()}
        initial="hidden"
        animate="show"
        className="pt-20 "
      >
        <div className="text-[var(--color2)] flex justify-center ">
          <TestAPI></TestAPI>
        </div>
        <h1 className="text-center text-[40px] mt-10 underline">Bible Plans</h1>
        <div className=" flex justify-center items-center flex-wrap gap-10 mt-10 p-4 ">
          {projects.slice(0, 3).map((project, index) => (
            <Tilt
              key={project.name}
              option={{ max: 45, scale: 1, speed: 450 }}
              className="bg-[var(--color3)] p-5 rounded-2xl sm:w-[360px] h-[510px] w-full border-l-2 border-r-2 border-[var(--color2)]"
            >
              <motion.div
                variants={fadeIn("right", "spring", index * 0.5, 0.75)}
              >
                <div className="relative w-full h-[230px] ">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover rounded-2xl scale-105"
                  />
                  <div className="absolute inset-0 flex justify-end m-3 card-img_hover"></div>
                </div>

                <div className="mt-5">
                  <h3 className="color-[var(--color1)] font-bold text-[24px]">
                    {project.name}
                  </h3>
                  <p className="mt-2 color-[var(--color1)] text-[14px]">
                    {project.description}
                  </p>
                </div>
                <div className="flex flex-row my-2">
                  {project.tags.map((tag) => (
                    <p key={tag.name} className={`text-[14px] mr-2`}>
                      #{tag.name}
                    </p>
                  ))}
                </div>
                <center>
                  <div className="mt-4 flex  flex-wrap gap-2  flex-col w-[150px] ">
                    {project.source_website.map((w) => (
                      <Link
                        href={`/${project.source_website}`}
                        key={project.source_website}
                        className="text-[14px] underline"
                      >
                        <button className="button  ">Start</button>
                      </Link>
                    ))}
                  </div>
                </center>
              </motion.div>
            </Tilt>
          ))}
        </div>

        <Link href={"/plans"}>
          <p className="text-center text-3xl mt-8 underline animate-bounce">
            See more...
          </p>
        </Link>

        <Quiz></Quiz>

        <h1 className="text-center mt-12">
          Check out my other christian site!{" "}
          <a className="underline" href="https://bible-story.vercel.app/" target="_blank">Bible Story</a>
        </h1>

        <div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300">
            <path
              fill="#000"
              fillOpacity="1"
              d="M0,288L24,261.3C48,235,96,181,144,144C192,107,240,85,288,96C336,107,384,149,432,160C480,171,528,149,576,160C624,171,672,213,720,224C768,235,816,213,864,181.3C912,149,960,107,1008,80C1056,53,1104,43,1152,80C1200,117,1248,203,1296,224C1344,245,1392,203,1416,181.3L1440,160L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
            ></path>
          </svg>
          <div className="bg-black">
            <ModelCanvas />
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#00"
              fillOpacity="1"
              d="M0,128L34.3,144C68.6,160,137,192,206,202.7C274.3,213,343,203,411,186.7C480,171,549,149,617,170.7C685.7,192,754,256,823,282.7C891.4,309,960,299,1029,256C1097.1,213,1166,139,1234,122.7C1302.9,107,1371,149,1406,170.7L1440,192L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
            ></path>
          </svg>
        </div>
        <Footer></Footer>
      </motion.div>
    </div>
  );
};

export default Dashboard;
