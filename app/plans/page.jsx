"use client"
import Navbar from "../../components/NavBar";
import useFunctions from "../../components/Functions";
import { Tilt } from "react-tilt";
import Footer from "../../components/Footer";
import { fadeIn, textVariant } from "../../utils/motion";
import { motion } from "framer-motion";
import { projects } from "../../components/projects";
import { useState, useEffect } from "react";
import Link from "next/link";


const Plans = () => {
    const { theme, toggleTheme } =
    useFunctions();

   const [nameFilter, setNameFilter] = useState("");
   const [tagFilter, setTagFilter] = useState("");
   const [uniqueTags, setUniqueTags] = useState([]);

   // Extract unique tags from projects
   useEffect(() => {
     const tags = new Set();
     projects.forEach((project) => {
       project.tags.forEach((tag) => {
         tags.add(tag.name);
       });
     });
     setUniqueTags(Array.from(tags));
   }, []);

   // Filter projects by name and tag
   const filteredProjects = projects.filter((project) => {
     return (
       (nameFilter
         ? project.name.toUpperCase().includes(nameFilter.toUpperCase())
         : true) &&
       (tagFilter ? project.tags.some((tag) => tag.name === tagFilter) : true)
     );
   });

    return (
      <div className={theme}>
        <Navbar
          theme={theme}
          toggleTheme={toggleTheme}
        />

          <motion.div
            variants={textVariant()}
            initial="hidden"
            animate="show"
            className="pt-20"
          >
            <h1 className="text-center text-4xl my-10 underline">
              Bible Plans 
            </h1>
            <div className="text-[var(--color2)] flex sm:flex-row items-center flex-col justify-center gap-5">
              <input
                type="text"
                autocomplete="off"
                placeholder="Filter by Name"
                value={nameFilter}
                onChange={(e) => setNameFilter(e.target.value)}
                className="bg-transparent border-t-transparent border-x-transparent outline-none border-b-[var(--color2)] border p-1 w-52"
              />
              <select
                value={tagFilter}
                onChange={(e) => setTagFilter(e.target.value)}
                className="bg-[var(--color1)] border-t-transparent border-x-transparent cursor-pointer outline-none border-b-[var(--color2)] border p-1 w-52"
              >
                <option value="">Filter by Tag</option>
                {uniqueTags.map((tag) => (
                  <option key={tag} value={tag}>
                    {tag}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex justify-center items-center flex-wrap gap-10 mt-10 p-4">
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project, index) => (
                  <Tilt
                    key={project.name}
                    options={{ max: 45, scale: 1, speed: 450 }}
                    className="bg-[var(--color3)] p-5 rounded-2xl sm:w-[360px] h-[520px] w-full border-l-2 border-r-2 border-[var(--color2)]"
                  >
                    <motion.div
                      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
                    >
                      <div className="relative w-full h-[230px]">
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
                        <div className="mt-4 flex flex-wrap gap-2 flex-col w-[150px]">
                          {project.source_website.map((w) => (
                            <Link
                              href={`/${w}`}
                              key={w}
                              className="text-[14px] underline"
                            >
                              <button className="button">Start</button>
                            </Link>
                          ))}
                        </div>
                      </center>
                    </motion.div>
                  </Tilt>
                ))
              ) : (
                <div className=" p-5 sm:w-[360px] h-[510px] w-full flex items-center justify-center">
                  <p className="text-[var(--color2)] font-bold text-[24px]">
                    No plans found.
                  </p>
                </div>
              )}
            </div>
            <Footer />
          </motion.div>
       
      </div>
    );
};

export default Plans;
