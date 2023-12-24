"use client";

import Navbar from "../components/NavBar";
import useFunctions from "../components/Functions";
import TestAPI from  "../components/TestAPI";
import { Tilt } from "react-tilt";
import ModelCanvas from "../components/Model";
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
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 300">
              <path
                fill="#000"
                fill-opacity="1"
                d="M0,288L24,261.3C48,235,96,181,144,144C192,107,240,85,288,96C336,107,384,149,432,160C480,171,528,149,576,160C624,171,672,213,720,224C768,235,816,213,864,181.3C912,149,960,107,1008,80C1056,53,1104,43,1152,80C1200,117,1248,203,1296,224C1344,245,1392,203,1416,181.3L1440,160L1440,320L1416,320C1392,320,1344,320,1296,320C1248,320,1200,320,1152,320C1104,320,1056,320,1008,320C960,320,912,320,864,320C816,320,768,320,720,320C672,320,624,320,576,320C528,320,480,320,432,320C384,320,336,320,288,320C240,320,192,320,144,320C96,320,48,320,24,320L0,320Z"
              ></path>
            </svg>
            <div className="bg-black">
              <ModelCanvas />
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
              <path
                fill="#000"
                fill-opacity="1"
                d="M0,64L26.7,64C53.3,64,107,64,160,101.3C213.3,139,267,213,320,250.7C373.3,288,427,288,480,266.7C533.3,245,587,203,640,197.3C693.3,192,747,224,800,197.3C853.3,171,907,85,960,69.3C1013.3,53,1067,107,1120,160C1173.3,213,1227,267,1280,250.7C1333.3,235,1387,149,1413,106.7L1440,64L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"
              ></path>
            </svg>
          </div>
          <Footer></Footer>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
