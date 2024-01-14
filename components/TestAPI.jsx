// TestAPI component
import axios from 'axios';
import React, { useEffect, useState } from 'react';

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

return (
<div className="flex flex-col items-center justify-center lg:w-[30rem] w-[20rem]">
<h1 className="font-bold text-2xl mt-8 mb-4 text-center font-barlow">
{quote.text}
</h1>
<p className="italic">{quote.reference}</p>
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