"use client"

import Navbar from "../../components/NavBar";
import useFunctions from "../../components/Functions";
import Footer from "../../components/Footer";


const Community = () => {
  const { theme, toggleTheme, isSheetOpen, openSheet, closeSheet } =
  useFunctions();

  return (
    <div>
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        isSheetOpen={isSheetOpen}
        openSheet={openSheet}
        closeSheet={closeSheet}
      />

      {!isSheetOpen && (
        <div className="pt-20">
          <div className="text-[var(--color2)]">
            <p>community</p>
          </div>
          <Footer></Footer>
        </div>
      )}
    </div>
  );
}

export default Community;
