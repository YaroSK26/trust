"use client";

import Navbar from "../../components/NavBar";
import useFunctions from "../../components/Functions";
import Footer from "../../components/Footer";
import { Pencil, Trash } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useClerk } from "@clerk/nextjs";
import axios from "axios";
import { slideIn } from "../../utils/motion";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";


const Prayers = () => {
  const { theme, toggleTheme } =
    useFunctions();


//! POST
   const getCurrentDate = (date) => {
     if (!date) {
       // If date is undefined, return the current date
       date = new Date();
     }

     const year = date.getFullYear();
     const month = String(date.getMonth() + 1).padStart(2, "0");
     const day = String(date.getDate()).padStart(2, "0");
     return `${year}-${month}-${day}`;
   };


  const [text,setText] = useState("")
  const [loading,setLoading] = useState(false)
  const clerk = useClerk();
  const userId = clerk.user ? clerk.user.id : null;
  const [selectedDate, setSelectedDate] = useState(getCurrentDate());

  const handlePrayers = async (e) => {
    try {
      e.preventDefault();

      const data = {
        text: text,
        date: selectedDate,
        userId,
      };
      
      setLoading(true);


      const res = await axios.post("/api/prayers", data);

      const refreshPage = () => {
        setTimeout(() => {
          window.location.reload();
        }, 500);
      };

      if (res) {
        toast.success("Added!");
        refreshPage();
        setLoading(false);
      } else {
        throw new Error("Error");
      }

    } catch (error) {
      console.error(error);
    }
  };

//!GET
  const [prayers, setPrayers] = useState([]);
  const [prayersLoading, setPrayersLoading] = useState(false);

  useEffect(() => {
    const fetchPrayers = async () => {
      try {
        setPrayersLoading(true);
        // Include the userId in the query parameters
        const response = await axios.get(`/api/prayers?userId=${userId}`);
          const matchingEntries = response.data.Prayer.filter(
            (entry) => entry.userId === userId
          );
        setPrayers(matchingEntries);
        setPrayersLoading(false);
      } catch (error) {
        console.error("Failed to fetch prayers", error);
        setPrayers([]);
        setPrayersLoading(false);
      }
    };

    if (userId) {
      fetchPrayers();
    }
  }, [userId]);

   const isSmallScreen = useMediaQuery({ maxWidth: 600 });
   const cols = isSmallScreen ? 25 : 25;
   const rows = isSmallScreen ? 7 : 7;


  return (
    <div>
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <div className="flex min-h-screen  flex-col  pt-20 text-[var(--color2)] justify-between items-center">
        <div className="text-[var(--color2)] text-center mt-10 flex justify-center items-center flex-col gap-3">
          <motion.form
            initial="hidden"
            animate="show"
            variants={slideIn("left", "tween", 0.2, 1)}
            onSubmit={(e) => handlePrayers(e)}
          >
            <h1 className=" text-4xl underline mb-8">Prayers</h1>
            <div className="flex flex-col">
              <label htmlFor="prayer" className="text-center mb-3">
                Tell god something
              </label>
              <textarea
                required
                type="text"
                placeholder="I am happy for .. "
                className="bg-transparent resize-none outline-none    border-[var(--color2)] border-2 rounded-lg p-2 "
                rows={rows}
                cols={cols}
                id="prayer"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
              <button className="button mx-auto mt-3">
                {loading == true ? "Sending.." : "Amen"}
              </button>
            </div>
          </motion.form>
          <motion.div
            initial="hidden"
            animate="show"
            variants={slideIn("right", "tween", 0.2, 1)}
          >
            <h1 className=" text-3xl mt-10 ">History</h1>
            <div className="flex flex-col">
              <label className="text-center mb-3">Your thoughts</label>
              {prayersLoading ? (
                <p className="text-center">Loading...</p>
              ) : prayers.length > 0 ? (
                prayers.map((prayer, index) => (
                  <div key={index} className="mb-7">
                    <p>{prayer.date}</p>
                    <textarea
                      type="text"
                      placeholder="Loading.. "
                      className="bg-transparent resize-none outline-none  border-[var(--color2)] border-2 rounded-lg p-2  "
                      rows={rows}
                      cols={cols}
                      id={`prayer-${index}`}
                      value={prayer.text}
                      readOnly
                    />
                    <div className="flex justify-center items-center gap-3 mt-2">
                      <Link href={"edit-prayers/" + prayer._id}>
                        <Pencil size={36} />
                      </Link>
                      <Link href={"delete-prayers/" + prayer._id}>
                        <Trash size={36} color="red" />
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center">Prayers not found.</p>
              )}
            </div>
          </motion.div>
        </div>

        <Footer></Footer>
      </div>
    </div>
  );
};

export default Prayers;
