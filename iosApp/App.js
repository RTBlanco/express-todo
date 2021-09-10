/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState, useEffect} from 'react';
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
import {fetchItems, createNewItem, deleteItem} from './helper/connection';


const App = () => {

  const [items, setItems] = useState([])

  useEffect(() => {
    fetchItems()
      .then(resp => {
        setItems(resp)
      })
    // return () => {
    //   cleanup
    // }
  }, [])

  const newItem = (name) => {
    let item = { id: items.length + 1, name }
    setItems(prev => [item, ...prev] )
  }

  const deleteItem = (item) => {
    setItems(items.filter(i => i.id !== item.id ))
  }

  return (
    <View style={styles.app}>
      <Header newItem={newItem} setItems={setItems}/>
      <Items items={items} deleteItem={deleteItem}/>
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