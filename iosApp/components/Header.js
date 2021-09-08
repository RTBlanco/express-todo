import React, {useState} from "react";
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

const Header = ({newItem}) => {
  const [name, setName] = useState('')

  const handleChange = (item) => {
    setName(item)
  }

  const handleSubmit = () => {
    newItem(name)
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
    height: '15%',
    borderBottomColor: 'black',
    borderBottomWidth: 10
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
    width: '100%',
    backgroundColor: 'whitesmoke',
    height: 30,
    borderColor: 'grey',
    borderTopWidth: 2,
    borderBottomWidth: 2 
  }
})

export default Header;