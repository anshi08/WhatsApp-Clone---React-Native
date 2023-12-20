import { View, Text,Image,StyleSheet,Dimensions, Pressable } from 'react-native'
import React from 'react'

const ContactCard = ({navigation}) => {
  return (
    <Pressable onPress={()=>{
      navigation.navigate('message')
    }}>
    <View style={styles.container}>
   <Image
        style={styles.img}
        source={{
          uri: 'https://images.unsplash.com/photo-1664575602554-2087b04935a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80',
        }}
      />
      <View style={styles.centerCardStyle}>
        <Text style={styles.heading}>Mark Zuckerberg </Text>
        <Text>I Love React Native</Text>
      </View>
      <View style={styles.rightCardStyle}>
        <Text>18/12/2022</Text>
      </View>
    </View>
    </Pressable>
  )
}

export default ContactCard

const styles = StyleSheet.create({
    container:{
        marginHorizontal:'1%',
        marginTop:'3%',
        flexDirection:"row",
 

    },
    img:{
        flex:1,
        width:Dimensions.get('screen').width/8,
        height:Dimensions.get('screen').height/17,
        borderRadius:100
    },
    centerCardStyle:{
        marginLeft:'5%',
        justifyContent:"center",
        flex:4
    },
    heading:{
        fontSize:15
    },
    rightCardStyle:{
        justifyContent:"center",
        flex:2,
        alignItems:"center"
    }
})