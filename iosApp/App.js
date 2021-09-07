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

const App = () => {
  return (
    <View style={styles.app}>
      <View style={styles.header}>
        <Text style={styles.h1}>Todo List!</Text>
        <TextInput placeholder="name"/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  app: {
    flex:1
  },

  header: {
    flex: 1,
    paddingTop: 50,
    alignItems: 'center',
    backgroundColor: '#4CC9F0'
  },

  h1: {
    fontSize: 30,
    fontWeight: 'bold'
  }
})

export default App;