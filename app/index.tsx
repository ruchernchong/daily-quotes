import {
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import { Quote } from "@/app/components/Quote";
import { QuoteTypeToggle } from "@/app/components/QuoteTypeToggle";
import { ThemeToggle } from "@/app/components/ThemeToggle";
import { QuoteType, useQuote } from "@/app/hooks/useQuote";
import { useState } from "react";
import { themes } from "@/app/constants/Themes";

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

  const currentTheme = themes[theme || "light"];

  return (
    <View
      style={[styles.container, { backgroundColor: currentTheme.background }]}
    >
      <TouchableOpacity onPress={getNewQuote} style={styles.touchable}>
        <QuoteTypeToggle
          quoteType={quoteType}
          toggleQuoteType={toggleQuoteType}
          theme={theme}
        />
        <ThemeToggle
          theme={theme as "light" | "dark"}
          toggleTheme={toggleTheme}
        />
        <Quote
          quote={quote?.quote}
          author={quote?.author}
          theme={theme}
        />
      </TouchableOpacity>
    </View>
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

