import { useNavigate } from "react-router-dom";
import { ArrowLongRightIcon } from "@heroicons/react/24/outline";

import { IQuote } from "../../types";

interface QuoteProps extends IQuote {
  showQuoteAuthor?: boolean;
}

export const Quote = ({
  quoteAuthor,
  quoteGenre,
  quoteText,
  showQuoteAuthor,
}: QuoteProps) => {
  const navigate = useNavigate();

  return (
    <div className="my-10 md:w-[500px]">
      <div className="py-5 border-t-8 md:pl-14 md:border-l-8 border-t-yellow-300 md:border-t-0 md:border-l-yellow-300">
        <p className="text-2xl font-semibold">"{quoteText}"</p>
      </div>
      {showQuoteAuthor && (
        <div className="flex justify-end md:max-w-lg md:pl-14">
          <div
            className="flex justify-between group items-center px-5 py-5 mt-16 w-full hover:bg-[#333] hover:cursor-pointer"
            onClick={() =>
              navigate(
                `/random-quote-generator/author/${quoteAuthor
                  .replaceAll(" ", "-")
                  .toLowerCase()}`
              )
            }
          >
            <div className="flex flex-col justify-between">
              <h2 className="font-semibold group-hover:text-white text-[#4f4f4f]">
                {quoteAuthor}
              </h2>
              <h4 className="text-[#828282]">{quoteGenre}</h4>
            </div>
            <div className="hidden group-hover:block">
              <ArrowLongRightIcon className="w-6 h-6 text-white" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
