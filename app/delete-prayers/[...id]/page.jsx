"use client"

import { useClerk } from "@clerk/nextjs";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { withSwal } from "react-sweetalert2";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/NavBar";
import useFunctions from "../../../components/Functions";

const DeletePage = ({ swal }) => {
  const { theme, toggleTheme } =
    useFunctions();

  const [value, setValue] = useState("");
  const [id, setId] = useState("");
  const [loading, setLoading] = useState(true);
  const clerk = useClerk();



  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0"); // January is 0
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    axios.get("/api/prayers").then((response) => {
      const data = response.data;
      const dataPrayers = data.Prayer;
      setLoading(true);

      const currentUrl = window.location.href;
      const matchingDeleteId = dataPrayers.filter(
        (entry) =>
          `${window.location.origin}/delete-prayers/${entry._id}` === currentUrl
      );

      if (matchingDeleteId.length > 0) {
        setId(matchingDeleteId[0]._id);
        setValue(matchingDeleteId[0].date);
        setLoading(false);
      }
    });
  }, []);

  const handleDelete = () => {
    swal
      .fire({
        title: "Are you sure you want to delete this prayer?",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: "Yes, delete",
        reverseButtons: true,
      })
      .then(function (result) {
        if (result.isConfirmed) {
          axios.delete(`/api/prayers?id=${id}`).then(() => {
            toast.success("Deleted!");
            axios.get("/api/prayers").then((response) => {
              const data = response.data;
              const dataPrayers = data.Prayer;
              if (!clerk.user) return null;

              const userId = clerk.user.id;
              const hasEntriesForCurrentDay = dataPrayers.some(
                (entry) =>
                  entry.date === getCurrentDate() && entry.userId === userId
              );

              if (!hasEntriesForCurrentDay && userId === response.data.userId) {
                  return
              }

              window.location.href = `${window.location.origin}/prayers`;
            });
          });
        } 
      });
  };

  return (
    <div>
      <Navbar theme={theme} toggleTheme={toggleTheme}></Navbar>
      <div className="flex min-h-screen  flex-col  pt-20 text-[var(--color2)] justify-between items-center gap-2">
        <div>
          <h1 className="text-center text-4xl font-bold mb-4 mt-10 underline">
            Delete prayer
          </h1>
          <input
            className="border border-[var(--color2)] m-1 pl-1 p-1 bg-[var(--color1)] rounded-lg w-56"
            type="text"
            value={value}
            disabled
            placeholder="Loading..."
            style={{
              transition:
                "background-color 150ms ease, border-color 150ms ease",
            }}
          />
          <button
            className="bg-red-600 p-1 rounded-lg text-white w-16"
            disabled={loading}
            onClick={() => handleDelete()}
          >
            Delete
          </button>
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
};

export default withSwal( DeletePage)
