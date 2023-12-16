//!theme switcher, checking if user is signed in

"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@clerk/nextjs";
import "../css/layout.css";


const useFunctions = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const { isSignedIn } = useAuth();
  const router = useRouter();

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  const openSheet = () => setIsSheetOpen(true);
  const closeSheet = () => setIsSheetOpen(false);

  useEffect(() => {
    document.body.className = theme;
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    if (!isSignedIn) {
      router.push("/");
    }
  }, [isSignedIn, router]);

  return { theme, toggleTheme, isSheetOpen, openSheet, closeSheet,isSignedIn };
};

export default useFunctions;
