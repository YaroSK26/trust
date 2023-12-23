"use client"
import useFunctions from "../components/Functions";
import Navbar from "../components/NavBar"

export default function Custom404() {
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
      <h1 className="color-[var(--color2)] text-7xl h-[100vh] w-[100vw] flex justify-center items-center">404 - Page not found.</h1>
    </div>
  );
}
