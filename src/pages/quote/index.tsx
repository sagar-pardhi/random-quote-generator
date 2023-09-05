import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { IQuote } from "../../../types";
import { Quote } from "@/components/quote";

export const QuotePage = () => {
  const [quote, setQuote] = useState<IQuote>({
    quoteText: "",
    quoteAuthor: "",
    quoteGenre: "",
  });

  const navigate = useNavigate();

  const getQuote = async () => {
    const response = await fetch(
      "https://quote-garden.onrender.com/api/v3/quotes/random"
    );
    const data = await response.json();
    setQuote(data.data[0]);
  };

  useEffect(() => {
    getQuote();
  }, []);

  return (
    <>
      <header className="flex justify-end px-5 my-5">
        <button className="flex gap-x-2 items-center" onClick={getQuote}>
          random{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
            />
          </svg>
        </button>
      </header>
      <main className="flex flex-col justify-center items-center px-5 mt-20 w-full h-full">
        <Quote
          showQuoteAuthor
          quoteAuthor={quote.quoteAuthor}
          quoteGenre={quote.quoteGenre}
          quoteText={quote.quoteText}
        />
      </main>
    </>
  );
};
