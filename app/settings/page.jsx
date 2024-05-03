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
  const [isLoading, setIsLoading] = useState(false);

  //!verses

  const [savedVerses, setSavedVerses] = useState([]);
  const clerk = useClerk();
  const userId = clerk.user ? clerk.user.id : null;

  useEffect(() => {
    const fetchSavedVerses = async () => {
      setIsLoading(true);
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
      setIsLoading(false);
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





//!badges

 const [comm, setComm] = useState([]);

 useEffect(() => {
   const fetchComm = async () => {
     try {
       const response = await axios.get("api/community");
       setComm(response.data.Comm);
     } catch (error) {
       console.error("Failed to fetch community", error);
       setComm([]);
     }
   };

   if (userId) {
     fetchComm();
   }
 }, [userId]);

 const badge1 = comm.some((item) => item.userId === userId);


const [badge2, setBadge2] = useState(false);

useEffect(() => {
  const fetchPlans = async () => {
    if (userId) {
      try {
         const response = await axios.get("/api/plans", {
           params: { userId: userId }, 
         });
        const contacts = response.data.Plans || [];
        if(contacts.length >= 18){
          setBadge2(true)
        }
      } catch (error) {
        console.error("Failed to fetch contacts", error);
        setBadge2(false);
      }
    }
  };

  fetchPlans();
}, [userId]);



 const [contact, setContact] = useState([]);

 useEffect(() => {
   const fetchContact = async () => {
     try {
       const response = await axios.get("api/contact");
       setContact(response.data.Contacts);
     } catch (error) {
       console.error("Failed to fetch community", error);
       setContact([]);
     }
   };

   if (userId) {
     fetchContact();
   }
 }, [userId]);

 const badge3 = contact.some((item) => item.userId === userId);


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
          <div id="google_translate_element" className="w-28  sm:w-72"></div>
        </div>

        <div>
          <h1 className="text-center text-2xl mt-10 mb-5">Badges</h1>
          <div className="flex sm:flex-row flex-col  justify-center items-center badge-div">
            <div>
              <img
                src="./badge-community.png"
                alt="badge for sending a message in community"
                // Prispôsobenie triedy na základe toho, či užívateľ poslal správu
                className={badge1 ? "" : "grayscale"}
              />
              <p className="text-center  h-5 w-52">
                Send a message <br /> in community
              </p>
            </div>
            <div>
              <img
                src="./badge-plan.png"
                alt="badge for completing all plans"
                className={badge2 ? "" : "grayscale"}
              />
              <p className="text-center h-5 w-52 ">Finish all plans</p>
            </div>
            <div>
              <img
                src="./badge-contact.png"
                alt="badge for sending a feedback in community"
                className={badge3 ? "" : "grayscale"}
              />
              <p className="text-center  h-5 w-52">
                Send a feedback <br /> in contact
              </p>
            </div>
          </div>
        </div>
        <div>
          <h1 className="text-center text-2xl mt-16 mb-5">Saved verses</h1>
          <div className="flex justify-center items-center  flex-col">
            {isLoading ? (
              <p>Loading...</p>
            ) : savedVerses.length ? (
              <ul className="text-center  lg:w-[30rem] w-[19rem] ">
                {savedVerses.map((verse) => (
                  <li className="relative" key={verse._id}>
                    <p>
                      {verse.date} <br />
                    </p>
                    {verse.text} - {verse.author} <br />
                    <div className="flex justify-center items-center gap-5 py-5">
                      <Copy
                        onClick={() => handleCopyText(verse.text)}
                        size={32}
                        className="cursor-pointer  text-[var(--color2)]"
                      />
                      <BookmarkCheck
                        size={32}
                        onClick={(e) => handleBookDelete(verse._id)}
                        className="cursor-pointer text-[var(--color2)]"
                      />
                    </div>
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




