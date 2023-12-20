"use client";

import Navbar from "../components/NavBar";
import useFunctions from "../components/Functions";
import { useEffect, useState } from "react";
import TestAPI from  "../components/TestAPI";

const Dashboard = () => {
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
        <div>
          <div className="text-[var(--color2)] flex justify-center ">
            <TestAPI></TestAPI>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
