"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { withSwal } from "react-sweetalert2";
import Footer from "../../../components/Footer";
import Navbar from "../../../components/NavBar";
import useFunctions from "../../../components/Functions";
import { useMediaQuery } from "react-responsive";

const EditPage = ({ swal }) => {
  const { theme, toggleTheme } =
    useFunctions();

  const [value, setValue] = useState("");
  const [id, setId] = useState("");


  useEffect(() => {
    axios
      .get("/api/prayers")
      .then((response) => {
        const data = response.data;
        if (data && data.Prayer && Array.isArray(data.Prayer)) {
          const dataPrayers = data.Prayer;

          const currentUrl = window.location.href;
          const matchingEditId = dataPrayers.find(
            (entry) =>
              `${window.location.origin}/edit-prayers/${entry._id}` === currentUrl
          );

          if (matchingEditId) {
            setId(matchingEditId._id);
            setValue(matchingEditId.text);
          }
        } else {
          console.error("Unexpected response structure:", data);
        }
      })
      .catch((error) => {
        console.error("API request failed:", error);
      });
  }, []);

  const handleEdit = () => {
    axios
      .put(`/api/prayers?id=${id}`, { text: value })
      .then(() => {
        toast.success("Edited!");
        window.location.href = `${window.location.origin}/prayers`;
      })
      .catch(() => {
        swal.fire("Error", "Failed to edit the prayer.", "error");
      });
  };

   const isSmallScreen = useMediaQuery({ maxWidth: 600 });
   const cols = isSmallScreen ? 20 : 30;
   const rows = isSmallScreen ? 7 : 7;

  return (
    <div>
      <Navbar
        theme={theme}
        toggleTheme={toggleTheme}
      ></Navbar>
        <div className="flex min-h-screen  flex-col  pt-20 text-[var(--color2)] justify-between items-center gap-2">
          <div className="flex flex-col mt-10">
          <h1 className="text-center text-3xl font-bold mb-4">Edit prayer</h1>
            <textarea
              className="border  border-[var(--color2)] m-1 pl-1 p-1 bg-[var(--color1)] rounded-lg w-56 resize-none"
              rows={rows}
              cols={cols}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="loading.."
              style={{
                transition:
                  "background-color 150ms ease, border-color 150ms ease",
              }}
            />
            <button
              className="bg-[var(--color2)] p-1 rounded-lg text-[var(--color1)] w-full h-10  mt-2"
              onClick={() => handleEdit()}
            >
              Save
            </button>
          </div>
          <Footer></Footer>
        </div>
    </div>
  );
};

export default withSwal(EditPage);
