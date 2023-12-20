import { View, Text,SafeAreaView,StyleSheet,StatusBar,TextInput, ScrollView, FlatList } from 'react-native'
import React from 'react'
import { Entypo,Ionicons,AntDesign,FontAwesome,FontAwesome5 } from '@expo/vector-icons';
import CustomHeader from '../components/customHeader'
import { LeftChatMessage, RightChatMessage } from '../components/chatMessage';


const Message = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
        <CustomHeader messageHeader={true} headerShown={true} navigation={navigation}/>
        <View style={styles.messageContainer}>
        <FlatList 
      showsVerticalScrollIndicator={false}
        data={[1,2,3,4,5,6,7,8]}
        renderItem={({item},idx) =><>
            <LeftChatMessage/>
    <RightChatMessage/>
        </>}
        />


       
 
          <View style={styles.bottomChatContainer}>
            <View style={styles.textInputContainer}>
            <Entypo name="emoji-happy" size={24} color="black" />
            <View style={styles.leftGroup}>
            <TextInput placeholder='Message' style={styles.textInput}/>
            <View style={styles.leftGroupIcon}>
            <AntDesign name="sharealt" size={24} color="black" />
            <FontAwesome name="rupee" size={24} color="black" />
            <FontAwesome5 name="camera" size={24} color="black" />
            </View>
            </View>
        
            </View>
            <View style={styles.bottomIcon}>
            <Ionicons name="ios-mic-sharp" size={30} color="white" />
            </View>
          </View>
        </View>
    </SafeAreaView>
  )
}

export default Message

const styles = StyleSheet.create({
  container:{
    flex:1,

  },
  messageContainer:{

    justifyContent:'space-between',
    flex:1,
    padding:5
  },
  textInputContainer:{
    flexDirection:'row',
    borderWidth:2,
    padding:5,
    borderRadius:30,
    flex:1
  },
  textInput:{
    marginHorizontal:10,
    flex:2
  },
  bottomChatContainer:{
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center"
  },
  bottomIcon:{
    justifyContent:'center',
    alignItems:"center",
    backgroundColor:"black",
    borderRadius:100
  },
  leftGroupIcon:{
    flexDirection:'row',
    justifyContent:"space-between",
    alignItems:"center",

    flex:1
    
  },
  leftGroup:{
    flexDirection:'row',
    justifyContent:"space-between",
    flex:1,
  }
})