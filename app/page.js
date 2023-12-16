"use client";

import Navbar from "../components/NavBar";
import useFunctions from "../components/Functions";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const { theme, toggleTheme, isSheetOpen, openSheet, closeSheet } =
    useFunctions();

 const [wisdom, setWisdom] = useState(null);

 useEffect(() => {
   const fetchWisdom = async () => {
     try {
       const response = await fetch("/api/"); 
       if (!response.ok) {
         throw new Error("Network response was not ok");
       }
       const data = await response.json();
       setWisdom(data); 
       console.log(data);
     } catch (error) {
       console.error("Failed to fetch wisdom:", error);
     }
   };

   fetchWisdom();
 }, []);

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
          <div className="text-[var(--color2)]">
            <p>home</p>

           {/* <div>{wisdom.quote}</div>  */}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
