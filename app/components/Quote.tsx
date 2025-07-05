import { Text, View, StyleSheet } from "react-native";
import { themes } from "../constants/Themes";

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

  return (
    <View style={styles.quoteContainer}>
      <Text style={styles.quoteText}>"{quote}"</Text>
      <Text style={styles.authorText}>- {author}</Text>
    </View>
  );
};

const getStyles = (theme: "light" | "dark" | null | undefined) => {
  const currentTheme = themes[theme || "light"];
  return StyleSheet.create({
    quoteContainer: {
      padding: 20,
      borderRadius: 10,
      backgroundColor: currentTheme.quoteContainer,
      margin: 20,
    },
    quoteText: {
      fontSize: 24,
      fontStyle: "italic",
      color: currentTheme.text,
      textAlign: "center",
    },
    authorText: {
      fontSize: 18,
      color: currentTheme.text,
      textAlign: "right",
      marginTop: 10,
    },
  });
};
