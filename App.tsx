/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, useColorScheme, View} from 'react-native';

import RootNavigator from './src/navigation/router';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: 'red',
    flex: 1,
  };

  return (
    <View style={backgroundStyle}>
      <RootNavigator />
    </View>
  );
}

export default App;
