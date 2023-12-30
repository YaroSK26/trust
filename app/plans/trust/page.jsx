"use client";

import useFunctions from "../../../components/Functions";
import Navbar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import "../../../css/layout.css";
import { useState,useEffect } from "react";
import { withSwal } from "react-sweetalert2";
import { slideIn, textVariant } from "../../../utils/motion";
import { motion } from "framer-motion";


const Trust = ({swal}) => {
  const { theme, toggleTheme, isSheetOpen, openSheet, closeSheet } =
    useFunctions();

  const [activeDay, setActiveDay] = useState(null);

  const getInitialState = (day) => {
    const saved = localStorage.getItem(`day${day}-T`);
    if (saved) {
      return JSON.parse(saved);
    }
    return { main: false, thought: false, zalmy: false };
  };

  const [day1, setDay1] = useState(getInitialState(1));
  const [day2, setDay2] = useState(getInitialState(2));
  const [day3, setDay3] = useState(getInitialState(3));

  const handleCheckboxChange = (event,dayNumber, dayState, setDayState, type) => {
   event.stopPropagation(); // Prevent click event from bubbling up to the day div

   const updatedDay = {
     ...dayState,
     [type]: !dayState[type],
   };

    if (updatedDay.thought && updatedDay.zalmy) {
      updatedDay.main = true;
    } else {
      updatedDay.main = false;
    }

    setDayState(updatedDay); 
    localStorage.setItem(`day${dayNumber}-T`, JSON.stringify(updatedDay)); 
  };

  useEffect(() => {
    setDay1(getInitialState(1));
    setDay2(getInitialState(2));
    setDay3(getInitialState(3));
  }, []);

  const [planFinished, setPlanFinished] = useState(false);

  useEffect(() => {
    const allChecked = day1.main && day2.main && day3.main;
    setPlanFinished(allChecked);
  }, [day1.main, day2.main, day3.main]); 

  const toggleActiveDay = (day) => {
    if (activeDay === day) {
      setActiveDay(null); // Deactivate if the same day is clicked
    } else {
      setActiveDay(day); // Activate the clicked day
    }
  };
  const handleLabelClick = (event) => {
    event.stopPropagation();
  };  

  const handleDay1Thought = () => {
    swal.fire({
      title: "Thought",
      text: "a",
      confirmButtonColor: "#000",
      confirmButtonText: "Amen",
    });
  };
   const handleDay1Verse = () => {
     swal.fire({
       title: "Verse",
       text: "a",
       confirmButtonColor: "#000",
       confirmButtonText: "Amen",
     });
   };
    const handleDay2Thought = () => {
      swal.fire({
        title: "Thought",
        text: "a",
        confirmButtonColor: "#000",
        confirmButtonText: "Amen",
      });
    };
     const handleDay2Verse = () => {
       swal.fire({
         title: "Verse",
         text: "a",
         confirmButtonColor: "#000",
         confirmButtonText: "Amen",
       });
     };
      const handleDay3Thought = () => {
        swal.fire({
          title: "Thought",
          text: "a",
          confirmButtonColor: "#000",
          confirmButtonText: "Amen",
        });
      };
       const handleDay3Verse = () => {
         swal.fire({
           title: "Verse",
           text: "a",
           confirmButtonColor: "#000",
           confirmButtonText: "Amen",
         });
       };

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
        <div className=" flex flex-col relative pt-20 text-[var(--color2)] justify-center items-center ">
          <motion.h1 initial="hidden"
            animate="show" variants={textVariant()} className="text-4xl  mt-10">
            Trust
          </motion.h1>

          <motion.div
            variants={slideIn("left", "tween", 0.2, 1)}
            initial="hidden"
            animate="show"
            className="flex justify-center items-center  gap-10 mt-10 pb-[20px] lg:flex-row flex-col"
          >
            <div
              onClick={() => toggleActiveDay("day1")}
              className=" cursor-pointer relative w-60 h-60  rounded-lg border-2  border-[var(--color2)] bg-[var(--color1)] flex flex-col justify-center items-center"
            >
              <h1 className="text-4xl">1</h1>
              <h2 className="text-3xl">DAY</h2>
              <label className="container absolute top-1 left-1 text-2xl">
                <input type="checkbox" checked={day1.main} readOnly />
                <div className="checkmark"></div>
              </label>
              {activeDay === "day1" && (
                <div className="flex flex-col gap-2 mt-2  ">
                  <div className="flex justify-center items-center gap-2 ">
                    <h1
                      onClick={() => handleDay1Thought()}
                      className="cursor-pointer"
                    >
                      Thought
                    </h1>
                    <label
                      className="container cursor-pointer flex justify-end"
                      onClick={handleLabelClick}
                    >
                      <input
                        type="checkbox"
                        checked={day1.thought}
                        onChange={(event) =>
                          handleCheckboxChange(
                            event,
                            1,
                            day1,
                            setDay1,
                            "thought"
                          )
                        }
                      />
                      <div className="checkmark"></div>
                    </label>
                  </div>
                  <div className="flex justify-center items-center gap-2  ">
                    <h1
                      onClick={() => handleDay1Verse()}
                      className="cursor-pointer"
                    >
                      Zalmy&nbsp;15:30
                    </h1>
                    <label
                      className="container cursor-pointer"
                      onClick={handleLabelClick}
                    >
                      <input
                        type="checkbox"
                        checked={day1.zalmy}
                        onChange={(event) =>
                          handleCheckboxChange(event, 1, day1, setDay1, "zalmy")
                        }
                      />

                      <div className="checkmark"></div>
                    </label>
                  </div>
                </div>
              )}
            </div>
            <div
              onClick={() => toggleActiveDay("day2")}
              className="cursor-pointer  relative w-60 h-60  rounded-lg border-2  border-[var(--color2)] bg-[var(--color1)] flex flex-col justify-center items-center"
            >
              <h1 className="text-4xl">2</h1>
              <h2 className="text-3xl">DAY</h2>
              <label className="container absolute top-1 left-1  text-2xl">
                <input type="checkbox" checked={day2.main} readOnly />
                <div className="checkmark"></div>
              </label>
              {activeDay === "day2" && (
                <div className="flex flex-col gap-2 mt-2  ">
                  <div className="flex justify-center items-center gap-2 ">
                    <h1
                      className="cursor-pointer"
                      onClick={() => handleDay2Thought()}
                    >
                      Thought
                    </h1>
                    <label
                      className="container cursor-pointer flex justify-end"
                      onClick={handleLabelClick}
                    >
                      <input
                        type="checkbox"
                        checked={day2.thought}
                        onChange={(event) =>
                          handleCheckboxChange(
                            event,
                            2,
                            day2,
                            setDay2,
                            "thought"
                          )
                        }
                      />
                      <div className="checkmark"></div>
                    </label>
                  </div>
                  <div className="flex justify-center items-center gap-2  ">
                    <h1
                      className="cursor-pointer"
                      onClick={() => handleDay2Verse()}
                    >
                      Zalmy&nbsp;15:30
                    </h1>
                    <label
                      className="container cursor-pointer "
                      onClick={handleLabelClick}
                    >
                      <input
                        type="checkbox"
                        checked={day2.zalmy}
                        onChange={(event) =>
                          handleCheckboxChange(event, 2, day2, setDay2, "zalmy")
                        }
                      />
                      <div className="checkmark"></div>
                    </label>
                  </div>
                </div>
              )}
            </div>
            <div
              onClick={() => toggleActiveDay("day3")}
              className="cursor-pointer relative w-60 h-60  rounded-lg border-2  border-[var(--color2)] bg-[var(--color1)] flex flex-col justify-center items-center"
            >
              <h1 className="text-4xl">3</h1>
              <h2 className="text-3xl">DAY</h2>
              <label className="container absolute top-1 left-1 text-2xl">
                <input type="checkbox" checked={day3.main} readOnly />
                <div className="checkmark"></div>
              </label>
              {activeDay === "day3" && (
                <div className="flex flex-col gap-2 mt-2  ">
                  <div className="flex justify-center items-center gap-2 ">
                    <h1
                      className="cursor-pointer"
                      onClick={() => handleDay3Thought()}
                    >
                      Thought
                    </h1>
                    <label
                      className="container cursor-pointer flex justify-end "
                      onClick={handleLabelClick}
                    >
                      <input
                        type="checkbox"
                        checked={day3.thought}
                        onChange={(event) =>
                          handleCheckboxChange(
                            event,
                            3,
                            day3,
                            setDay3,
                            "thought"
                          )
                        }
                      />
                      <div className="checkmark"></div>
                    </label>
                  </div>
                  <div className="flex justify-center items-center gap-2  ">
                    <h1
                      className="cursor-pointer"
                      onClick={() => handleDay3Verse()}
                    >
                      2&nbsp;thessalonia&nbsp;15:31
                    </h1>
                    <label
                      className="container cursor-pointer"
                      onClick={handleLabelClick}
                    >
                      <input
                        type="checkbox"
                        checked={day3.zalmy}
                        onChange={(event) =>
                          handleCheckboxChange(event, 3, day3, setDay3, "zalmy")
                        }
                      />
                      <div className="checkmark"></div>
                    </label>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
          <div
            className={`text-center transition-opacity duration-300 ${
              planFinished ? "opacity-1" : "opacity-0"
            } `}
          >
            <h2 className="text-3xl font-bold">Finished Plan</h2>
            <p>Congratulations on completing the Trust plan!</p>
          </div>
          <div className="">
            <Footer></Footer>
          </div>
        </div>
      )}
    </div>
  );
};

export default withSwal(Trust);
