import { Heart, Share as ShareIcon } from "lucide-react-native";
import {
  Alert,
  Share,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import type { Quote as QuoteType } from "@/lib/quotes/quotes";
import { themes } from "../constants/Themes";
import { useFavorites } from "../hooks/useFavorites";

export const Quote = ({
  quote,
  author,
  theme,
}: {
  quote?: string;
  author?: string;
  theme: "light" | "dark" | null | undefined;
}) => {
  const styles = getStyles(theme);
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();

  const currentQuote: QuoteType = {
    quote: quote || "",
    author: author || "",
  };

  const isFav = isFavorite(currentQuote);

  const toggleFavorite = () => {
    if (isFav) {
      removeFavorite(currentQuote);
    } else {
      addFavorite(currentQuote);
    }
  };

  const onShare = async () => {
    try {
      await Share.share({
        message: `"${currentQuote.quote}" - ${currentQuote.author}`,
      });
    } catch (error) {
      Alert.alert(
        "Error",
        error instanceof Error ? error.message : "Failed to share quote",
      );
    }
  };

  return (
    <View style={styles.quoteContainer}>
      <Text style={styles.quoteText}>&quot;{quote}&quot;</Text>
      <Text style={styles.authorText}>- {author}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={toggleFavorite} style={styles.button}>
          <Heart
            size={24}
            color={isFav ? "red" : themes[theme || "light"].text}
            fill={isFav ? "red" : "none"}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={onShare} style={styles.button}>
          <ShareIcon size={24} color={themes[theme || "light"].text} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const getStyles = (theme: "light" | "dark" | null | undefined) => {
  const currentTheme = themes[theme || "light"];
  return StyleSheet.create({
    quoteContainer: {
      padding: 30,
      borderRadius: 15,
      backgroundColor: currentTheme.quoteContainer,
      margin: 20,
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    quoteText: {
      fontSize: 28,
      fontFamily: "PlayfairDisplay-Regular",
      color: currentTheme.text,
      textAlign: "center",
      marginBottom: 20,
    },
    authorText: {
      fontSize: 18,
      color: currentTheme.author,
      textAlign: "right",
    },
    buttonContainer: {
      flexDirection: "row",
      justifyContent: "space-around",
      marginTop: 20,
    },
    button: {
      padding: 10,
    },
  });
};
