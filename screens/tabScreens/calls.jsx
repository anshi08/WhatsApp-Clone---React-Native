import { View, Text, FlatList, Pressable } from 'react-native'
import React from 'react'
import CallCard from '../../components/callCard'
import { FloatingAction } from "react-native-floating-action";
import { MaterialIcons } from '@expo/vector-icons';
const Calls = () => {
  return (
    <View>
    <FlatList
    data={[1,2,3,4,5,6,7,8,9,10,11,12]}
    renderItem={() => <CallCard/>}
    />
    <Pressable onPress={()=>console.log("hi")}>
       <FloatingAction
    color='green'
    floatingIcon={<MaterialIcons name="add-call" size={24} color="white" />}
    actions={[]}
    onPressItem={name => {
      console.log(`selected button: ${name}`);
    }}
    animated={true}
  />
  </Pressable>
    </View>
  )
}

export default Calls