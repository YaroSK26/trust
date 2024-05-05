"use client"

import questions from "../../components/quizData";
import { withSwal } from "react-sweetalert2";
import Navbar from "../../components/NavBar";
import useFunctions from "../../components/Functions";
import Footer from "../../components/Footer";
import { useClerk } from "@clerk/nextjs";
import { useState, useEffect } from "react";
import Link from "next/link";
import { slideIn } from "../../utils/motion";
import { motion } from "framer-motion";

const AdminPage = ({ swal }) => {
  const { theme, toggleTheme, windowWidth } = useFunctions();
  const clerk = useClerk();
  const [userId, setUserId] = useState(null);
  const [questionsDelete, setQuestionsDelete] = useState([]);

  useEffect(() => {
    if (
      clerk.user &&
      clerk.user.organizationMemberships &&
      clerk.user.organizationMemberships.length > 0
    ) {
      setUserId(clerk.user.organizationMemberships[0].role);
    } else {
      setUserId("User");
    }
  }, [clerk.user]);

  useEffect(() => {
    setQuestionsDelete(questions);
  }, []);

  

  return (
    <div>
      {userId === "org:admin" ? (
        <div>
          <Navbar
            theme={theme}
            toggleTheme={toggleTheme}
            windowWidth={windowWidth}
          />
          <motion.div
            initial="hidden"
            animate="show"
            variants={slideIn("left", "tween", 0.2, 1)}
            className="pt-28 "
          >
            <h1 className="text-[40px] text-center underline pb-5 ">
              Quiz question
            </h1>
            {questionsDelete.map((q, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center text-center gap-7 md:w-[500px] lg:w-[750px] m-auto"
              >
                <h2 className="text-2xl">{q.question}</h2>
                <ul className="grid md:grid-cols-2 grid-cols-1 gap-6">
                  {q.answers.map((answer, ansIndex) => (
                    <li
                      key={ansIndex}
                      className={answer.correct ? "text-blue-600" : ""}
                    >
                      {ansIndex + 1 + "."} &nbsp;
                      {answer.text}
                    </li>
                  ))}
                </ul>
                <p className="mb-10">{q.explanation}</p>
              </div>
            ))}
          </motion.div>
          <Footer />
        </div>
      ) : (
        <div className={theme}>
          <Navbar theme={theme} toggleTheme={toggleTheme} />
          <h1 className="color-[var(--color2)] lg:text-7xl text-center text-2xl h-[100vh]   gap-5 flex flex-col justify-center items-center">
            Loading..
          </h1>
          {userId === "User" && (
            <h1 className="color-[var(--color2)] lg:text-7xl text-center text-2xl h-[100vh]  gap-5 flex flex-col justify-center items-center">
              Nice try but you are not an admin :)
              <Link href={"/home"} className="underline lg:text-4xl text-xl">
                Go Home
              </Link>
            </h1>
          )}

          <div className="flex justify-center items-center ">
            <span className="absolute  bottom-0">
              <Footer></Footer>
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default withSwal(AdminPage);
