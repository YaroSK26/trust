"use client";
import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import useFunctions from "../../components/Functions";
import Navbar from "../../components/NavBar";
import Footer from "../../components/Footer";
import { textVariant } from "../../utils/motion";
import { motion } from "framer-motion";
import "../../css/layout.css";
import { useClerk } from "@clerk/nextjs";
import { BookmarkCheck, Copy } from "lucide-react";
import { toast } from "react-hot-toast";

const Settings = () => {
  const { theme, toggleTheme } = useFunctions();
  const translateScriptLoaded = useRef(false);
  const [loaded,setLoaded] = useState(false)

  //!verses

  const [savedVerses, setSavedVerses] = useState([]);
  const clerk = useClerk();
  const userId = clerk.user ? clerk.user.id : null;

  useEffect(() => {
    const fetchSavedVerses = async () => {
      if (userId) {
        try {
          const response = await axios.get(`/api/saved?userId=${userId}`);
          const savedItem = response.data.Saved2.filter(
            (item) => item.userId === userId
          );
          setSavedVerses(savedItem || []);
        } catch (error) {
          console.error("Error fetching saved verses:", error);
          setSavedVerses([]);
        }
      }
    };

    fetchSavedVerses();
  }, [userId]);

  const handleCopyText = (text) => {
    navigator.clipboard.writeText(text);
    toast.success("Text copied!");
  };
  const handleBookDelete = async (_id) => {
    try {
      const response = await axios.delete(`/api/saved?id=${_id}`);
      if (response.status === 200) {
        toast.success("Bookmark removed!");
        // Odstránime verš z lokálneho stavu po úspešnom zmazaní
        setSavedVerses((prevVerses) =>
          prevVerses.filter((verse) => verse._id !== _id)
        );
      } else {
        throw new Error("Failed to delete verse");
      }
    } catch (error) {
      console.error("Error deleting the verse:", error);
      toast.error("Failed to delete verse.");
    }
  };

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
          <div className="flex justify-center items-center  flex-col">
            {savedVerses.length ? (
              <ul className="text-center relative lg:w-[30rem] w-[20rem] ">
                {savedVerses.map((verse) => (
                  <li key={verse._id}>
                    <p>
                      {verse.date} <br />
                    </p>
                    <Copy
                      onClick={() => handleCopyText(verse.text)}
                      size={20}
                      className="cursor-pointer absolute right-[-20px] text-[var(--color2)]"
                    />
                    <BookmarkCheck
                      onClick={(e) => handleBookDelete(verse._id)}
                      className="cursor-pointer absolute right-[-50px]  text-[var(--color2)]"
                    />
                    {verse.text} - {verse.author} <br />
                    <br />
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-center">You have no saved verses.</p>
            )}
          </div>
        </div>

        <Footer></Footer>
      </motion.div>
    </div>
  );
};

export default Settings;




