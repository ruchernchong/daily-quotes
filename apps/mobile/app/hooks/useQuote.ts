import { useCallback, useEffect, useState } from "react";
import { quotes } from "@/lib/quotes/quotes";

export type QuoteType = "daily" | "random";

export const useQuote = (type: QuoteType) => {
  const [quote, setQuote] = useState<(typeof quotes)[0]>();

  const getQuoteOfTheDay = useCallback(() => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();
    const seed = day + month + year;
    const index = seed % quotes.length;
    return quotes[index];
  }, []);

  const getRandomQuote = useCallback(() => {
    const index = Math.floor(Math.random() * quotes.length);
    return quotes[index];
  }, []);

  useEffect(() => {
    if (type === "daily") {
      setQuote(getQuoteOfTheDay());
    } else {
      setQuote(getRandomQuote());
    }
  }, [type, getQuoteOfTheDay, getRandomQuote]);

  const getNewQuote = useCallback(() => {
    if (type === "daily") {
      setQuote(getQuoteOfTheDay());
    } else {
      setQuote(getRandomQuote());
    }
  }, [type, getQuoteOfTheDay, getRandomQuote]);

  return { quote, getNewQuote };
};
