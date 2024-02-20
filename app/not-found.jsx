"use client"
import useFunctions from "../components/Functions";
import Navbar from "../components/NavBar"
import Footer from "../components/Footer";
import Link from "next/link";


export default function Custom404() {
   const { theme, toggleTheme } =
     useFunctions();
  return (
    <div className={theme} style={{ width: "100vw" }}>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <h1 className="color-[var(--color2)] lg:text-7xl text-2xl h-[100vh] w-[100vw] gap-5 flex flex-col justify-center items-center">
        404 - Page not found.
        <Link href={"/home"} className="underline lg:text-4xl text-xl">
          Go Home
        </Link>
      </h1>

      <div className="flex justify-center items-center ">
        <span className="absolute  bottom-0">
          <Footer></Footer>
        </span>
      </div>
    </div>
  );
}
