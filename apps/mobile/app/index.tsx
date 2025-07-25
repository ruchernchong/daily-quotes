import { useFonts } from "expo-font";
import { Link } from "expo-router";
import { Heart, Moon, RefreshCw, Sun } from "lucide-react-native";
import { useState } from "react";
import {
  StyleSheet,
  TouchableOpacity,
  useColorScheme,
  View,
} from "react-native";
import { Quote } from "@/app/components/Quote";
import { themes } from "@/app/constants/Themes";
import { useQuote } from "@/app/hooks/useQuote";

export default function Index() {
  const { quote, getNewQuote } = useQuote("random");
  const colorScheme = useColorScheme();
  const [theme, setTheme] = useState(colorScheme);
  const [fontsLoaded] = useFonts({
    "PlayfairDisplay-Regular": require("../assets/fonts/PlayfairDisplay-Regular.ttf"),
  });

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const currentTheme = themes[theme || "light"];

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View
      style={[styles.container, { backgroundColor: currentTheme.background }]}
    >
      <Quote quote={quote?.quote} author={quote?.author} theme={theme} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={toggleTheme} style={styles.button}>
          {theme === "dark" ? (
            <Sun size={24} color={currentTheme.icon} />
          ) : (
            <Moon size={24} color={currentTheme.icon} />
          )}
        </TouchableOpacity>
        <Link href="/favorites" asChild>
          <TouchableOpacity style={styles.button}>
            <Heart size={24} color={currentTheme.icon} />
          </TouchableOpacity>
        </Link>
        <TouchableOpacity onPress={getNewQuote} style={styles.button}>
          <RefreshCw size={24} color={currentTheme.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    marginTop: 40,
  },
  button: {
    padding: 15,
    borderRadius: 30,
    backgroundColor: "rgba(128, 128, 128, 0.2)",
  },
});
