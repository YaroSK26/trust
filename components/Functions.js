//!theme switcher, checking if user is signed in

"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@clerk/nextjs";
import "../css/layout.css";


const useFunctions = () => {
  
  //theme
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };
  //sheet open / close
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const openSheet = () => setIsSheetOpen(true);
  const closeSheet = () => setIsSheetOpen(false);
  
  useEffect(() => {
    document.body.className = theme;
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);
  //redirect
  const router = useRouter();
  const { isSignedIn } = useAuth();
  
  useEffect(() => {
    if (!isSignedIn) {
      router.push("/");
    }
  }, [isSignedIn, router]);

  //resizer
  const [windowWidth, setWindowWidth] = useState(null);

  useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", updateWindowWidth);
    updateWindowWidth();

    return () => {
      window.removeEventListener("resize", updateWindowWidth);
    };
  }, []);

  return {
    theme,
    toggleTheme,
    isSheetOpen,
    openSheet,
    closeSheet,
    windowWidth,
  };
};

export default useFunctions;
