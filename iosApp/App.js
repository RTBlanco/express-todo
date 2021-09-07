/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput
} from 'react-native';
import Header from './components/Header';

const App = () => {
  return (
    <View style={styles.app}>
      <Header />
    </View>
  )
}

const styles = StyleSheet.create({
  app: {
    flex:1
  },
})

export default App;