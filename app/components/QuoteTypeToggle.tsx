import {
  Switch,
  View,
  StyleSheet,
  Text,
  useColorScheme,
} from "react-native";
import { QuoteType } from "../hooks/useQuote";
import { themes } from "../constants/Themes";

export const QuoteTypeToggle = ({
  quoteType,
  toggleQuoteType,
  theme,
}: {
  quoteType: QuoteType;
  toggleQuoteType: () => void;
  theme: "light" | "dark" | null | undefined;
}) => {
  const styles = getStyles(theme);
  return (
    <View style={styles.quoteTypeToggleContainer}>
      <Text style={styles.quoteTypeText}>
        {quoteType === "daily" ? "Quote of the Day" : "Random Quote"}
      </Text>
      <Switch
        value={quoteType === "daily"}
        onValueChange={toggleQuoteType}
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={quoteType === "daily" ? "#f5dd4b" : "#f4f3f4"}
      />
    </View>
  );
};

const getStyles = (theme: "light" | "dark" | null | undefined) => {
  const currentTheme = themes[theme || "light"];
  return StyleSheet.create({
    quoteTypeToggleContainer: {
      position: "absolute",
      top: 50,
      left: 20,
      flexDirection: "row",
      alignItems: "center",
    },
    quoteTypeText: {
      color: currentTheme.text,
      marginRight: 10,
    },
  });
};
