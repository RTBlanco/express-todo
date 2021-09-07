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
    <View style={styles.header}>
      <Text style={styles.h1}>Todo List!</Text>
      <TextInput placeholder="name"/>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {

  },

  h1: {

    // display: block;
    // fontSize: 2em;
    // margin-top: 0.67em;

    // margin-bottom: 0.67em;
    // margin-left: 0;
    // margin-right: 0;
    // font-weight: bold;
  }
})

export default App;