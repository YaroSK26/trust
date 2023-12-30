//!theme switcher, checking if user is signed in

"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@clerk/nextjs";
import "../css/layout.css";

const useFunctions = () => {
  //theme
  // const [theme, setTheme] = useState("dark"); // default to "dark"
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  useEffect(() => {
    // Access localStorage only on client-side
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    }
  }, []);

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


/*const useFunctions = () => {
//theme
  const [theme, setTheme] = useState(
    typeof window !== "undefined"
      ? localStorage.getItem("theme") || "dark"
      : "dark"
  );

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(storedTheme);
    } else {
      localStorage.setItem("theme", theme);
    }
  }, []);

  useEffect(() => {
    // Update the class of your body or root element and persist the theme in localStorage
    const applyTheme = (theme) => {
      document.body.className = theme;
      document.documentElement.className = theme;
      localStorage.setItem("theme", theme);
    };

    applyTheme(theme);

    // Cleanup function to remove class when component unmounts or theme changes
    return () => {
      document.body.classList.remove(theme);
      document.documentElement.classList.remove(theme);
    };
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      const newTheme = prevTheme === "dark" ? "light" : "dark";
      // Persist new theme value to localStorage immediately after state update
      localStorage.setItem("theme", newTheme);
      return newTheme;
    });
  };

  //sheet open / close
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const openSheet = () => setIsSheetOpen(true);
  const closeSheet = () => setIsSheetOpen(false);
  

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
*/ 