/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StyleSheet, useColorScheme, View} from 'react-native';
import {Provider} from 'react-redux';

import {store} from './src/redux/store';
import RootNavigator from './src/navigation/router';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    flex: 1,
  };

  return (
    <Provider store={store}>
      <View style={backgroundStyle}>
        <RootNavigator />
      </View>
    </Provider>
  );
}

export default App;
