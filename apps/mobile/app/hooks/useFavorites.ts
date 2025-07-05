import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import type { Quote } from "@/lib/quotes/quotes";

const FAVORITES_KEY = "favorite_quotes";

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<Quote[]>([]);

  useEffect(() => {
    const loadFavorites = async () => {
      try {
        const storedFavorites = await AsyncStorage.getItem(FAVORITES_KEY);
        if (storedFavorites) {
          setFavorites(JSON.parse(storedFavorites));
        }
      } catch (error) {
        console.error("Error loading favorites:", error);
      }
    };

    loadFavorites();
  }, []);

  const addFavorite = async (quote: Quote) => {
    try {
      const updatedFavorites = [...favorites, quote];
      setFavorites(updatedFavorites);
      await AsyncStorage.setItem(
        FAVORITES_KEY,
        JSON.stringify(updatedFavorites),
      );
    } catch (error) {
      console.error("Error adding favorite:", error);
    }
  };

  const removeFavorite = async (quote: Quote) => {
    try {
      const updatedFavorites = favorites.filter(
        (fav) => fav.quote !== quote.quote,
      );
      setFavorites(updatedFavorites);
      await AsyncStorage.setItem(
        FAVORITES_KEY,
        JSON.stringify(updatedFavorites),
      );
    } catch (error) {
      console.error("Error removing favorite:", error);
    }
  };

  const isFavorite = (quote: Quote) => {
    return favorites.some((fav) => fav.quote === quote.quote);
  };

  return { favorites, addFavorite, removeFavorite, isFavorite };
};
