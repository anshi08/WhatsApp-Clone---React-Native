import { View, Text,StyleSheet, SafeAreaView,StatusBar,TextInput,Keyboard } from 'react-native'
import React, { useEffect } from 'react'

const TextStatus = ({navigation}) => {


 

  return (
    <SafeAreaView style={styles.container}>
      <TextInput style={styles.text} placeholder="Enter Your Status" placeholderTextColor={'#FFFFFF'} />
    </SafeAreaView>
  )
}


export default TextStatus

const styles = StyleSheet.create({
container:{
    flex:1,
    justifyContent:"center",
    alignItems:'center',
    borderColor:"black",
    backgroundColor:"red"
},
text:{
  color:'#FFFFFF',
  borderWidth:2,
  fontSize:30,
  borderWidth:0
}
})