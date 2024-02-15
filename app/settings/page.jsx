"use client"
import React from 'react'
import useFunctions from '../../components/Functions';
import Navbar from '../../components/NavBar';
import Footer from "../../components/Footer";
import { textVariant } from "../../utils/motion";
import { motion } from "framer-motion";
import "../../css/layout.css"


const Settings = () => {
    const { theme, toggleTheme } = useFunctions();
    
  return (
    <div>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <motion.div
        variants={textVariant()}
        initial="hidden"
        animate="show"
        className="pt-20 "
      >
        <h1 className="text-center text-4xl mt-10 underline">Settings</h1>
        <div className="flex justify-center flex-col items-center">
          <h1 className="text-center text-2xl mt-10 mb-5">Theme</h1>
          <label className="switch">
            <input
              type="checkbox"
              onChange={toggleTheme}
              checked={theme === "light"}
            />
            <span className="slider"></span>
          </label>
        </div>

        <div className="flex justify-center items-center flex-col  rounded">
          <h1 className="text-center text-2xl mt-10 mb-5">Language</h1>
          <div
            id="google_translate_element"
            className="w-28 xs:w-36 sm:w-72"
          ></div>
        </div>

        <div>
          <h1 className="text-center text-2xl mt-10 mb-5">Badges</h1>
          <div className="flex flex-row justify-center items-center badge-div">
            {/* <img src="./badge-plan.png" alt="" />
            <img  src="./badge-community.png" alt="" />
            <img  src="./badge-contact.png" alt="" /> */}
            <p>Coming soon..</p>
          </div>
        </div>
        <div>
          <h1 className="text-center text-2xl mt-10 mb-5">Saved verses</h1>
          <p className='text-center'>Coming soon..</p>
        </div>

        <Footer></Footer>
      </motion.div>
    </div>
  );
}

export default Settings
