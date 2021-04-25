import React, { useEffect } from 'react'
import AppLoading from 'expo-app-loading';
import { useFonts, Jost_600SemiBold, Jost_400Regular, Jost_500Medium, Jost_300Light } from '@expo-google-fonts/jost';
import * as Notifications from 'expo-notifications'

import Routes from './src/routes'
import { PlantProps } from './src/libs/storage';

const App: React.FC = () => {
  useEffect(() => {
    const subscription = Notifications.addNotificationReceivedListener(
      async notifications =>  {
        const data = notifications.request.content.data.plant as PlantProps
        console.log(data)
      })
      return () => subscription.remove()

    // ;(async () => {
      // const data = await Notifications.getAllScheduledNotificationsAsync()
      // console.log(data)

      // await Notifications.cancelAllScheduledNotificationsAsync()
    // })()
  }, [])

  let [fontsLoaded] = useFonts({
    Jost_600SemiBold,
    Jost_500Medium,
    Jost_400Regular,
    Jost_300Light,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <Routes />
  )
}

export default App
