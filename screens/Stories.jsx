import { View, Text,StyleSheet, Dimensions } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { StoryContainer } from 'react-native-stories-view';
import CustomHeader from '../components/customHeader';


const items = [
   "https://images.unsplash.com/photo-1524502397800-2eeaad7c3fe5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
,
 "https://images.unsplash.com/photo-1506795660198-e95c77602129?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
  ,
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
]


const Stories = ({navigation}) => {
  return (
    <>
    <StatusBar style='dark'/>
    <StoryContainer
   visible={true}
   enableProgress={true}
   images={items}
   duration={20}  
   containerStyle={{
      marginVertical:'2%',
       width: Dimensions.get('window').width,
       height: '100%',
       paddingHorizontal:10,

   }}
   headerComponent={<CustomHeader headerShown={true} navigation={navigation} storieHeaderShown={true} messageHeader={true} storiesThreeDot={true}/>}
/>

    </>
  )
}

export default Stories

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})