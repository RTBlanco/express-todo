import React, {useState} from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Alert
} from 'react-native';
import {createNewItem} from '../helper/connection';

const Header = ({setItems}) => {
  const [name, setName] = useState('')

  const handleChange = (item) => {
    setName(item)
  }

  const handleSubmit = () => {
    const form = new FormData()
    form.append('name', name)

    createNewItem(form).then(resp => {
      setItems(prev => [...prev, resp])
    })
    // newItem(name)
    setName('')
  }

  return (
    <View style={styles.header}>
      <Text style={styles.h1}>Todo List!</Text>
      <TextInput style={styles.input} placeholder="name" onChangeText={handleChange} onSubmitEditing={handleSubmit} value={name}/>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    // flex: 1,
    paddingTop: 20,
    alignItems: 'center',
    backgroundColor: '#4CC9F0',
    height: '14%',
    // borderBottomColor: 'black',
    // borderBottomWidth: 2
    // Debugging
    // borderColor: 'red',
    // borderWidth: 3
  },

  h1: {
    fontSize: 30,
    fontWeight: 'bold',
    margin: 20
  },

  input: {
    fontSize: 15,
    width: '100%',
    backgroundColor: 'whitesmoke',
    height: 35,
    borderColor: 'grey',
    borderBottomColor: 'black',
    borderTopWidth: 2,
    borderBottomWidth: 4,
    position: "absolute",
    bottom: 0
  }
})

export default Header;