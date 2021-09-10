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
import {fetchItems, deleteItem} from './helper/connection';


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

  const remove = (item) => {
    setItems(items.filter(i => i.id !== item.id))
    deleteItem(item)
  }


  return (
    <View style={styles.app}>
      <Header setItems={setItems}/>
      <Items items={items} remove={remove}/>
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