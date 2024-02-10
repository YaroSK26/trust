//!theme switcher, checking if user is signed in

"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@clerk/nextjs";
import "../css/layout.css";

const useFunctions = () => {
  //!theme
const { isSignedIn,user } = useAuth();
const [theme, setTheme] = useState("dark"); 

const themeKey = user ? `theme_${user.id}` : "theme";

useEffect(() => {
  if (typeof window !== "undefined") {
    const storedTheme = localStorage.getItem(themeKey);
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }
}, [user]);

const toggleTheme = () => {
  setTheme((prevTheme) => {
    const newTheme = prevTheme === "dark" ? "light" : "dark";
    if (typeof window !== "undefined") {
      localStorage.setItem(themeKey, newTheme);
    }
    return newTheme;
  });
};

useEffect(() => {
  document.body.className = theme;
  document.documentElement.className = theme;
}, [theme]);

 
  //!redirect
  const router = useRouter();

  useEffect(() => {
    if (!isSignedIn) {
      router.push("/");
    }
  }, [isSignedIn, router]);



  //!resizer
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
    windowWidth,
    isSignedIn,
  };
};

export default useFunctions;

