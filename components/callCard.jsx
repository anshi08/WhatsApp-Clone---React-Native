import { View, Text,StyleSheet,Dimensions,Image } from 'react-native'
import { Ionicons, MaterialIcons  } from '@expo/vector-icons';
import React from 'react'

const CallCard = () => {
  return (
    <View style={styles.container}>
    <Image
         style={styles.img}
         source={{
           uri: 'https://images.unsplash.com/photo-1506795660198-e95c77602129?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80',
         }}
       />
       <View style={styles.centerCardStyle}>
         <Text style={styles.heading}>Alisha </Text>
         <View style={styles.callDetails}>
         <MaterialIcons name="call-made" size={24} color="green" />
         <Text>Today, 10:35AM</Text>
         </View>
       </View>
       <View style={styles.rightCardStyle}>
       <Ionicons name="call" size={24} color="green" />
       </View>
     </View>
  )
}

export default CallCard

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
        flex:4,
        alignItems:"flex-start"
    },
    heading:{
        fontSize:15
    },
    rightCardStyle:{
        justifyContent:"center",
        flex:2,
        alignItems:"center"
    },
    callDetails:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    }
})