import 'react-native-gesture-handler';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_500Medium,
  Montserrat_600SemiBold,
  Montserrat_700Bold
} from '@expo-google-fonts/montserrat';

import theme from './src/styles/theme';

import Routes from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold
  });
  return !fontsLoaded ? (
    <ActivityIndicator />
  ) : (
    <ThemeProvider theme={theme}>
      <StatusBar style="light" translucent={false} />
      <Routes />
    </ThemeProvider>
  );
}
