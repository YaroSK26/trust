"use client";

import { useMediaQuery } from "react-responsive";
import Link from "next/link";
import { Instagram, Github } from "lucide-react";
import TypewriterComponent from "typewriter-effect";
import useFunctions from "../components/Functions";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ClerkLoading,
  ClerkLoaded,
  SignedOut,
  SignedIn,
  SignUpButton,
} from "@clerk/clerk-react";
import { Loader } from "lucide-react";
import "../css/layout.css";

const Layout = () => {
  const isSmallScreen = useMediaQuery({ maxWidth: 600 });
  const iconSize = isSmallScreen ? 44 : 64;

  const { theme, toggleTheme, isSignedIn } = useFunctions();
  const router = useRouter();

  useEffect(() => {
    if (isSignedIn) {
      router.push("/home");
    }
  }, [isSignedIn, router]);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
     const timer = setTimeout(() => {
       setLoading(false);
     }, 3000); 

     return () => clearTimeout(timer); 
   }, []);

   if (loading) {
     return (
      <div class="loader-container">
		<svg className="svg" viewBox="0 0 400 160">
			<text x="50%" y="50%" dy=".32rem" text-anchor="middle" class="text-body">
				Trust
			</text>
			<text x="50%" y="50%" dx="1.5em" dy=".32rem" text-anchor="middle" class="dot">
				.
			</text>
		</svg>
	</div>
     ); 
   }


  return (
    <div className={`${theme} notranslate`}>
      <nav className="border-b-2 border-[var(--color2)] bg-[var(--color1)] gap-2  flex justify-between items-center h-20 px-4 transition-all relative">
        <Link href={"/"}>
          <img
            className="md:w-64 md:h-16 sm:w-48 sm:h-12 w-32 h-8"
            src={theme === "dark" ? "logo-white.png" : "logo-black.png"}
            alt="logo of the Trust site"
          />
        </Link>
        <div className="right-44 sm:block hidden absolute">
          <label className="switch">
            <input
              type="checkbox"
              onChange={toggleTheme}
              checked={theme === "light"}
            />
            <span className="slider"></span>
          </label>
        </div>
        <ClerkLoading>
          <Loader></Loader>
        </ClerkLoading>
        <ClerkLoaded>
          <SignedOut>
            <SignUpButton
              mode="modal"
              afterSignInUrl="/home"
              afterSignUpUrl="/home"
            >
              <button className="button">Login</button>
            </SignUpButton>
          </SignedOut>
          <SignedIn>
            <Link href="/home">
              <button className="button">Home</button>
            </Link>
          </SignedIn>
        </ClerkLoaded>
      </nav>  

      <section className="mt-[70px]  mb-2">
        <div className="text-[var(--color2)] flex justify-center items-center flex-col px-1">
          <h1 className="text-center md:text-7xl sm:text-5xl text-4xl mb-2">
            Build trust with
            <TypewriterComponent
              options={{
                strings: ["God.", "Yourself.", "Family.", "Friends."],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <p className="md:text-xl sm:text-lg text-md italic mb-8">
            You are on the right path
          </p>
          <div className="flex justify-center flex-col items-center gap-5">
            <ClerkLoading>
              <Loader></Loader>
            </ClerkLoading>
            <ClerkLoaded>
              <SignedOut>
                <SignUpButton
                  mode="modal"
                  afterSignInUrl="/home"
                  afterSignUpUrl="/home"
                >
                  <button className="button">Login</button>
                </SignUpButton>
              </SignedOut>
              <SignedIn>
                <Link href="/home">
                  <button className="button">Home</button>
                </Link>
              </SignedIn>
            </ClerkLoaded>
            <div className=" sm:hidden block">
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
        </div>

        <div className="text-[var(--color2)]">
          <div className=" bottom-5 absolute inset-x-1/2  flex justify-center items-center gap-3">
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
          </div>
        </div>
      </section>
    </div>
  );
};

export default Layout;
