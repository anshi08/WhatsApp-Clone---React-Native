import { View, Text,StyleSheet,Image, Dimensions, Pressable } from 'react-native'
import React from 'react'

const StatusCard = ({timeCreated,navigation}) => {
  return (
    <Pressable onPress={()=>navigation.navigate('stories')}>
    <View style={styles.container}>
        <Image
        source={{
            uri:"https://images.unsplash.com/photo-1574701148212-8518049c7b2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80"
        }}
        style={styles.image}
        />
        <View style={styles.card}>
            <Text style={styles.name}>Apoorv</Text>
            <Text>{timeCreated}</Text>
        </View>
    </View>
    </Pressable>
  )
}

export default StatusCard

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        marginHorizontal:'2%',
        marginTop:'3%'

    },
    image:{
        width:Dimensions.get('screen').width/8,
        height:Dimensions.get('screen').height/17,
        borderRadius:Dimensions.get('screen').width

    },
    card:{
        marginHorizontal:'2%',
        justifyContent:"center",
        alignItems:"flex-start"
    },
    name:{
        fontSize:18
    }
})