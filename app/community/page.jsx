"use client";

import Navbar from "../../components/NavBar";
import useFunctions from "../../components/Functions";
import Footer from "../../components/Footer";
import { Send, MessagesSquare, Copy, Trash } from "lucide-react";
import { useClerk } from "@clerk/nextjs";
import { toast } from "react-hot-toast";
import axios from "axios";
import { useEffect, useState } from "react";
import { withSwal } from "react-sweetalert2";
import { slideIn } from "../../utils/motion";
import { motion } from "framer-motion";

const Community = ({ swal }) => {
  const { theme, toggleTheme } =
    useFunctions();
  //timer
  // Load initial state from localStorage or set to default
  const [messageCount, setMessageCount] = useState(
    parseInt(localStorage.getItem("messageCount")) || 0
  );
  const [timer, setTimer] = useState(
    parseInt(localStorage.getItem("timer")) || 0
  );

  // Update localStorage when messageCount or timer changes
  useEffect(() => {
    localStorage.setItem("messageCount", messageCount);
    localStorage.setItem("timer", timer);
  }, [messageCount, timer]);

    useEffect(() => {
      let interval;
      if (timer > 0) {
        interval = setInterval(() => {
          setTimer((prev) => {
            const newTime = prev - 1;
            localStorage.setItem("timer", newTime.toString()); // Update localStorage
            return newTime;
          });
        }, 1000);
      } else if (timer === 0 && messageCount > 0) {
        setMessageCount(0); // Reset message count after 1 minute
        localStorage.setItem("messageCount", "0"); // Reset localStorage
      }
      return () => clearInterval(interval);
    }, [timer]);
    
  //! POST
  const getCurrentDate = (date) => {
    if (!date) {
      // If date is undefined, return the current date
      date = new Date();
    }

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    const milliseconds = String(date.getMilliseconds()).padStart(3, "0");

    return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}.${milliseconds}`;
  };

  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const clerk = useClerk();
  const userId = clerk.user ? clerk.user.id : null;
  const profileImg = clerk.user ? clerk.user.imageUrl : null;
  const [selectedDate, setSelectedDate] = useState(getCurrentDate());

  const handleCommunity = async (e) => {
    e.preventDefault();
    if (messageCount < 2) {
      // Increment message count right away
      setMessageCount((prevCount) => {
        if (prevCount < 2) {
          if (prevCount === 0) {
            setTimer(60); // Start the timer when the first message is sent
          }
          return prevCount + 1; // Increase the message count
        }
        return prevCount; // Return the previous count if 2 messages have already been sent
      });

      try {
        // existing logic for posting message
        const data = {
          text: text,
          date: selectedDate,
          userId,
          profileImg,
          name: clerk.user.firstName,
        };

        setLoading(true);

        const res = await axios.post("/api/community", data);

        const refreshPage = () => {
          setTimeout(() => {
            window.location.reload();
          }, 500);
        };

        if (res) {
          toast.success("Sent!");
          refreshPage();
        } else {
          throw new Error("Error");
        }
      } catch (error) {
        console.error(error);
        toast.error("Failed to send message.");
      } finally {
        setLoading(false); // Ensure loading is false after operation
      }
    } else {
      toast.error("You can only send 2 messages per minute.");
    }
  };

  //!GET
  const [comm, setComm] = useState([]);
  const [commLoading, setCommLoading] = useState(false);

  useEffect(() => {
    const fetchPrayers = async () => {
      try {
        setCommLoading(true);
        const response = await axios.get("api/community");
        setComm(response.data.Comm);
        setCommLoading(false);
      } catch (error) {
        console.error("Failed to fetch community", error);
        setComm([]);
        setCommLoading(false);
      }
    };

    if (userId) {
      fetchPrayers();
    }
  }, [userId]);

  //delete message ,copy message

  const handleCopyText = (text) => {
    navigator.clipboard.writeText(text);
    toast.success("Text copied!");
  };

  const handleDelete = (id) => {
    swal
      .fire({
        title: "Are you sure you want to delete this message?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes, delete",
        reverseButtons: true,
      })
      .then(function (result) {
        if (result.isConfirmed) {
          axios.delete(`/api/community?id=${id}`).then(() => {
            toast.success("Deleted!");
            axios.get("/api/community").then((response) => {
              setCommLoading(true);
              setComm(response.data.Comm);
              setCommLoading(false);
              window.location.href = `${window.location.origin}/community`;
            });
          });
        }
      });
  };

  return (
    <div>
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        isSheetOpen={isSheetOpen}
      />

        <div className="flex min-h-screen  flex-col  pt-20 text-[var(--color2)] justify-between items-center">
          <motion.div
            initial="hidden"
            animate="show"
            variants={slideIn("left", "tween", 0.2, 1)}
            className="text-[var(--color2)] text-center mt-10 flex justify-center items-center flex-col gap-3"
          >
            <h1 className=" text-4xl">Community</h1>

            <div className="bg-[var(--color3)] sm:w-[500px] sm:h-[500px] w-[275px] h-[350px]  my-2 rounded-lg mx-1 border  border-[var(--color2)] ">
              <div className="flex bg-[var(--color2)] text-[var(--color1)] rounded-lg py-2 justify-center items-center">
                <p className="mr-2">get to know people like you</p>
                <MessagesSquare />
              </div>

              <div className=" py-4 flex flex-col  gap-4 sm:max-h-[460px] max-h-[350px]  overflow-y-auto">
                {commLoading ? (
                  <p className="text-center">Loading...</p>
                ) : comm.length > 0 ? (
                  comm.map((i) => (
                    <div
                      key={i._id}
                      className={`flex mx-2 ${
                        i.userId === userId ? "justify-end" : "justify-start"
                      }`}
                    >
                      <span className=" bg-[var(--color2)] p-2 rounded-2xl  ">
                        {i.userId === userId ? (
                          <div className="flex justify-left items-start gap-1 relative">
                            <Copy
                              onClick={() => handleCopyText(i.text)}
                              size={15}
                              className="cursor-pointer absolute left-0 top-0 text-[var(--color1)]"
                            />
                            <Trash
                              onClick={() => handleDelete(i._id)}
                              size={15}
                              className="cursor-pointer absolute left-0 top-5 text-red-500"
                            />

                            <h1 className="pl-[18px] text-[var(--color1)]">
                              {i.text} - {i.name}
                            </h1>
                            <img
                              className="w-10 rounded-full"
                              src={i.profileImg}
                              alt="profile picture of user"
                            />
                          </div>
                        ) : (
                          <div className="flex justify-left items-start gap-1 relative">
                            <img
                              className="w-10 rounded-full "
                              src={i.profileImg}
                              alt="profile picture of user"
                            />
                            <h1 className="text-[var(--color1)] pr-[18px]">
                              {i.name} - {i.text}
                            </h1>

                            <Copy
                              onClick={() => handleCopyText(i.text)}
                              size={15}
                              className="cursor-pointer absolute right-0 top-0 text-[var(--color1)]"
                            />
                          </div>
                        )}
                      </span>
                    </div>
                  ))
                ) : (
                  <p className="text-center">
                    silent as the grave, start a conversation!
                  </p>
                )}
              </div>
            </div>
            {messageCount >= 2 && (
              <p className="text-center text-red-500">Wait {timer} seconds.</p>
            )}

            <form onSubmit={(e) => handleCommunity(e)} className="flex gap-3">
              <input
                type="text"
                required
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Send a message"
                className="bg-transparent border-t-transparent border-x-transparent  outline-none border-b-[var(--color2)] border p-1"
              />
              <button>
                <Send
                  size={52}
                  className="bg-[var(--color2)] text-[var(--color1)] p-1 rounded-2xl cursor-pointer"
                />
              </button>
            </form>
            {loading == true ? "Sending.." : ""}
          </motion.div>
          <Footer></Footer>
        </div>
    </div>
  );
};

export default withSwal(Community);
