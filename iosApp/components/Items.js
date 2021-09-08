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
import Item from './Item';

const Items = () => {
  return (
    <View style={styles.items}>
      {/* Render the items */}
      <Item />
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