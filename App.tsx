import React from 'react';
import { Text, View } from 'react-native';

import { ThemeProvider } from 'styled-components';

import theme from './src/styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <View>
        <Text>Open up App.tsx to start working on your app!</Text>
      </View>
    </ThemeProvider>
  );
}
