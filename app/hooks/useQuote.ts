import { quotes } from "@/lib/quotes/quotes";
import { useEffect, useState } from "react";

export type QuoteType = "daily" | "random";

export const useQuote = (type: QuoteType) => {
  const [quote, setQuote] = useState<(typeof quotes)[0]>();

  const getQuoteOfTheDay = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const seed = day + month + year;
    const index = seed % quotes.length;
    return quotes[index];
  };

  const getRandomQuote = () => {
    const index = Math.floor(Math.random() * quotes.length);
    return quotes[index];
  };

  useEffect(() => {
    if (type === "daily") {
      setQuote(getQuoteOfTheDay());
    } else {
      setQuote(getRandomQuote());
    }
  }, [type]);

  const getNewQuote = () => {
    if (type === "daily") {
      setQuote(getQuoteOfTheDay());
    } else {
      setQuote(getRandomQuote());
    }
  };

  return { quote, getNewQuote };
};
