import React from "react";
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

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.h1}>Todo List!</Text>
      <TextInput placeholder="name"/>
    </View>
  )
}

const styles = StyleSheet.create({
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

export default Header;