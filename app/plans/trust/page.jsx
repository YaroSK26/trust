"use client";

import useFunctions from "../../../components/Functions";
import Navbar from "../../../components/NavBar";
import Footer from "../../../components/Footer";
import "../../../css/layout.css";
import { useState,useEffect } from "react";
import { withSwal } from "react-sweetalert2";
import { slideIn, textVariant } from "../../../utils/motion";
import { motion } from "framer-motion";
import Link from "next/link";


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
      text: "You are never alone. It is often said that life consists of a series of moments when we are up or down, times of fun and happiness interspersed with periods of trouble and doubt. Life is not just a straight climb to the top. Rather, it is a journey that consists of hills and valleys. Every person, believer and non-believer alike, goes through life's ups and downs. But as Christians, we have an incredible promise from God that we will never have to face the valleys of life alone. Here are His encouraging words: Be strong and courageous. Do not be afraid and do not be dismayed, for the Lord your God Himself goes with you; He will not leave you nor forsake you. Deuteronomy 31:6 The truth is that in seasons of trouble as well as seasons of success, we need God's presence. When we know that God is with us, we can see every challenge in life as a stepping stone to success rather than a descent into despair.No mountain is too high or valley too deep that God cannot meet us there. No matter our circumstances, God is faithful and is always with us!",
      confirmButtonColor: "#000",
      confirmButtonText: "Amen",
    });
  };
   const handleDay1Verse = () => {
     swal.fire({
       title: "Proverbs 3:5-6",
       text: "Trust in the Lord with all your heartand lean not on your own mind!In all your ways, think of him, and he will make your paths straight.",
       confirmButtonColor: "#000",
       confirmButtonText: "Amen",
     });
   };
    const handleDay2Thought = () => {
      swal.fire({
        title: "Thought",
        text: " It builds Christian character to help us grow. Good character is not something we receive only with salvation, but something we learn and develop over time. Helping us to build Christ-like character is one of God's main purposes. The Holy Spirit helps us become more like Jesus by building and developing character in us. The Bible calls this the fruit of the Spirit.But the fruit of the Spirit is love, joy, peace, longsuffering, gentleness, goodness, faithfulness, meekness, self-control. Against such things there is no law. Galatians 5:22 - 23 In the midst of problems, sometimes we try to overcome adversity in our own strength. We may even be tempted to embezzle our Christian character, to sidestep difficulties, or to take shortcuts. But when we invoke the power of the Holy Spirit, He helps us to stay the course with integrity, truth and honesty, no matter the circumstances. During successful seasons, the same biblical standards should remain intact. Self-serving pride and arrogance are in direct conflict with the Christian character God wants to develop in our lives. In fact, meekness is an essential requirement for every Christian to continue to receive support from God. Blessed are the meek, for they shall be heirs of the earth. Matthew 5:5 Whether we are facing a trial or enjoying success in a Christ-like manner, we will begin to grow in our walk with God. We even begin to recognize that acting in the fruit of the Spirit is beneficial for our ultimate good and for His honor. The more we grow in our walk with God, the more God can bestow greater blessings in our lives!",
        confirmButtonColor: "#000",
        confirmButtonText: "Amen",
      });
    };
     const handleDay2Verse = () => {
       swal.fire({
         title: "Isaiah 43:2",
         text: "When you wade through the waters,I'll be with you,and when I walk through the rivers, they shall not drown thee,When thou passest through the fire, thou shalt not be scorched. and the flame shall not burn upon thee.",
         confirmButtonColor: "#000",
         confirmButtonText: "Amen",
       });
     };
      const handleDay3Thought = () => {
        swal.fire({
          title: "Thought",
          text: " He does everything for our good. God is in control in every area of our lives. He is fully able to orchestrate any circumstance to benefit us as believers. We know that all things work together for good to them that love God, to them who are called according to his purpose. Romans 8:28 He is more than able to handle even life's most difficult challenges and will guide us as we fulfill His plan for our lives. He simply wants us to trust Him in it. Trust in the Lord with all your heart and lean not on your own understanding. In all your ways acknowledge Him, and He alone will make your paths straight. Proverbs 3:5 - 6 Trust in God is no substitute for personal responsibility and good stewardship. Rather, personal responsibility and trust in Him go hand in hand. When we do our part, God is always faithful to do His part and guide us effectively. In many cases, God's guidance comes into our lives in the form of opening and closing doors. Other times, our situations require nothing less than God's intervention to heal, perform a miracle, or do something otherwise impossible. Jesus looked at them and said: With men this is impossible, but with God all things are possible. Matthew 19:26. Whether we are facing a terminal illness, a financial crisis, or even the unexpected loss of a loved one, God is present and able to act supernaturally in these times.Only God has the power to turn tragedy into triumph and hardship into joy through the Holy Spirit. Never doubt that God is a miracle worker even today. God is able to intervene in any impossible situation!",
          confirmButtonColor: "#000",
          confirmButtonText: "Amen",
        });
      };
       const handleDay3Verse = () => {
         swal.fire({
           title: "Proverbs 16:9",
           text: "The heart of man plans his way, but the LORD establishes his steps.",
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
        <div className="flex min-h-screen  flex-col  pt-20 text-[var(--color2)] justify-between items-center">
          <motion.h1
            initial="hidden"
            animate="show"
            variants={textVariant()}
            className="text-4xl  mt-10"
          >
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
                      className="cursor-pointer underline"
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
                      className="cursor-pointer underline"
                    >
                      Proverbs&nbsp;3:5&nbsp;-&nbsp;6
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
                      className="cursor-pointer underline"
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
                      className="cursor-pointer underline"
                      onClick={() => handleDay2Verse()}
                    >
                      Isaiah&nbsp;43:2
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
                      className="cursor-pointer underline"
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
                      className="cursor-pointer underline"
                      onClick={() => handleDay3Verse()}
                    >
                      Proverbs&nbsp;16:9
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
            <p>
              Congratulations on completing the Trust plan! Check more from{" "}
              <Link
                href={"https://www.twenty20faith.org"}
                target="_blank"
                className="underline"
              >
                Twenty 20 Faith
              </Link>
            </p>
          </div>
          <Footer></Footer>
        </div>
      )}
    </div>
  );
};

export default withSwal(Trust);
