import { Switch, View, StyleSheet } from "react-native";

export const ThemeToggle = ({
  theme,
  toggleTheme,
}: {
  theme: "light" | "dark";
  toggleTheme: () => void;
}) => {
  return (
    <View style={styles.themeToggleContainer}>
      <Switch
        value={theme === "dark"}
        onValueChange={toggleTheme}
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={theme === "dark" ? "#f5dd4b" : "#f4f3f4"}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  themeToggleContainer: {
    position: "absolute",
    top: 50,
    right: 20,
  },
});
