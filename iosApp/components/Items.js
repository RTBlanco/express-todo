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

const Items = ({items, remove}) => {
  const renderItems = () => {
    return items.map(item => <Item key={item.id} item={item} remove={remove} />)
  }
  return (
    <View style={styles.items}>
      {/* Render the items */}
      {/* <Item /> */}
      {renderItems()}
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