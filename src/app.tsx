import { useEffect, useState } from "react";
import { Quote } from "../types";

export const App = () => {
  const [quote, setQuote] = useState<Quote>({
    quoteText:
      "But as far as, for I think it will be amazing you know where I find myself years from now because of this film. It's just amazing, I think everybody's going to kind of know this film and because of it, me. So I you know it's crazy.",
    quoteAuthor: "Brandon Routh",
    quoteGenre: "amazing",
  });

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
        <div className="py-5 max-w-lg border-t-8 md:pl-20 md:border-l-8 border-t-yellow-300 md:border-t-0 md:border-l-yellow-300">
          <p className="text-2xl font-semibold">{quote.quoteText}</p>
        </div>

        <div className="flex justify-between group items-center px-5 py-5 mt-16 w-full max-w-sm hover:bg-[#333] hover:cursor-pointer">
          <div className="flex flex-col justify-between">
            <h2 className="font-semibold group-hover:text-white text-[#4f4f4f]">
              {quote.quoteAuthor}
            </h2>
            <h4 className="text-[#828282]">{quote.quoteGenre}</h4>
          </div>
          <div className="hidden group-hover:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </div>
        </div>
      </main>
    </>
  );
};
