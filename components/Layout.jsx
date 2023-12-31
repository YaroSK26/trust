"use client"

import { useMediaQuery } from "react-responsive";
import Link from "next/link";
import { Instagram, Github } from "lucide-react";
import TypewriterComponent from "typewriter-effect";
import useFunctions from "./Functions";
import "../css/layout.css";

const Layout = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 600 });
  const iconSize = isSmallScreen ? 44 : 64;

  const { theme, toggleTheme,isSignedIn} =useFunctions();


  return (
    <div className={theme} style={{ width: "100vw" }}>
      <nav className="border-b-2 border-[var(--color2)] bg-[var(--color1)] gap-2  flex justify-between items-center h-20 px-4 transition-all">
        <Link href={"/"}>
          <img
            className="md:w-64 md:h-16 sm:w-48 sm:h-12 w-32 h-8"
            src={theme === "dark" ? "logo-white.png" : "logo-black.png"}
            alt="logo of the Trust site"
          />
        </Link>

        <Link href={isSignedIn ? "/" : "/sign-up"}>
          <button className="button">Login</button>
        </Link>
      </nav>

      <section className="mt-[70px] relative mb-2">
        <div className="text-[var(--color2)] flex justify-center items-center flex-col px-1">
          <h1 className="text-center md:text-7xl sm:text-5xl text-3xl mb-2">
            Build trust with
            <TypewriterComponent
              options={{
                strings: ["God.", "Yourself.", "Family.", "Friends."],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="md:text-xl sm:text-md text-sm italic mb-8">
            You are on the right path
          </p>
          <Link href={isSignedIn ? "/" : "/sign-up"}>
            <button className="button">Login</button>
          </Link>
        </div>

        <div className="mt-52 flex justify-center items-center gap-3 text-[var(--color2)]">
          <Link
            target="_blank"
            href={"https://www.instagram.com/jaroslav_barabas/"}
          >
            <Instagram style={{ width: iconSize, height: iconSize }} />
          </Link>
          <span>|</span>
          <Link target="_blank" href={"https://github.com/YaroSK26"}>
            <Github style={{ width: iconSize, height: iconSize }} />
          </Link>
          <div className="left-2 bottom-2 mr-2 absolute">
            <label className="switch">
              <input
                type="checkbox"
                onChange={toggleTheme}
                checked={theme === "light"}
              />
              <span className="slider"></span>
            </label>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Layout;
