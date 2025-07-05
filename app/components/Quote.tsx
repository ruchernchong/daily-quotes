import { Text, View, StyleSheet, useColorScheme } from "react-native";

export const Quote = ({
  quote,
  author,
}: {
  quote?: string;
  author?: string;
}) => {
  const colorScheme = useColorScheme();
  const styles = getStyles(colorScheme);

  return (
    <View style={styles.quoteContainer}>
      <Text style={styles.quoteText}>"{quote}"</Text>
      <Text style={styles.authorText}>- {author}</Text>
    </View>
  );
};

const getStyles = (theme: "light" | "dark" | null | undefined) =>
  StyleSheet.create({
    quoteContainer: {
      padding: 20,
      borderRadius: 10,
      backgroundColor:
        theme === "dark"
          ? "rgba(255, 255, 255, 0.1)"
          : "rgba(0, 0, 0, 0.1)",
      margin: 20,
    },
    quoteText: {
      fontSize: 24,
      fontStyle: "italic",
      color: theme === "dark" ? "white" : "black",
      textAlign: "center",
    },
    authorText: {
      fontSize: 18,
      color: theme === "dark" ? "white" : "black",
      textAlign: "right",
      marginTop: 10,
    },
  });
