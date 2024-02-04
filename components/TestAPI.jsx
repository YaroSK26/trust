// TestAPI component
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {Copy} from "lucide-react";
import { toast } from 'react-hot-toast';


const TestAPI = () => {
  const [quote, setQuote] = useState({ text: "Loading...", reference: "" });

useEffect(() => {
const getQuote = async () => {
try {
 const response = await axios.get(
        `/api/randomverse?timestamp=${new Date().getTime()}`
      );
const data = response.data;
setQuote({ text: data.text, reference: data.reference });
} catch (error) {
console.error("Error fetching quote:", error);
setQuote({ text: "Failed to load quote", reference: "" });
}
};
getQuote();
}, []);


  const handleCopyText = (text) => {
    navigator.clipboard.writeText(text);
    toast.success("Text copied!");
  };


return (
  <div className="flex relative flex-col items-center justify-center lg:w-[30rem] w-[20rem]">
    {quote.text !== "Loading..." ? (
      <div>
        <Copy
          onClick={() => handleCopyText(quote.text)}
          size={20}
          className="cursor-pointer absolute right-[-10px] top-5 text-[var(--color2)]"
        />
        <h1 className="font-bold text-2xl mt-8 mb-4 text-center font-barlow">
          {quote.text}
        </h1>
        <p className="italic text-center">{quote.reference}</p>
      </div>
    ) : (
      <h1 className="font-bold text-2xl mt-8 mb-4 text-center font-barlow">
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