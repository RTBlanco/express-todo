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

const Items = () => {
  return (
    <View style={styles.items}>
      <Text>Hey </Text>
    </View>
  )
}


const styles = StyleSheet.create({
  items: {
    flex: 2,
    backgroundColor: 'whitesmoke'
  }
})

export default Items;