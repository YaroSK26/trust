// TestAPI component
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Bookmark, BookmarkCheck, Copy} from "lucide-react";
import { toast } from 'react-hot-toast';
import { useClerk } from '@clerk/nextjs';


const TestAPI = () => {
  const [quote, setQuote] = useState({ text: "Loading...", reference: "" });
  const [booked, setBooked] = useState(false);

  useEffect(() => {
    const getQuote = async () => {
      const lastFetchTime = localStorage.getItem("lastFetchTime");
      const currentTime = new Date().getTime();
      const oneMinute = 24 * 60 * 60 * 1000; // 1 minute in milliseconds

      // Check if lastFetchTime is more than 1 minute ago
      if (!lastFetchTime || currentTime - parseInt(lastFetchTime) > oneMinute) {
        try {
          const response = await axios.get(
            `/api/randomverse?timestamp=${currentTime}`
          );
          const data = response.data;
          setQuote({ text: data.text, reference: data.reference });
          // Update lastFetchTime in localStorage
          localStorage.setItem("lastFetchTime", currentTime.toString());
          // Also store the quote and reference in localStorage
          localStorage.setItem("quote", data.text);
          localStorage.setItem("reference", data.reference);
        } catch (error) {
          console.error("Error fetching quote:", error);
          setQuote({ text: "Failed to load quote", reference: "" });
        }
      } else {
        // If not more than 1 minute, load quote from localStorage if available
        const storedQuote = localStorage.getItem("quote");
        const storedReference = localStorage.getItem("reference");
        if (storedQuote && storedReference) {
          setQuote({ text: storedQuote, reference: storedReference });
        }
      }
    };
    getQuote();
  }, []);

  // Additionally, whenever you set a new quote, store it in localStorage
  useEffect(() => {
    localStorage.setItem("quote", quote.text);
    localStorage.setItem("reference", quote.reference);
  }, [quote]);

  
  const handleCopyText = (text) => {
    navigator.clipboard.writeText(text);
    toast.success("Text copied!");
  };
  
  //!booked
  const getCurrentDate = (date) => {
    if (!date) {
      date = new Date();
    }

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const [loading, setLoading] = useState(false);
  const clerk = useClerk();
  const userId = clerk.user ? clerk.user.id : null;
  const [selectedDate, setSelectedDate] = useState(getCurrentDate());
  const [savedId, setSavedId] = useState(null);

  const handleBookPost = async (e, text,author) => {
//! POST

    try {
      e.preventDefault();

      const data = {
        text: text,
        author: author,
        date: selectedDate,
        userId,
      };

      setLoading(true);

      const res = await axios.post("/api/saved", data);

      const refreshPage = () => {
        setTimeout(() => {
          window.location.reload();
        }, 500);
      };

      if (res) {
        toast.success("Bookmark Saved!");
        refreshPage();
        setLoading(false);
      } else {
        throw new Error("Error");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const checkIfBooked = async () => {
      if (userId && quote.text !== "Loading...") {
        try {
          const response = await axios.get(
            `/api/saved?userId=${userId}&text=${encodeURIComponent(quote.text)}`
          ); 
          
          if (response.data.Saved2.some(item => 
          item.userId === userId && item.text === quote.text)) {
            const savedItem = response.data.Saved2.find(
              (item) => item.userId === userId && item.text === quote.text
            );
            setBooked(true);
            setSavedId(savedItem._id);
          } else {
            setBooked(false);
            setSavedId(null);
          }
        } catch (error) {
          console.error("Error checking if quote is saved:", error);
          setBooked(false);
        }
      }
    };

    checkIfBooked();
  }, [userId, quote.text]); 

  //!delete

 const handleBookDelete = async (text) => {
   if (savedId) {
     try {
       setLoading(true);
       const response = await axios.delete(`/api/saved?id=${savedId}`);
       if (response.status === 200) {
         toast.success("Bookmark removed!");
         setBooked(false);
         setSavedId(null);
         // Nemusíte obnovovať stránku, iba aktualizovať stav
       } else {
         throw new Error("Failed to delete bookmark");
       }
     } catch (error) {
       console.error("Error deleting the bookmark:", error);
       toast.error("Failed to delete bookmark.");
     } finally {
       setLoading(false);
     }
   }
 };


  return (
    <div className="flex relative flex-col items-center justify-center lg:w-[30rem] w-[19rem]">
      {quote.text !== "Loading..." ? (
        <div>
          <Copy
            onClick={() => handleCopyText(quote.text)}
            size={20}
            className="cursor-pointer absolute right-[-20px] top-5 text-[var(--color2)]"
          />
          <div className="cursor-pointer absolute right-[-22px] top-[50px] text-[var(--color2)]">
            {booked == false ? (
              <Bookmark onClick={(e) => handleBookPost(e, quote.text, quote.reference)} />
            ) : (
              <BookmarkCheck onClick={(e) => handleBookDelete(e, quote.text, quote.reference)} />
            )}
          </div>

          <h1 className="font-bold text-2xl mt-8 mb-4 text-center">
            {quote.text}
          </h1>
          <p className="italic text-center">{quote.reference}</p>
        </div>
      ) : (
        <h1 className="font-bold text-2xl mt-8 mb-4 text-center">
          Loading...
        </h1>
      )}
    </div>
  );
};

export default TestAPI;


/*

  useEffect(() => {
    const getQuote = async () => {
      try {
        const response = await fetch("/data.json");
        const data = await response.json(); 
        const quotesArray = data.Book;
        const randomQuote =
          quotesArray[Math.floor(Math.random() * quotesArray.length)];
        setQuote(randomQuote);
      } catch (error) {
        console.error("Error fetching quote:", error);
        setQuote({ text: "Failed to load quote", author: "" });
      }
    };

    getQuote();


 */