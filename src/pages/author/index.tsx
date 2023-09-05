import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { IQuote } from "../../../types";
import { Quote } from "@/components/quote";

export const AuthorPage = () => {
  const [authorQuotes, setAuthorQuotes] = useState<IQuote[]>([]);

  const { authorName = "" } = useParams();

  const titleCase = (name: string) => {
    return name
      .split("-")
      .map((word) => word[0].toUpperCase() + word.substring(1).toLowerCase())
      .join(" ");
  };

  const getAuthorQuotes = async () => {
    const response = await fetch(
      `https://quote-garden.onrender.com/api/v3/quotes?author=${authorName
        ?.split("-")
        .join(" ")}`,
      { cache: "default" }
    );
    const data = await response.json();
    setAuthorQuotes(data.data);
  };

  useEffect(() => {
    getAuthorQuotes();
  }, []);

  return (
    <>
      <div className="flex justify-center">
        <h2 className="items-start my-16 text-3xl font-semibold text-[#333]">
          {titleCase(authorName)}
        </h2>
      </div>
      <main className="flex flex-col justify-center items-center px-5 mt-20 w-full h-full">
        {authorQuotes.map((quote, index) => (
          <Quote
            key={index}
            quoteAuthor={quote.quoteAuthor}
            quoteGenre={quote.quoteGenre}
            quoteText={quote.quoteText}
          />
        ))}
      </main>
    </>
  );
};
