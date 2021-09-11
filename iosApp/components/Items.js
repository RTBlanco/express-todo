import React from "react";
import {
  StyleSheet,
  FlatList
} from 'react-native';
import Item from './Item';

const Items = ({items, remove}) => {
  return (
    <FlatList style={styles.items} data={items} renderItem={({item}) => <Item key={item.id} item={item} remove={remove} />}/>
  )
}


const styles = StyleSheet.create({
  items: {
    flex: 2,
    backgroundColor: 'whitesmoke'
  }
})

export default Items;