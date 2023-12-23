"use client";

import Navbar from "../components/NavBar";
import useFunctions from "../components/Functions";
import TestAPI from  "../components/TestAPI";
import { Tilt } from "react-tilt";
import Footer from "../components/Footer"


const Dashboard = () => {
  const projects = [
    {
      name: "LOVE",
      description:
        "Build love not only with yourself, but also with family, enemies and especially god, because a good Christian is to love everyone in his or her life.",
      tags: [
        {
          name: "love",
        },
        {
          name: "kindness",
        },
        {
          name: "friendship",
        },
      ],
      image: "love.webp",
      source_website: ["plans/love"],
    },
    {
      name: "TRUST",
      description:
        "Hope comes from faith in Jesus Christ. Trust with all your heart in the lord of the house, and he himself will make the paths straight for you. ",
      tags: [
        {
          name: "trust",
        },
        {
          name: "hope",
        },
        {
          name: "faith",
        },
      ],
      image: "trust.jpg",
      source_website: ["plans/trust"],
    },
    {
      name: "ANGER",
      description:
        "The lack of peace in your life causes anger. Calm your mind, for the day has had enough of its torment.  Like a sheep, find peace in your shepherd.",
      tags: [
        {
          name: "anger",
        },
        {
          name: "hate",
        },
        {
          name: "peace",
        },
      ],
      image: "anger.webp",
      source_website: ["plans/anger"],
    },
  ];


  const { theme, toggleTheme, isSheetOpen, openSheet, closeSheet } =
    useFunctions();

  return (
    <div className={theme}>
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        isSheetOpen={isSheetOpen}
        openSheet={openSheet}
        closeSheet={closeSheet}
      />

      {!isSheetOpen && (
        <div className="pt-20 ">
          <div className="text-[var(--color2)] flex justify-center ">
            <TestAPI></TestAPI>
          </div>
          <h1 className="text-center text-4xl mt-10 underline">Bible Plans</h1>
          <div className=" flex justify-center items-center flex-wrap gap-10 mt-10 p-4 ">
            {projects.map((project) => (
              <Tilt
                key={project.name}
                option={{ max: 45, scale: 1, speed: 450 }}
                className="bg-[var(--color3)] p-5 rounded-2xl sm:w-[360px] w-full border-l-2 border-r-2 border-[var(--color2)]"
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
                      <a
                        href={`/${project.source_website}`}
                        key={project.source_website}
                        className="text-[14px] underline"
                      >
                        <button className="button  ">Start</button>
                      </a>
                    ))}
                  </div>
                </center>
              </Tilt>
            ))}
          </div>
          <Footer></Footer>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
