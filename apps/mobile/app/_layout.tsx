import { Stack } from "expo-router";
import { useNotifications } from "./hooks/useNotifications";

export default function RootLayout() {
  useNotifications();
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
}
