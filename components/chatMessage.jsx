import { View, Text,StyleSheet, Dimensions } from 'react-native'


export const LeftChatMessage = () => {
  return (
    <View style={styles.leftContainer}>
      <Text style={styles.message}>Message</Text>
    </View>
  )
}

export const RightChatMessage = () =>{
    return (
        <View style={styles.rightContainer}>
          <Text style={styles.message}>Nice Message</Text>
        </View>
      )   
}


const styles = StyleSheet.create({
    leftContainer:{
        backgroundColor:'black',
        width:"70%",
        padding:10,
        borderRadius:15,
        flexDirection:"row",
        marginLeft:Dimensions.get('screen').width/3.4,
        marginBottom:10
    },
    rightContainer:{
        backgroundColor:'black',
        width:"70%",
        padding:10,
        borderRadius:15,
        flexDirection:"row",
        marginBottom:10

    },
    message:{
        color:'#FFF'
    }
})