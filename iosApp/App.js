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
import Items from './components/Items'

const App = () => {
  return (
    <View style={styles.app}>
      <Header />
      <Items />
    </View>
  )
}

const styles = StyleSheet.create({
  app: {
    // flex: 1,
    height: '100%'
  },
})

export default App;