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
import { ArrowLeft } from "lucide-react";


const Love = ({swal}) => {
  const { theme, toggleTheme } =
    useFunctions();

  const [activeDay, setActiveDay] = useState(null);

  const getInitialState = (day) => {
    const saved = localStorage.getItem(`day${day}-L`);
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
    localStorage.setItem(`day${dayNumber}-L`, JSON.stringify(updatedDay)); 
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
      text: "How do you respond when you hear that God loves us so much that He gave His only Son so that we might have eternal life? Those words, do they belong to me? Well surely it is often easier to believe that this is true of others, just not of us. Clearly his God loves us, after all he is so good... But he can't love me, because he knows what I done... I don't deserve his love. Sure, we're not all equally good, but if God's love for us depended on our actions, no one would deserve it. But God loves us not because of how we are, but because of how He is. God does not love you based on your performance, but simply because He loves you. No strings attached. If you have trouble believing the words of John 3:16, write it down in a prominent place by adding your name instead of the words world and no one. Ask God to show you his love these days in a way you can receive.",
      confirmButtonColor: "#000",
      confirmButtonText: "Amen",
    });
  };
   const handleDay1Verse = () => {
     swal.fire({
       title: "John 3:16",
       text: "For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.",
       confirmButtonColor: "#000",
       confirmButtonText: "Amen",
     });
   };
    const handleDay2Thought = () => {
      swal.fire({
        title: "Thought",
        text: "God proves His love to us every day - we just have to keep our eyes on Him, not on people. We wander around the internet feeling sorry for ourselves that we don't look like the people in the perfectly edited photos. We think we're fat, ugly, incompetent, try to look at yourself as God sees you. He wanted someone just like you, that's why He created you! He made you as a unique person with unique qualities and abilities. You are of inestimable value to Him. He loves you passionately - even more than your parents. According to His words in the Bible, you are a jewel, a pearl of great price, a precious treasure. He sacrificed everything for you, even the life of His only Son. Even today he says to you: I love you! You are my precious child. I bless you and protect you. Do you believe God? Or your feelings? Comparing yourself to others won't do you any good. But if you realize that in Jesus Christ you have everything, it can change you forever! ",
        confirmButtonColor: "#000",
        confirmButtonText: "Amen",
      });
    };
     const handleDay2Verse = () => {
       swal.fire({
         title: "John 4:16",
         text: "And we who have believed have come to know the love that God has for us. God is love; and he that abideth in love abideth in God, and God abideth in him.",
         confirmButtonColor: "#000",
         confirmButtonText: "Amen",
       });
     };
      const handleDay3Thought = () => {
        swal.fire({
          title: "Thought",
          text: "Do you experience a feeling of closeness and a strong bond with someone? This is what defines a deep relationship between two people who love each other. It may surprise you, but this is exactly the kind of relationship God - the Creator of all things - wants to have with you! When God created the first humans, Adam and Eve spent time with God and enjoyed His presence. This relationship was only disrupted by their sin, which still draws us humans away from God today. Thankfully, God's concern for man did not end with Adam and Eve's departure from the Garden of Eden. Scripture is filled with stories of how he continued to accompany people and sought to make himself known to them. He so loved the world that he later sent his Son Jesus to earth to seek and save the lost. Jesus was physically present and the people around Him experienced how wonderful it was to have a close relationship with Him. Through the stories of the lost sheep, the lost coin, and the lost son, He showed how God cares about each of us. While we are stubbornly looking for love, money, or recognition, He is looking for us because He created us in His image and we are important to Him. Can a loving God forget His child?",
          confirmButtonColor: "#000",
          confirmButtonText: "Amen",
        });
      };
       const handleDay3Verse = () => {
         swal.fire({
           title: "2 Thessalonians 3:5",
           text: "May the Lord lead your hearts into a full understanding and expression of the love of God and the patient endurance that comes from Christ.",
           confirmButtonColor: "#000",
           confirmButtonText: "Amen",
         });
       };

  return (
    <div>
      <Navbar theme={theme} toggleTheme={toggleTheme} />

      <div className=" flex min-h-screen  flex-col  pt-20 text-[var(--color2)] justify-between items-center ">
        <motion.h1
          initial="hidden"
          animate="show"
          variants={textVariant()}
          className="text-4xl  mt-10 flex justify-center items-center relative"
        >
          <ArrowLeft
            className="absolute left-[-40px] cursor-pointer"
            onClick={() => (window.location.href = "/home")}
          />
          Love
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
                        handleCheckboxChange(event, 1, day1, setDay1, "thought")
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
                    John&nbsp;3:16
                  </h1>
                  <label
                    className="container cursor-pointer "
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
                        handleCheckboxChange(event, 2, day2, setDay2, "thought")
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
                    John&nbsp;4:16
                  </h1>
                  <label
                    className="container cursor-pointer  "
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
                        handleCheckboxChange(event, 3, day3, setDay3, "thought")
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
                    2&nbsp;Thessalonians&nbsp;3:5
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
            Congratulations on completing the Love plan! Check more from{" "}
            <Link
              href={"https://agapeslovensko.sk"}
              target="_blank"
              className="underline"
            >
              Agapé Slovensko
            </Link>
          </p>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default withSwal(Love);
