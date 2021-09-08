import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  TextInput,
  Image
} from 'react-native';


const Item = () => {
  return (
    <View style={styles.item}>
      <Text style={styles.h3}>Test</Text>
      <View style={styles.settings}>
        <Image style={styles.pencil} source={require('../images/pencil.png')}/>
        <Image style={styles.x} source={require('../images/X.png')}/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  h3: {
    // flex: 1,
    fontSize: 20,
    marginTop: 1,
    marginBottom: 1,
    fontWeight: 'bold'
  },

  item: {
    // flex: 1,
    padding: 10,
    // marginTop: 10,
    // marginBottom: 10,
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