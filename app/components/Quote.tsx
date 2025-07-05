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
  });
};
