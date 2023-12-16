"use client";

import Navbar from "../../components/NavBar";
import useFunctions from "../../components/Functions";

const Contact = () => {
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
        <div>
          <div className="text-[var(--color2)]">
            <p>Contact</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
