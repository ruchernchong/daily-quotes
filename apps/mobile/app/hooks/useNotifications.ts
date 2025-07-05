import type { Subscription } from 'expo-modules-core'
import * as Notifications from 'expo-notifications'
import { useEffect, useRef } from 'react'
import { Platform } from 'react-native'
import { useQuote } from './useQuote'

export const useNotifications = () => {
  const { getNewQuote, quote } = useQuote('daily')
  const notificationListener = useRef<Subscription>()
  const responseListener = useRef<Subscription>()

  useEffect(() => {
    registerForPushNotificationsAsync()

    notificationListener.current =
      Notifications.addNotificationReceivedListener(() => {
        getNewQuote()
      })

    responseListener.current =
      Notifications.addNotificationResponseReceivedListener(() => {
        getNewQuote()
      })

    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current!
      )
      Notifications.removeNotificationSubscription(responseListener.current!)
    }
  }, [getNewQuote])

  useEffect(() => {
    if (quote) {
      schedulePushNotification(quote.quote, quote.author)
    }
  }, [quote])

  const registerForPushNotificationsAsync = async () => {
    let token
    if (Platform.OS === 'android') {
      await Notifications.setNotificationChannelAsync('default', {
        name: 'default',
        importance: Notifications.AndroidImportance.MAX,
        vibrationPattern: [0, 250, 250, 250],
        lightColor: '#FF231F7C',
      })
    }

    const { status: existingStatus } = await Notifications.getPermissionsAsync()
    let finalStatus = existingStatus
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync()
      finalStatus = status
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!')
      return
    }
    token = (await Notifications.getExpoPushTokenAsync()).data

    return token
  }

  const schedulePushNotification = async (title: string, body: string) => {
    await Notifications.scheduleNotificationAsync({
      content: {
        title,
        body,
      },
      trigger: {
        hour: 9,
        minute: 0,
        repeats: true,
      },
    })
  }
}
