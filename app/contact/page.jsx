"use client";

import Navbar from "../../components/NavBar";
import useFunctions from "../../components/Functions";
import { toast } from "react-hot-toast";
import { withSwal } from "react-sweetalert2";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import Footer from "../../components/Footer";
import { slideIn } from "../../utils/motion";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

const Contact = ({ swal }) => {
  const {
    theme,
    toggleTheme,
    windowWidth,
  } = useFunctions();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_81tw9xw",
        "template_m37okw1",
        {
          from_name: form.name,
          to_name: "Jaroslav",
          from_email: form.email,
          to_email: "jaroba0@gmail.com",
          message: form.message,
        },
        "ao9Pnvt-EA8-h9gBU"
      )
      .then(
        () => {
          setLoading(false);
          swal.fire({
            title: "Thank you for your email",
            text: "We will send you a feedback soon!",
            icon: "success",
          });

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);

          toast.error("Something went wrong.");
        }
      );
  };

     const isSmallScreen = useMediaQuery({ maxWidth: 768 });
     const cols = isSmallScreen ? 10 : 15;
     const rows = isSmallScreen ? 6 : 8;
    

  return (
    <div>
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
        windowWidth={windowWidth}
      />

      <div>
        <div className="flex min-h-screen  text-[var(--color2)] justify-center items-center gap-10   pt-16">
          {windowWidth > 768 && (
            <motion.div
              initial="hidden"
              animate="show"
              variants={slideIn("left", "tween", 0.2, 1)}
            >
              <img
                src="contact.png"
                alt="The heart of man plans his way, but the LORD establishes his steps."
                className="w-72 rounded-sm  border-[var(--color2)] border"
              />
            </motion.div>
          )}

          <motion.form
            initial="hidden"
            animate="show"
            variants={slideIn("right", "tween", 0.2, 1)}
            onSubmit={handleSubmit}
            className="flex flex-col gap-3"
          >
            <h1 className="text-4xl text-center underline">Contact Us</h1>

            <input
              required
              type="text"
              name="name"
              id="name"
              value={form.name}
              onChange={handleChange}
              autocomplete="off"
              placeholder="Enter your name"
              className="bg-transparent border-t-transparent border-x-transparent  outline-none border-b-[var(--color2)] border p-1 w-64 sm:w-72"
            />
            <input
              required
              type="email"
              name="email"
              id="email"
              value={form.email}
              onChange={handleChange}
              autocomplete="off"
              placeholder="Enter your valid address"
              className="bg-transparent border-t-transparent border-x-transparent  outline-none border-b-[var(--color2)] border p-1  w-64 sm:w-72"
            />
            <textarea
              required
              rows={rows}
              cols={cols}
              name="message"
              id="message"
              value={form.message}
              onChange={handleChange}
              autocomplete="off"
              placeholder="Enter your message"
              className="bg-transparent resize-none outline-none border-t-transparent border-x-transparent   border-b-[var(--color2)] border p-1 "
            ></textarea>
            <center>
              <button className="button">
                {loading ? "Sending..." : "Send"}
              </button>
            </center>
          </motion.form>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default withSwal(Contact);
