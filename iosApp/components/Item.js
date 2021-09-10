import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Image,
  TouchableOpacity
} from 'react-native';


const Item = ({item, remove}) => {
  const [edit, setEdit] = useState(false);
  const [itemName, setName] = useState(item.name)

  const handleChange = (name) => {
    setName(name)
  }

  const handleSubmit = () => {
    item.name = itemName;
    setEdit(false)
  }


  const normalRender = () => {
    return (
      <View style={styles.item}>
        <Text style={styles.h3}>{item.name}</Text>
        <View style={styles.settings}>
          <TouchableOpacity onPress={() => setEdit(true)}>
            <Image style={styles.pencil} source={require('../images/pencil.png')}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => remove(item)}>
            <Image style={styles.x} source={require('../images/X.png')}/>
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  const editRender = () => {
    return (
      <View style={styles.item}>
        <TextInput style={styles.h3} value={itemName} onSubmitEditing={handleSubmit}
        onChangeText={handleChange} 
        />
        <View style={styles.settings}>
          <TouchableOpacity onPress={() => remove(item)}>
            <Image style={styles.x} source={require('../images/X.png')}/>
          </TouchableOpacity>
        </View>
      </View>
    )
  }


  return (
    <View>
      {edit ? editRender() : normalRender() }
    </View>
  )
}

const styles = StyleSheet.create({
  h3: {
    fontSize: 20,
    marginTop: 1,
    marginBottom: 1,
    fontWeight: 'bold'
  },

  item: {
    padding: 10,
    borderBottomColor: 'grey',
    borderBottomWidth: 3,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  settings: {
    flexDirection: 'row'
  },

  pencil: {
    height: 25,
    width: 25,
    marginRight: 15
  },

  x: {
    height: 25,
    width: 25
  }
})

export default Item;