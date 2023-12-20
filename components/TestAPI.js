"use client";
import { useEffect, useState } from "react";

const TestAPI = () => {
  const [quote, setQuote] = useState({
    text: "Loading...",
    author: "Loading...",
  });
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
  }, []); // Empty dependency array to run once on mount


  return (
    <div className="flex flex-col items-center justify-center lg:w-[30rem] w-[20rem] ">
      <h1 className="font-bold text-2xl mt-8 mb-4 text-center font-barlow">
        {quote.Verse}
      </h1>
      <p className="italic">from Bible</p>
    </div>
  );
};

export default TestAPI;
