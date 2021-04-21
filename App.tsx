import React from 'react'
import Routes from './src/routes'
import AppLoading from 'expo-app-loading';
import { useFonts, Jost_600SemiBold, Jost_400Regular, Jost_500Medium, Jost_300Light } from '@expo-google-fonts/jost';

export default function App() {
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
