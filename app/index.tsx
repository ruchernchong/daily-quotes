import {
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Quote } from "@/app/components/Quote";
import { QuoteTypeToggle } from "@/app/components/QuoteTypeToggle";
import { ThemeToggle } from "@/app/components/ThemeToggle";
import { QuoteType, useQuote } from "@/app/hooks/useQuote";
import { useState } from "react";

export default function Index() {
  const [quoteType, setQuoteType] = useState<QuoteType>("daily");
  const { quote, getNewQuote } = useQuote(quoteType);
  const colorScheme = useColorScheme();
  const [theme, setTheme] = useState(colorScheme);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleQuoteType = () => {
    setQuoteType(quoteType === "daily" ? "random" : "daily");
  };

  const backgroundColors =
    theme === "dark"
      ? ["#1a1a1a", "#3a3a3a", "#1a1a1a"]
      : ["#f0f0f0", "#d0d0d0", "#f0f0f0"];

  return (
    <LinearGradient colors={backgroundColors} style={styles.container}>
      <TouchableOpacity onPress={getNewQuote} style={styles.touchable}>
        <QuoteTypeToggle
          quoteType={quoteType}
          toggleQuoteType={toggleQuoteType}
        />
        <ThemeToggle
          theme={theme as "light" | "dark"}
          toggleTheme={toggleTheme}
        />
        <Quote quote={quote?.quote} author={quote?.author} />
      </TouchableOpacity>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  touchable: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
});
