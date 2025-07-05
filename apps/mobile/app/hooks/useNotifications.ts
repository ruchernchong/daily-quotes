import * as Notifications from "expo-notifications";
import { useCallback, useEffect, useRef } from "react";
import { Alert, Platform } from "react-native";
import { useQuote } from "./useQuote";

export const useNotifications = () => {
  const { getNewQuote, quote } = useQuote("daily");
  const notificationListener = useRef<Notifications.EventSubscription | null>(
    null,
  );
  const responseListener = useRef<Notifications.EventSubscription | null>(null);

  const registerForPushNotificationsAsync = useCallback(async () => {
    if (Platform.OS === "android") {
      await Notifications.setNotificationChannelAsync("default", {
        name: "default",
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: "#FF231F7C",
      });
    }

    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      Alert.alert("Error", "Failed to get push token for push notification!");
      return;
    }
    const token: string = (await Notifications.getExpoPushTokenAsync()).data;

    return token;
  }, []);

  const schedulePushNotification = useCallback(
    async (title: string, body: string) => {
      await Notifications.scheduleNotificationAsync({
        content: {
          title,
          body,
        },
        trigger: {
          type: Notifications.SchedulableTriggerInputTypes.CALENDAR,
          hour: 9,
          minute: 0,
          repeats: true,
        },
      });
    },
    [],
  );

  useEffect(() => {
    registerForPushNotificationsAsync();

    notificationListener.current =
      Notifications.addNotificationReceivedListener(() => {
        getNewQuote();
      });

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener(() => {
        getNewQuote();
      });

    return () => {
      if (notificationListener.current) {
        notificationListener.current.remove();
      }

      if (responseListener.current) {
        responseListener.current.remove();
      }
    };
  }, [getNewQuote, registerForPushNotificationsAsync]);

  useEffect(() => {
    if (quote) {
      schedulePushNotification(quote.quote, quote.author);
    }
  }, [quote, schedulePushNotification]);
};
